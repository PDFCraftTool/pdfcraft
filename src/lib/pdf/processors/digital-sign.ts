/**
 * Digital Signature Processor
 * Signs PDFs with X.509 certificates using node-forge + zgapdfsigner.
 */
import forge from 'node-forge';
import type {
  CertificateData,
  RemoteSigner,
  SignPdfOptions,
  SignatureInfo,
  VisibleSignatureOptions,
} from '@/types/digital-signature';

/**
 * Parse a PFX/P12 file
 */
export function parsePfxFile(pfxBytes: ArrayBuffer, password: string): CertificateData {
  const pfxAsn1 = forge.asn1.fromDer(forge.util.createBuffer(new Uint8Array(pfxBytes)));
  const pfx = forge.pkcs12.pkcs12FromAsn1(pfxAsn1, password);

  const certBags = pfx.getBags({ bagType: forge.pki.oids.certBag });
  const keyBags = pfx.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });

  const certBagArray = certBags[forge.pki.oids.certBag];
  const keyBagArray = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag];

  if (!certBagArray || certBagArray.length === 0) {
    throw new Error('No certificate found in PFX file');
  }
  if (!keyBagArray || keyBagArray.length === 0) {
    throw new Error('No private key found in PFX file');
  }

  const certificate = certBagArray[0].cert;
  if (!certificate) {
    throw new Error('Failed to extract certificate from PFX file');
  }

  return { p12Buffer: pfxBytes, password, certificate };
}

/**
 * Parse PEM files (combined cert + key)
 */
export function parseCombinedPem(pemContent: string, password?: string): CertificateData {
  const certMatch = pemContent.match(/-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/);
  const keyMatch = pemContent.match(/-----BEGIN (RSA |EC |ENCRYPTED )?PRIVATE KEY-----[\s\S]*?-----END (RSA |EC |ENCRYPTED )?PRIVATE KEY-----/);

  if (!certMatch) throw new Error('No certificate found in PEM file');
  if (!keyMatch) throw new Error('No private key found in PEM file');

  const certificate = forge.pki.certificateFromPem(certMatch[0]);

  let privateKey: forge.pki.PrivateKey;
  if (keyMatch[0].includes('ENCRYPTED')) {
    if (!password) throw new Error('Password required for encrypted private key');
    privateKey = forge.pki.decryptRsaPrivateKey(keyMatch[0], password);
    if (!privateKey) throw new Error('Failed to decrypt private key');
  } else {
    privateKey = forge.pki.privateKeyFromPem(keyMatch[0]);
  }

  const p12Password = password || 'temp-password';
  const p12Asn1 = forge.pkcs12.toPkcs12Asn1(privateKey, [certificate], p12Password, { algorithm: '3des' });
  const p12Der = forge.asn1.toDer(p12Asn1).getBytes();
  const p12Buffer = new Uint8Array(p12Der.length);
  for (let i = 0; i < p12Der.length; i++) {
    p12Buffer[i] = p12Der.charCodeAt(i);
  }

  return { p12Buffer: p12Buffer.buffer, password: p12Password, certificate };
}

/**
 * Get certificate info for display
 */
export function getCertificateInfo(certificate: forge.pki.Certificate) {
  const subjectCN = certificate.subject.getField('CN');
  const issuerCN = certificate.issuer.getField('CN');

  return {
    subject: (subjectCN?.value as string) ?? 'Unknown',
    issuer: (issuerCN?.value as string) ?? 'Unknown',
    validFrom: certificate.validity.notBefore,
    validTo: certificate.validity.notAfter,
    serialNumber: certificate.serialNumber,
  };
}

function buildSignOptions(options: SignPdfOptions): Record<string, unknown> {
  const signatureInfo = options.signatureInfo ?? {};
  const signOptions: Record<string, unknown> = {};

  if (signatureInfo.reason) signOptions.reason = signatureInfo.reason;
  if (signatureInfo.location) signOptions.location = signatureInfo.location;
  if (signatureInfo.contactInfo) signOptions.contact = signatureInfo.contactInfo;

  if (options.visibleSignature?.enabled) {
    const vs = options.visibleSignature;
    const drawinf: Record<string, unknown> = {
      area: { x: vs.x, y: vs.y, w: vs.width, h: vs.height },
      pageidx: vs.page,
    };

    if (vs.imageData && vs.imageType) {
      drawinf.imgInfo = { imgData: vs.imageData, imgType: vs.imageType };
    }
    if (vs.text) {
      drawinf.textInfo = {
        text: vs.text,
        size: vs.textSize ?? 12,
        color: vs.textColor ?? '#000000',
      };
    }

    signOptions.drawinf = drawinf;
  }

  return signOptions;
}

/**
 * Sign a PDF with a certificate
 */
