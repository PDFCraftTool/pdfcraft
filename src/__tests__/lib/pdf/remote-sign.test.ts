import { describe, it, expect, beforeAll } from 'vitest';
import forge from 'node-forge';
import { PDFDocument } from 'pdf-lib';
import {
  CscClient,
  CscError,
  buildAuthorizeUrl,
  normalizeBaseUrl,
  base64ToBytes,
  bytesToBase64,
  OID_SHA256,
} from '@/lib/pdf/remote-signing/csc-client';
import { createCscRemoteSigner } from '@/lib/pdf/remote-signing/csc-remote-signer';
import { signPdfRemote } from '@/lib/pdf/processors/digital-sign';
import { extractSignatures, validatePdfSignatures } from '@/lib/pdf/processors/validate-signature';

// ---------------------------------------------------------------------------
// test PKI: a CA and a signing certificate, both RSA

interface Pki {
  caCert: forge.pki.Certificate;
  signCert: forge.pki.Certificate;
  signKey: forge.pki.rsa.PrivateKey;
}

function makeCert(
  subjectCN: string,
  keys: forge.pki.rsa.KeyPair,
  issuer: { cert?: forge.pki.Certificate; key: forge.pki.rsa.PrivateKey; cn: string },
  isCA: boolean,
): forge.pki.Certificate {
  const cert = forge.pki.createCertificate();
  cert.publicKey = keys.publicKey;
  cert.serialNumber = '0' + forge.util.bytesToHex(forge.random.getBytesSync(8));
  cert.validity.notBefore = new Date(Date.now() - 86400000);
  cert.validity.notAfter = new Date(Date.now() + 365 * 86400000);
  cert.setSubject([{ name: 'commonName', value: subjectCN }]);
  cert.setIssuer([{ name: 'commonName', value: issuer.cn }]);
  cert.setExtensions([
    { name: 'basicConstraints', cA: isCA },
    { name: 'keyUsage', keyCertSign: isCA, digitalSignature: true, nonRepudiation: !isCA },
  ]);
  cert.sign(issuer.key, forge.md.sha256.create());
  return cert;
}

function makePki(): Pki {
  const caKeys = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  const caCert = makeCert('Test Remote CA', caKeys, { key: caKeys.privateKey, cn: 'Test Remote CA' }, true);
  const signKeys = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
  const signCert = makeCert('Remote Signer', signKeys, { key: caKeys.privateKey, cn: 'Test Remote CA' }, false);
  return { caCert, signCert, signKey: signKeys.privateKey };
}

const certB64 = (c: forge.pki.Certificate) =>
  forge.util.encode64(forge.asn1.toDer(forge.pki.certificateToAsn1(c)).getBytes());

/** PKCS#1 v1.5 signature of an already computed SHA-256 hash, as a CSC service would make it. */
function rawSign(key: forge.pki.rsa.PrivateKey, hash: Uint8Array): Uint8Array {
  const md = {
    algorithm: 'sha256',
    digest: () => forge.util.createBuffer(String.fromCharCode(...hash)),
  } as unknown as forge.md.MessageDigest;
  const sig = key.sign(md);
  return Uint8Array.from(sig, c => c.charCodeAt(0));
}

// ---------------------------------------------------------------------------
// a minimal in-memory CSC service

interface MockOptions {
  version: 'v1' | 'v2';
  pki: Pki;
  pin?: string;
  /** v1 only: answer v2 paths with 404 so the client has to fall back */
  v2Missing?: boolean;
  badSignature?: boolean;
}

