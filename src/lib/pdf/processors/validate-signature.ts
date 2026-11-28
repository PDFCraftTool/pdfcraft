/**
 * Validate Signature Processor
 * Extracts and validates digital signatures from PDFs.
 */
import forge from 'node-forge';
import type { ExtractedSignature, SignatureValidationResult } from '@/types/digital-signature';

/**
 * Extract all signatures from a PDF
 */
export function extractSignatures(pdfBytes: Uint8Array): ExtractedSignature[] {
  const signatures: ExtractedSignature[] = [];
  const pdfString = new TextDecoder('latin1').decode(pdfBytes);

  const sigRegex = /\/Type\s*\/Sig\b/g;
  let sigMatch;
  let sigIndex = 0;

  while ((sigMatch = sigRegex.exec(pdfString)) !== null) {
    try {
      const searchStart = Math.max(0, sigMatch.index - 5000);
      const searchEnd = Math.min(pdfString.length, sigMatch.index + 10000);
      const context = pdfString.substring(searchStart, searchEnd);

      const byteRangeMatch = context.match(/\/ByteRange\s*\[\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*\]/);
      if (!byteRangeMatch) continue;

      const byteRange = [
        parseInt(byteRangeMatch[1], 10),
        parseInt(byteRangeMatch[2], 10),
        parseInt(byteRangeMatch[3], 10),
        parseInt(byteRangeMatch[4], 10),
      ];

      const contentsMatch = context.match(/\/Contents\s*<([0-9A-Fa-f]+)>/);
      if (!contentsMatch) continue;

      const contentsBytes = hexToBytes(contentsMatch[1]);
      const reasonMatch = context.match(/\/Reason\s*\(([^)]*)\)/);
      const locationMatch = context.match(/\/Location\s*\(([^)]*)\)/);
      const contactMatch = context.match(/\/ContactInfo\s*\(([^)]*)\)/);
      const nameMatch = context.match(/\/Name\s*\(([^)]*)\)/);
      const timeMatch = context.match(/\/M\s*\(D:(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);

      let signingTime: string | undefined;
      if (timeMatch) {
        signingTime = `${timeMatch[1]}-${timeMatch[2]}-${timeMatch[3]}T${timeMatch[4]}:${timeMatch[5]}:${timeMatch[6]}`;
      }

      signatures.push({
        index: sigIndex++,
        contents: contentsBytes,
        byteRange,
        reason: reasonMatch ? reasonMatch[1] : undefined,
        location: locationMatch ? locationMatch[1] : undefined,
        contactInfo: contactMatch ? contactMatch[1] : undefined,
        name: nameMatch ? nameMatch[1] : undefined,
        signingTime,
      });
    } catch {
      // Skip malformed signatures
    }
  }

  return signatures;
}

/**
 * Validate a single signature
 */