export async function signPdf(
  pdfBytes: Uint8Array,
  certificateData: CertificateData,
  options: SignPdfOptions = {}
): Promise<Uint8Array> {
  // Dynamic import to avoid SSR issues
  const { PdfSigner } = await import('zgapdfsigner');

  const signOptions: Record<string, unknown> = {
    ...buildSignOptions(options),
    p12cert: certificateData.p12Buffer,
    pwd: certificateData.password,
  };

  const signer = new PdfSigner(signOptions);
  const signedPdfBytes = await signer.sign(pdfBytes);
  return new Uint8Array(signedPdfBytes);
}

/**
 * Sign a PDF with a key held by a remote signing service.
 *
 * zgapdfsigner builds the whole signature (placeholder, ByteRange, PKCS#7 signed attributes) but
 * calls the key synchronously, while a remote service answers asynchronously. So the PDF is
 * assembled once with a stand-in key that records the hash it is asked to sign and returns random
 * bytes of the right length; the service then signs that hash and its signature replaces the
 * random bytes inside /Contents. /Contents is outside the ByteRange and the signed attributes do
 * not cover the signature value, so nothing else changes.
 */
export async function signPdfRemote(
  pdfBytes: Uint8Array,
  remote: RemoteSigner,
  options: SignPdfOptions = {}
): Promise<Uint8Array> {
  const { PdfSigner, CertsChain } = await import('zgapdfsigner');

  const [signCert] = remote.certificates;
  if (!signCert) throw new Error('The signing service returned no certificate');
  const publicKey = signCert.publicKey as forge.pki.rsa.PublicKey;
  if (!publicKey || !publicKey.n || !publicKey.e) {
    throw new Error('Only RSA signing keys are supported');
  }
  const sigLen = Math.ceil(publicKey.n.bitLength() / 8);

  let capturedHash: Uint8Array | null = null;
  let placeholder = '';
  const standInKey = {
    n: publicKey.n,
    e: publicKey.e,
    // forge's PKCS#7 signer calls key.sign(md) with the SHA-256 of the DER signed attributes
    sign(md: forge.md.MessageDigest): string {
      capturedHash = binaryStringToBytes(md.digest().getBytes());
      placeholder = forge.random.getBytesSync(sigLen);
      return placeholder;
    },
  };

  class RemotePdfSigner extends PdfSigner {
    protected loadP12cert(): unknown {
      const chain = new CertsChain(remote.certificates);
      if (chain.getSignCert() !== signCert) {
        throw new Error('Chain of certificates is invalid.');
      }
      this.privateKey = standInKey;
      this.cchain = chain;
      return signCert;
    }
  }

  const signOptions: Record<string, unknown> = {
    ...buildSignOptions(options),
    // never read by RemotePdfSigner, but the PdfSigner only signs when a certificate is set
    p12cert: new Uint8Array(1),
  };
  const prepared = new Uint8Array(await new RemotePdfSigner(signOptions).sign(pdfBytes));
  if (!capturedHash) throw new Error('Failed to prepare the signature');

  const signature = await remote.signHash(capturedHash);
  if (signature.length !== sigLen) {
    throw new Error(`The signing service returned a ${signature.length}-byte signature, expected ${sigLen}`);
  }
  if (!verifyRsaSha256(publicKey, capturedHash, signature)) {
    throw new Error('The signature from the signing service does not match its certificate');
  }

  return replaceSignatureValue(prepared, binaryStringToBytes(placeholder), signature);
}

/** Swap the stand-in signature value for the real one inside the last signature's /Contents. */
function replaceSignatureValue(pdf: Uint8Array, stand: Uint8Array, real: Uint8Array): Uint8Array {
  const text = new TextDecoder('latin1').decode(pdf);
  const brPos = text.lastIndexOf('/ByteRange');
  const m = brPos >= 0 ? /\/ByteRange\s*\[\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*\]/.exec(text.slice(brPos)) : null;
  if (!m) throw new Error('Signature placeholder not found');
  const contentsStart = Number(m[2]);
  const contentsEnd = Number(m[3]);
  const contents = text.slice(contentsStart, contentsEnd);
  if (!contents.startsWith('<') || !contents.endsWith('>')) throw new Error('Signature placeholder not found');

  const standHex = bytesToHex(stand);
  const at = contents.toLowerCase().indexOf(standHex);
  if (at < 0 || contents.toLowerCase().indexOf(standHex, at + 1) >= 0) {
    throw new Error('Signature placeholder not found');
  }

  const out = new Uint8Array(pdf);
  const realHex = bytesToHex(real);
  const upper = contents.slice(at, at + standHex.length) !== standHex;
  const hex = upper ? realHex.toUpperCase() : realHex;
  for (let i = 0; i < hex.length; i++) out[contentsStart + at + i] = hex.charCodeAt(i);
  return out;
}

function verifyRsaSha256(key: forge.pki.rsa.PublicKey, hash: Uint8Array, signature: Uint8Array): boolean {
  try {
    return key.verify(bytesToBinaryString(hash), bytesToBinaryString(signature), 'RSASSA-PKCS1-V1_5');
  } catch {
    return false;
  }
}

function binaryStringToBytes(s: string): Uint8Array {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

function bytesToBinaryString(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return s;
}

function bytesToHex(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += bytes[i].toString(16).padStart(2, '0');
  return s;
}