function mockCsc(opts: MockOptions) {
  const calls: { path: string; body: Record<string, unknown>; auth?: string }[] = [];
  const pin = opts.pin ?? '1234';
  let sad: string | null = null;
  const credentialID = 'cred-1';

  const json = (status: number, body: unknown) =>
    new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

  const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = new URL(String(input));
    const body = init?.body ? JSON.parse(String(init.body)) : {};
    const auth = (init?.headers as Record<string, string> | undefined)?.Authorization;
    calls.push({ path: url.pathname, body, auth });

    const m = url.pathname.match(/^\/api\/csc\/(v1|v2)\/(.+)$/);
    if (!m || m[1] !== opts.version) return json(404, { error: 'not_found' });
    const method = m[2];
    if (method === 'info') {
      return json(200, {
        specs: opts.version === 'v2' ? '2.0.0.2' : '1.0.4.0',
        name: 'Mock QTSP',
        authType: ['basic', 'oauth2code'],
        oauth2: 'https://auth.example.test/',
        methods: ['auth/login', 'credentials/list', 'credentials/info', 'credentials/authorize', 'signatures/signHash'],
      });
    }
    if (method === 'auth/login') {
      if (auth !== `Basic ${btoa('alice:secret')}`) return json(401, { error: 'invalid_request', error_description: 'bad login' });
      return json(200, { access_token: 'tok-1' });
    }
    if (auth !== 'Bearer tok-1') return json(401, { error: 'invalid_token' });

    const cert = {
      status: 'valid',
      certificates: [certB64(opts.pki.signCert), certB64(opts.pki.caCert)],
      subjectDN: 'CN=Remote Signer',
      issuerDN: 'CN=Test Remote CA',
    };
    const v1Info = {
      description: 'Qualified signature',
      key: { status: 'enabled', algo: ['1.2.840.113549.1.1.1'], len: 2048 },
      cert,
      authMode: 'explicit',
      PIN: { presence: 'true', format: 'N', label: 'PIN' },
      OTP: { presence: 'false' },
    };
    const v2Info = {
      credentialID,
      description: 'Qualified signature',
      key: { status: 'enabled', algo: ['1.2.840.113549.1.1.11'], len: 2048 },
      cert,
      auth: { mode: 'explicit', objects: [{ type: 'Password', id: 'PIN', format: 'N', label: 'PIN' }] },
    };

    if (method === 'credentials/list') {
      return opts.version === 'v2'
        ? json(200, { credentialIDs: [credentialID], credentialInfos: [v2Info] })
        : json(200, { credentialIDs: [credentialID] });
    }
    if (method === 'credentials/info') return json(200, opts.version === 'v2' ? v2Info : v1Info);
    if (method === 'credentials/authorize') {
      const given = opts.version === 'v2'
        ? (body.authData as { id: string; value: string }[] | undefined)?.find(a => a.id === 'PIN')?.value
        : body.PIN;
      if (given !== pin) return json(400, { error: 'invalid_request', error_description: 'Invalid PIN' });
      sad = 'sad-' + Math.random().toString(36).slice(2);
      return json(200, { SAD: sad, expiresIn: 300 });
    }
    if (method === 'signatures/signHash') {
      if (!sad || body.SAD !== sad) return json(400, { error: 'invalid_request', error_description: 'bad SAD' });
      const hashes = (opts.version === 'v2' ? body.hashes : body.hash) as string[];
      const signatures = hashes.map(h => {
        const sig = rawSign(opts.pki.signKey, base64ToBytes(h));
        if (opts.badSignature) sig[10] ^= 0xff;
        return bytesToBase64(sig);
      });
      return json(200, { signatures });
    }
    return json(404, { error: 'not_found' });
  }) as typeof fetch;

  return { fetchImpl, calls };
}

// ---------------------------------------------------------------------------
// independent PDF signature check: ByteRange digest + RSA over the signed attributes

function verifyPdfSignature(pdf: Uint8Array, expectedCert: forge.pki.Certificate) {
  const [sig] = extractSignatures(pdf);
  expect(sig).toBeDefined();
  const [o1, l1, o2, l2] = sig.byteRange;
  expect(o2 + l2).toBe(pdf.length);

  const md = forge.md.sha256.create();
  md.update(String.fromCharCode(...pdf.subarray(o1, o1 + l1)));
  for (let i = o2; i < o2 + l2; i += 8192) {
    md.update(String.fromCharCode(...pdf.subarray(i, Math.min(i + 8192, o2 + l2))));
  }
  const contentDigest = md.digest().getBytes();

  const der = String.fromCharCode(...sig.contents);
  const contentInfo = forge.asn1.fromDer(der, { parseAllBytes: false } as never);
  const signedData = (contentInfo.value as forge.asn1.Asn1[])[1].value as forge.asn1.Asn1[];
  const sdFields = signedData[0].value as forge.asn1.Asn1[];
  const signerInfos = sdFields[sdFields.length - 1].value as forge.asn1.Asn1[];
  const signerInfo = signerInfos[0].value as forge.asn1.Asn1[];

  const attrsIdx = signerInfo.findIndex(e => e.tagClass === forge.asn1.Class.CONTEXT_SPECIFIC && e.type === 0);
  const attrs = signerInfo[attrsIdx];
  const signature = signerInfo[attrsIdx + 2].value as string;

  let messageDigest: string | undefined;
  for (const attr of attrs.value as forge.asn1.Asn1[]) {
    const [oid, values] = attr.value as forge.asn1.Asn1[];
    if (forge.asn1.derToOid(oid.value as string) === forge.pki.oids.messageDigest) {
      messageDigest = (values.value as forge.asn1.Asn1[])[0].value as string;
    }
  }
  expect(messageDigest && forge.util.bytesToHex(messageDigest)).toBe(forge.util.bytesToHex(contentDigest));

  // signed attributes are signed as an explicit SET OF
  const asSet = forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SET, true, attrs.value as forge.asn1.Asn1[]);
  const attrsHash = forge.md.sha256.create().update(forge.asn1.toDer(asSet).getBytes()).digest().getBytes();
  const pub = expectedCert.publicKey as forge.pki.rsa.PublicKey;
  expect(pub.verify(attrsHash, signature, 'RSASSA-PKCS1-V1_5')).toBe(true);
}