export function validateSignature(
  signature: ExtractedSignature,
  pdfBytes: Uint8Array,
  trustedCert?: forge.pki.Certificate
): SignatureValidationResult {
  const result: SignatureValidationResult = {
    signatureIndex: signature.index,
    isValid: false,
    signerName: 'Unknown',
    issuer: 'Unknown',
    validFrom: new Date(0),
    validTo: new Date(0),
    isExpired: false,
    isSelfSigned: false,
    isTrusted: false,
    algorithms: { digest: 'Unknown', signature: 'Unknown' },
    serialNumber: '',
    byteRange: signature.byteRange,
    coverageStatus: 'unknown',
    reason: signature.reason,
    location: signature.location,
    contactInfo: signature.contactInfo,
  };

  const [o1, l1, o2, l2] = signature.byteRange;
  if (o1 === 0 && l1 > 0 && l2 > 0 && o2 >= l1 && o2 + l2 <= pdfBytes.length) {
    result.coverageStatus = o2 + l2 === pdfBytes.length ? 'full' : 'partial';
  }

  // A broken ByteRange cannot be verified; fail closed.
  if (result.coverageStatus === 'unknown') {
    result.errorMessage = 'Invalid signature ByteRange';
    return result;
  }

  try {
    const verification = verifyDetachedCms(signature, pdfBytes);
    if (!verification.valid) {
      result.errorMessage = verification.error;
      return result;
    }

    const signerCert = verification.signerCert!;

    const subjectCN = signerCert.subject.getField('CN');
    const subjectO = signerCert.subject.getField('O');
    const subjectE = signerCert.subject.getField('E') || signerCert.subject.getField('emailAddress');
    const issuerCN = signerCert.issuer.getField('CN');
    const issuerO = signerCert.issuer.getField('O');

    result.signerName = (subjectCN?.value as string) ?? 'Unknown';
    result.signerOrg = subjectO?.value as string | undefined;
    result.signerEmail = subjectE?.value as string | undefined;
    result.issuer = (issuerCN?.value as string) ?? 'Unknown';
    result.issuerOrg = issuerO?.value as string | undefined;
    result.validFrom = signerCert.validity.notBefore;
    result.validTo = signerCert.validity.notAfter;
    result.serialNumber = signerCert.serialNumber;

    const now = new Date();
    result.isExpired = now > result.validTo || now < result.validFrom;
    result.isSelfSigned = signerCert.isIssuer(signerCert);

    if (trustedCert) {
      try {
        const isTrustedIssuer = trustedCert.isIssuer(signerCert);
        const isSameCert = signerCert.serialNumber === trustedCert.serialNumber;
        // The certificate list came from the parsed CMS; walk it for issuer matches.
        const chainTrusted = verification.certificates.some(cert =>
          trustedCert.isIssuer(cert) || cert.serialNumber === trustedCert.serialNumber
        );
        result.isTrusted = isTrustedIssuer || isSameCert || chainTrusted;
      } catch {
        result.isTrusted = false;
      }
    }

    result.algorithms = {
      digest: getDigestAlgorithmName(verification.digestAlgorithm),
      // CMS often names plain rsaEncryption and carries the digest separately.
      signature: verification.signatureAlgorithm === '1.2.840.113549.1.1.1'
        ? `RSA with ${getDigestAlgorithmName(verification.digestAlgorithm)}`
        : getSignatureAlgorithmName(verification.signatureAlgorithm),
    };

    if (signature.signingTime) {
      result.signatureDate = new Date(signature.signingTime);
    }

    result.isValid = true;
  } catch (e) {
    result.errorMessage = e instanceof Error ? e.message : 'Failed to parse signature';
  }

  return result;
}

interface CmsVerification {
  valid: boolean;
  error?: string;
  signerCert?: forge.pki.Certificate;
  certificates: forge.pki.Certificate[];
  digestAlgorithm: string;
  signatureAlgorithm: string;
}

/**
 * Verify a detached PKCS#7 signature over the PDF bytes covered by the signature's
 * /ByteRange. Follows the CMS structure directly (node-forge does not verify
 * signed-data): hash the two ByteRange segments, compare the messageDigest signed
 * attribute, then verify the RSA signature over the DER-encoded signed attributes.
 */
function verifyDetachedCms(
  signature: ExtractedSignature,
  pdfBytes: Uint8Array
): CmsVerification {
  const fail = (error: string): CmsVerification => ({ valid: false, error, certificates: [], digestAlgorithm: '', signatureAlgorithm: '' });

  const [o1, l1, o2, l2] = signature.byteRange;

  let contentInfo: forge.asn1.Asn1;
  try {
    // The runtime accepts the options object; @types/node-forge only lists the strict flag.
    const fromDer = forge.asn1.fromDer as unknown as (
      bytes: string, options?: { parseAllBytes?: boolean }
    ) => forge.asn1.Asn1;
    contentInfo = fromDer(uint8ArrayToBinaryString(signature.contents), { parseAllBytes: false });
  } catch {
    return fail('Signature contents are not valid ASN.1');
  }

  const contentInfoValue = contentInfo.value as forge.asn1.Asn1[];
  const signedData = contentInfoValue[1]?.value?.[0] as forge.asn1.Asn1 | undefined;
  const sdFields = signedData?.value as forge.asn1.Asn1[] | undefined;
  const signerInfos = sdFields?.[sdFields.length - 1];
  const signerInfo = signerInfos?.value?.[0] as forge.asn1.Asn1 | undefined;
  const signerFields = signerInfo?.value as forge.asn1.Asn1[] | undefined;
  if (!sdFields || !signerFields) {
    return fail('Signature contents are not a supported PKCS#7 signed data');
  }

  const digestAlgorithm = forge.asn1.derToOid(str(children(signerFields[2])[0]));
  if (!digestAlgorithm) {
    return fail('Malformed digest algorithm in signature');
  }
  const md = createDigest(digestAlgorithm);
  if (!md) {
    return fail(`Unsupported digest algorithm: ${digestAlgorithm}`);
  }

  const hashed = createDigest(digestAlgorithm)!;
  hashed.update(binaryStringRange(pdfBytes, o1, l1));
  hashed.update(binaryStringRange(pdfBytes, o2, l2));
  const contentDigest = hashed.digest().getBytes();

  // signedAttrs are an IMPLICIT [0] SET OF Attribute.
  const attrsIdx = signerFields.findIndex(e =>
    e.tagClass === forge.asn1.Class.CONTEXT_SPECIFIC && e.type === 0
  );
  const attrs = attrsIdx >= 0 ? signerFields[attrsIdx] : null;

  let signedBytes: string;
  if (attrs) {
    let messageDigest: string | undefined;
    for (const attr of children(attrs)) {
      const fields = children(attr);
      if (forge.asn1.derToOid(str(fields[0])) === forge.pki.oids.messageDigest) {
        messageDigest = str(children(fields[1])[0]);
        break;
      }
    }
    if (!messageDigest) {
      return fail('Signature is missing the messageDigest attribute');
    }
    if (messageDigest !== contentDigest) {
      return fail('Document content does not match the signature');
    }
    // The signature is computed over the explicit SET OF encoding of signedAttrs.
    const asSet = forge.asn1.create(
      forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SET, true, children(attrs)
    );
    const setMd = createDigest(digestAlgorithm)!;
    setMd.update(forge.asn1.toDer(asSet).getBytes());
    signedBytes = setMd.digest().getBytes();
  } else {
    // Legacy signatures without signed attributes sign the content digest directly.
    signedBytes = contentDigest;
  }

  const signatureAlgorithm = forge.asn1.derToOid(str(children(signerFields[attrsIdx >= 0 ? attrsIdx + 1 : 3])[0]));
  if (!signatureAlgorithm.startsWith('1.2.840.113549.1.1.')) {
    return fail(`Unsupported signature algorithm: ${signatureAlgorithm}`);
  }

  const signatureEl = signerFields[attrsIdx >= 0 ? attrsIdx + 2 : 4];
  if (!signatureEl || signatureEl.tagClass !== forge.asn1.Class.UNIVERSAL || signatureEl.type !== forge.asn1.Type.OCTETSTRING) {
    return fail('Malformed signature value');
  }
  const signatureBytes = str(signatureEl);

  // Parse the certificates carried in the CMS and pick the signer by serial number.
  const certificates: forge.pki.Certificate[] = [];
  for (const field of sdFields) {
    if (field.tagClass !== forge.asn1.Class.CONTEXT_SPECIFIC || field.type !== 0) continue;
    for (const certAsn1 of field.value as forge.asn1.Asn1[]) {
      try {
        certificates.push(forge.pki.certificateFromAsn1(certAsn1));
      } catch {
        // Skip malformed certificates; verification is decided by the signer's own cert.
      }
    }
  }
  if (certificates.length === 0) {
    return fail('No certificates found in signature');
  }

  const signerSerial = forge.util.createBuffer(str(children(signerFields[1])[1])).toHex();
  const signerCert = certificates.find(c => c.serialNumber === signerSerial) || certificates[0];

  const publicKey = signerCert.publicKey as forge.pki.rsa.PublicKey;
  if (!publicKey.verify(signedBytes, signatureBytes, 'RSASSA-PKCS1-V1_5')) {
    return fail('Signature verification failed');
  }

  return { valid: true, signerCert, certificates, digestAlgorithm, signatureAlgorithm };
}