async function samplePdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595, 842]);
  page.drawText('Remote signing test');
  return doc.save();
}

// ---------------------------------------------------------------------------

describe('CSC client', () => {
  let pki: Pki;
  beforeAll(() => {
    pki = makePki();
  });

  it('accepts a service root or a URL ending in /csc/vN', () => {
    expect(normalizeBaseUrl('https://x.test/api/')).toEqual({ root: 'https://x.test/api' });
    expect(normalizeBaseUrl('https://x.test/api/csc/v1')).toEqual({ root: 'https://x.test/api', version: 'v1' });
    expect(() => new CscClient({ baseUrl: 'ftp://x' })).toThrow(CscError);
  });

  it('talks v2: detects the version, lists credentials and authorizes with authData', async () => {
    const { fetchImpl, calls } = mockCsc({ version: 'v2', pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    const info = await client.info();
    expect(info.version).toBe('v2');
    expect(info.authType).toContain('basic');
    await client.login('alice', 'secret');

    const [cred] = await client.listCredentials();
    expect(cred.id).toBe('cred-1');
    expect(cred.certificates).toHaveLength(2);
    expect(cred.authObjects).toEqual([expect.objectContaining({ id: 'PIN', kind: 'pin', required: true })]);

    const hash = new Uint8Array(32).fill(7);
    const sad = await client.authorize(cred, [hash], { PIN: '1234' });
    const [sig] = await client.signHash(cred, [hash], { sad });
    expect(sig).toHaveLength(256);

    const auth = calls.find(c => c.path.endsWith('credentials/authorize'))!;
    expect(auth.body).toMatchObject({ credentialID: 'cred-1', numSignatures: 1, hashAlgorithmOID: OID_SHA256, authData: [{ id: 'PIN', value: '1234' }] });
    const sign = calls.find(c => c.path.endsWith('signatures/signHash'))!;
    expect(sign.body).toMatchObject({ hashAlgorithmOID: OID_SHA256, signAlgo: '1.2.840.113549.1.1.11' });
  });

  it('falls back to v1 and sends PIN the v1 way', async () => {
    const { fetchImpl, calls } = mockCsc({ version: 'v1', pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    expect((await client.info()).version).toBe('v1');
    await client.login('alice', 'secret');
    const [cred] = await client.listCredentials();
    expect(cred.authMode).toBe('explicit');
    const hash = new Uint8Array(32).fill(1);
    const sad = await client.authorize(cred, [hash], { PIN: '1234' });
    await client.signHash(cred, [hash], { sad });

    expect(calls.find(c => c.path.endsWith('credentials/authorize'))!.body).toMatchObject({ PIN: '1234', hash: [bytesToBase64(hash)] });
    expect(calls.find(c => c.path.endsWith('signatures/signHash'))!.body).toMatchObject({ hashAlgo: OID_SHA256, signAlgo: '1.2.840.113549.1.1.1' });
  });

  it('reports the service error text', async () => {
    const { fetchImpl } = mockCsc({ version: 'v2', pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    await client.info();
    await expect(client.login('alice', 'wrong')).rejects.toThrow(/bad login/);
  });

  it('builds a credential-scope authorize URL', () => {
    const url = new URL(buildAuthorizeUrl('https://auth.example.test/oauth2/authorize', 'v2', {
      clientId: 'pdfcraft',
      redirectUri: 'https://app.test/csc-callback.html',
      scope: 'credential',
      state: 's',
      codeChallenge: 'c',
      credentialID: 'cred-1',
      numSignatures: 1,
      hashes: [new Uint8Array([0xfb, 0xff])],
    }));
    expect(url.searchParams.get('scope')).toBe('credential');
    expect(url.searchParams.get('hashes')).toBe('-_8');
    expect(url.searchParams.get('code_challenge_method')).toBe('S256');
  });
});

describe('signPdfRemote', () => {
  let pki: Pki;
  beforeAll(() => {
    pki = makePki();
  });

  it.each(['v1', 'v2'] as const)('produces a valid signature through a CSC %s service', async (version) => {
    const { fetchImpl } = mockCsc({ version, pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    await client.info();
    await client.login('alice', 'secret');
    const [cred] = await client.listCredentials();

    const remote = createCscRemoteSigner(client, cred, { secrets: { PIN: '1234' } });
    expect(remote.certificates[0].subject.getField('CN').value).toBe('Remote Signer');

    const signed = await signPdfRemote(await samplePdf(), remote, { signatureInfo: { reason: 'Approval' } });
    verifyPdfSignature(signed, pki.signCert);
    expect(new TextDecoder('latin1').decode(signed)).toContain('/Reason (Approval)');
  });

  it('rejects a signature that does not match the certificate', async () => {
    const { fetchImpl } = mockCsc({ version: 'v2', pki, badSignature: true });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    await client.info();
    await client.login('alice', 'secret');
    const [cred] = await client.listCredentials();
    const remote = createCscRemoteSigner(client, cred, { secrets: { PIN: '1234' } });
    await expect(signPdfRemote(await samplePdf(), remote)).rejects.toThrow(/does not match/);
  });

  it('surfaces a wrong PIN', async () => {
    const { fetchImpl } = mockCsc({ version: 'v2', pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    await client.info();
    await client.login('alice', 'secret');
    const [cred] = await client.listCredentials();
    const remote = createCscRemoteSigner(client, cred, { secrets: { PIN: '0000' } });
    await expect(signPdfRemote(await samplePdf(), remote)).rejects.toThrow(/Invalid PIN/);
  });
});

describe('validatePdfSignatures', () => {
  let pki: Pki;
  beforeAll(() => {
    pki = makePki();
  });

  async function signSamplePdf() {
    const { fetchImpl } = mockCsc({ version: 'v2', pki });
    const client = new CscClient({ baseUrl: 'https://csc.example.test/api', fetchImpl });
    await client.info();
    await client.login('alice', 'secret');
    const [cred] = await client.listCredentials();
    const remote = createCscRemoteSigner(client, cred, { secrets: { PIN: '1234' } });
    return signPdfRemote(await samplePdf(), remote, { signatureInfo: { reason: 'Approval' } });
  }

  it('accepts the signatures the app itself produces', async () => {
    const signed = await signSamplePdf();
    const [result] = await validatePdfSignatures(signed);

    expect(result.isValid).toBe(true);
    expect(result.coverageStatus).toBe('full');
    expect(result.signerName).toBe('Remote Signer');
    expect(result.reason).toBe('Approval');
    expect(result.algorithms).toMatchObject({ digest: 'SHA-256', signature: 'RSA with SHA-256' });
  });

  it('rejects a document modified after signing', async () => {
    const signed = await signSamplePdf();
    const tampered = signed.slice();
    // Flip a byte inside the first ByteRange segment (the header area).
    tampered[5] ^= 0xff;

    const [result] = await validatePdfSignatures(tampered);
    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBeDefined();
  });

  it('rejects a signature whose contents were corrupted', async () => {
    const signed = await signSamplePdf();
    const corrupted = signed.slice();
    const text = new TextDecoder('latin1').decode(corrupted);
    const contentsAt = text.indexOf('/Contents <');
    expect(contentsAt).toBeGreaterThanOrEqual(0);
    // Keep it a valid hex digit so the signature is still extracted, then rejected.
    const firstHex = contentsAt + '/Contents <'.length;
    corrupted[firstHex] = corrupted[firstHex] === 0x30 ? 0x31 : 0x30;

    const [result] = await validatePdfSignatures(corrupted);
    expect(result.isValid).toBe(false);
  });

  it('finds no signatures on unsigned documents', async () => {
    const results = await validatePdfSignatures(await samplePdf());
    expect(results).toEqual([]);
  });
});