/**
 * Validate all signatures in a PDF
 */
export async function validatePdfSignatures(
  pdfBytes: Uint8Array,
  trustedCert?: forge.pki.Certificate
): Promise<SignatureValidationResult[]> {
  const signatures = extractSignatures(pdfBytes);
  return signatures.map(sig => validateSignature(sig, pdfBytes, trustedCert));
}

/**
 * Convert Uint8Array to binary string without stack overflow
 */
function uint8ArrayToBinaryString(bytes: Uint8Array): string {
  const CHUNK_SIZE = 8192;
  let result = '';
  for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
    const chunk = bytes.subarray(i, Math.min(i + CHUNK_SIZE, bytes.length));
    result += String.fromCharCode.apply(null, Array.from(chunk));
  }
  return result;
}

/** Binary string for a byte range, chunked to avoid call-stack overflow. */
function binaryStringRange(pdfBytes: Uint8Array, start: number, len: number): string {
  const end = Math.min(start + len, pdfBytes.length);
  let result = '';
  for (let i = start; i < end; i += 8192) {
    const chunk = pdfBytes.subarray(i, Math.min(i + 8192, end));
    result += String.fromCharCode.apply(null, Array.from(chunk));
  }
  return result;
}

/** Child nodes of a constructed ASN.1 value. */
function children(node?: forge.asn1.Asn1): forge.asn1.Asn1[] {
  return node && Array.isArray(node.value) ? node.value as forge.asn1.Asn1[] : [];
}

/** Raw bytes/OID value of a primitive ASN.1 node. */
function str(node?: forge.asn1.Asn1): string {
  return typeof node?.value === 'string' ? node.value : '';
}

const DIGEST_MD: Record<string, () => forge.md.MessageDigest | null> = {
  '1.2.840.113549.2.5': () => forge.md.md5.create(),
  '1.3.14.3.2.26': () => forge.md.sha1.create(),
  '2.16.840.1.101.3.4.2.1': () => forge.md.sha256.create(),
  '2.16.840.1.101.3.4.2.2': () => forge.md.sha384.create(),
  '2.16.840.1.101.3.4.2.3': () => forge.md.sha512.create(),
};

function createDigest(oid: string): forge.md.MessageDigest | null {
  const factory = DIGEST_MD[oid];
  return factory ? factory() : null;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}

const DIGEST_ALGORITHMS: Record<string, string> = {
  '1.2.840.113549.2.5': 'MD5',
  '1.3.14.3.2.26': 'SHA-1',
  '2.16.840.1.101.3.4.2.1': 'SHA-256',
  '2.16.840.1.101.3.4.2.2': 'SHA-384',
  '2.16.840.1.101.3.4.2.3': 'SHA-512',
};

const SIGNATURE_ALGORITHMS: Record<string, string> = {
  '1.2.840.113549.1.1.1': 'RSA',
  '1.2.840.113549.1.1.5': 'RSA with SHA-1',
  '1.2.840.113549.1.1.11': 'RSA with SHA-256',
  '1.2.840.113549.1.1.12': 'RSA with SHA-384',
  '1.2.840.113549.1.1.13': 'RSA with SHA-512',
  '1.2.840.10045.2.1': 'ECDSA',
  '1.2.840.10045.4.3.2': 'ECDSA with SHA-256',
  '1.2.840.10045.4.3.3': 'ECDSA with SHA-384',
  '1.2.840.10045.4.3.4': 'ECDSA with SHA-512',
};

function getDigestAlgorithmName(oid: string): string {
  return DIGEST_ALGORITHMS[oid] || oid || 'Unknown';
}

function getSignatureAlgorithmName(oid: string): string {
  return SIGNATURE_ALGORITHMS[oid] || oid || 'Unknown';
}
