/**
 * Cloud Signature Consortium (CSC) API client.
 *
 * Remote signing services such as Firmaprofesional's Firmacloud keep the private key in a
 * QSCD/HSM on the provider side. The browser never sees the key: it sends the SHA-256 hash of
 * the PDF signature's signed attributes and gets the raw signature back.
 *
 * Supports CSC API v1 (1.0.4.0) and v2 (2.0.0.x) for the calls a signing client needs:
 * info, auth/login, credentials/list, credentials/info, credentials/sendOTP|getChallenge,
 * credentials/authorize and signatures/signHash, plus OAuth 2.0 authorization code + PKCE.
 */

export type CscVersion = 'v1' | 'v2';

export const OID_SHA256 = '2.16.840.1.101.3.4.2.1';
export const OID_RSA_ENCRYPTION = '1.2.840.113549.1.1.1';
export const OID_SHA256_WITH_RSA = '1.2.840.113549.1.1.11';

export interface CscServiceInfo {
  version: CscVersion;
  specs?: string;
  name?: string;
  description?: string;
  authType: string[];
  oauth2?: string;
  oauth2Issuer?: string;
  methods: string[];
}

/** One secret the user has to type to authorize a credential (PIN, OTP, ...). */
export interface CscAuthObject {
  id: string;
  kind: 'pin' | 'otp' | 'other';
  label?: string;
  description?: string;
  format?: string;
  required: boolean;
  /** OTP that the service sends on request (v1 sendOTP / v2 getChallenge) */
  online?: boolean;
}

export interface CscCredential {
  id: string;
  description?: string;
  keyAlgos: string[];
  keyLen?: number;
  /** base64 DER, signing certificate first */
  certificates: string[];
  subjectDN?: string;
  issuerDN?: string;
  validFrom?: string;
  validTo?: string;
  authMode: 'implicit' | 'explicit' | 'oauth2code';
  authObjects: CscAuthObject[];
  multisign?: number;
}

export class CscError extends Error {
  constructor(message: string, readonly status?: number, readonly code?: string) {
    super(message);
    this.name = 'CscError';
  }
}

type FetchLike = typeof fetch;

export interface CscClientOptions {
  /** Service root; the client appends /csc/v1/... or /csc/v2/... (a URL already ending in /csc/vN is accepted) */
  baseUrl: string;
  version?: CscVersion;
  accessToken?: string;
  fetchImpl?: FetchLike;
  lang?: string;
}

export function normalizeBaseUrl(url: string): { root: string; version?: CscVersion } {
  let root = url.trim().replace(/\/+$/, '');
  const m = root.match(/\/csc\/(v1|v2)$/i);
  if (m) {
    root = root.slice(0, -m[0].length);
    return { root, version: m[1].toLowerCase() as CscVersion };
  }
  return { root };
}

const PRESENCE: Record<string, 'required' | 'optional' | 'none'> = {
  true: 'required',
  optional: 'optional',
  false: 'none',
};

export class CscClient {
  readonly root: string;
  version: CscVersion | undefined;
  accessToken: string | undefined;
  private readonly fetchImpl: FetchLike;
  private readonly lang?: string;

  constructor(opts: CscClientOptions) {
    const n = normalizeBaseUrl(opts.baseUrl);
    // plain http only for a service on this machine (development)
    if (!/^https:\/\//i.test(n.root) && !/^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?(\/|$)/i.test(n.root)) {
      throw new CscError('The service URL must start with https://');
    }
    this.root = n.root;
    this.version = opts.version ?? n.version;
    this.accessToken = opts.accessToken;
    this.fetchImpl = opts.fetchImpl ?? ((...args) => fetch(...args));
    this.lang = opts.lang;
  }

  private url(method: string, version = this.version): string {
    if (!version) throw new CscError('CSC API version not detected yet; call info() first');
    return `${this.root}/csc/${version}/${method}`;
  }

  private async call<T>(method: string, body: Record<string, unknown>, init: { auth?: string; version?: CscVersion } = {}): Promise<T> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    const auth = init.auth ?? (this.accessToken ? `Bearer ${this.accessToken}` : undefined);
    if (auth) headers.Authorization = auth;

    let res: Response;
    try {
      res = await this.fetchImpl(this.url(method, init.version), {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
    } catch (e) {
      // A CORS rejection surfaces as a bare TypeError with no status
      throw new CscError(`Could not reach the signing service (${e instanceof Error ? e.message : String(e)}). The service must allow cross-origin requests from this site.`);
    }

    const text = await res.text();
    let json: Record<string, unknown> = {};
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        if (res.ok) throw new CscError(`Invalid JSON from ${method}`, res.status);
      }
    }
    if (!res.ok) {
      const code = typeof json.error === 'string' ? json.error : undefined;
      const desc = typeof json.error_description === 'string' ? json.error_description : undefined;
      throw new CscError(`${method} failed (${res.status})${code ? `: ${code}` : ''}${desc ? ` - ${desc}` : ''}`, res.status, code);
    }
    return json as T;
  }

  /** Reads the service description, detecting the API version when it is not known yet (v2 first). */
  async info(): Promise<CscServiceInfo> {
    const tryVersion = async (v: CscVersion) => {
      const body = this.lang ? { lang: this.lang } : {};
      const r = await this.call<Record<string, unknown>>('info', body, { version: v, auth: '' });
      return { v, r };
    };

    let got: { v: CscVersion; r: Record<string, unknown> };
    if (this.version) {
      got = await tryVersion(this.version);
    } else {
      try {
        got = await tryVersion('v2');
      } catch (e) {
        if (e instanceof CscError && e.status === undefined) throw e; // network/CORS: v1 would fail the same way
        got = await tryVersion('v1');
      }
    }

    // A v2 path answering with a 1.x spec (or the reverse) is trusted over the path
    const specs = typeof got.r.specs === 'string' ? got.r.specs : undefined;
    this.version = specs?.startsWith('1.') ? 'v1' : specs?.startsWith('2.') ? 'v2' : got.v;

    return {
      version: this.version,
      specs,
      name: got.r.name as string | undefined,
      description: got.r.description as string | undefined,
      authType: Array.isArray(got.r.authType) ? (got.r.authType as string[]) : [],
      oauth2: got.r.oauth2 as string | undefined,
      oauth2Issuer: got.r.oauth2Issuer as string | undefined,
      methods: Array.isArray(got.r.methods) ? (got.r.methods as string[]) : [],
    };
  }

  /** auth/login with HTTP Basic credentials; stores and returns the access token. */
  async login(username: string, password: string): Promise<string> {
    const basic = btoa(unescape(encodeURIComponent(`${username}:${password}`)));
    const r = await this.call<{ access_token?: string }>('auth/login', { rememberMe: false }, { auth: `Basic ${basic}` });
    if (!r.access_token) throw new CscError('auth/login returned no access token');
    this.accessToken = r.access_token;
    return r.access_token;
  }

  async listCredentials(): Promise<CscCredential[]> {
    if (this.version === 'v2') {
      const ids: string[] = [];
      const infos: CscCredential[] = [];
      let pageToken: string | undefined;
      do {
        const r = await this.call<{ credentialIDs?: string[]; credentialInfos?: Record<string, unknown>[]; nextPageToken?: string }>(
          'credentials/list',
          { credentialInfo: true, certificates: 'chain', certInfo: true, authInfo: true, ...(pageToken ? { pageToken } : {}), ...(this.lang ? { lang: this.lang } : {}) },
        );
        ids.push(...(r.credentialIDs ?? []));
        for (const ci of r.credentialInfos ?? []) infos.push(parseV2Credential(ci));
        pageToken = r.nextPageToken;
      } while (pageToken);
      // Services may ignore credentialInfo; fill the gaps one by one
      const out: CscCredential[] = [];
      for (const id of ids) {
        out.push(infos.find(c => c.id === id) ?? await this.credentialInfo(id));
      }
      return out;
    }

    const ids: string[] = [];
    let pageToken: string | undefined;
    do {
      const r = await this.call<{ credentialIDs?: string[]; nextPageToken?: string }>('credentials/list', {
        maxResults: 50,
        ...(pageToken ? { pageToken } : {}),
      });
      ids.push(...(r.credentialIDs ?? []));
      pageToken = r.nextPageToken;
    } while (pageToken);
    const out: CscCredential[] = [];
    for (const id of ids) out.push(await this.credentialInfo(id));
    return out;
  }

  async credentialInfo(credentialID: string): Promise<CscCredential> {
    const r = await this.call<Record<string, unknown>>('credentials/info', {
      credentialID,
      certificates: 'chain',
      certInfo: true,
      authInfo: true,
      ...(this.lang ? { lang: this.lang } : {}),
    });
    return this.version === 'v2' ? parseV2Credential({ ...r, credentialID }) : parseV1Credential(credentialID, r);
  }

  /** Asks the service to send an online OTP to the user (v1 sendOTP, v2 getChallenge). */
  async sendOtp(credentialID: string): Promise<void> {
    await this.call(this.version === 'v2' ? 'credentials/getChallenge' : 'credentials/sendOTP', { credentialID });
  }

  /**
   * Explicit or implicit credential authorization. `secrets` is keyed by CscAuthObject.id.
   * Returns the Signature Activation Data for signHash.
   */
  async authorize(credential: CscCredential, hashes: Uint8Array[], secrets: Record<string, string>): Promise<string> {
    const hashB64 = hashes.map(bytesToBase64);
    let body: Record<string, unknown>;
    if (this.version === 'v2') {
      const authData = credential.authObjects
        .filter(o => secrets[o.id])
        .map(o => ({ id: o.id, value: secrets[o.id] }));
      body = {
        credentialID: credential.id,
        numSignatures: hashes.length,
        hashes: hashB64,
        hashAlgorithmOID: OID_SHA256,
        ...(authData.length ? { authData } : {}),
      };
    } else {
      body = { credentialID: credential.id, numSignatures: hashes.length, hash: hashB64 };
      for (const o of credential.authObjects) {
        if (!secrets[o.id]) continue;
        if (o.kind === 'pin') body.PIN = secrets[o.id];
        else if (o.kind === 'otp') body.OTP = secrets[o.id];
      }
    }
    const r = await this.call<{ SAD?: string }>('credentials/authorize', body);
    if (!r.SAD) throw new CscError('credentials/authorize returned no SAD');
    return r.SAD;
  }

  /**
   * Raw signatures over pre-computed SHA-256 hashes.
   * `credentialToken` is the token from a credential-scope OAuth flow (authMode oauth2code).
   */
  async signHash(credential: CscCredential, hashes: Uint8Array[], auth: { sad?: string; credentialToken?: string }): Promise<Uint8Array[]> {
    const signAlgo = pickSignAlgo(credential);
    const hashB64 = hashes.map(bytesToBase64);
    let body: Record<string, unknown>;
    let authHeader: string | undefined;
    if (this.version === 'v2') {
      body = { credentialID: credential.id, hashes: hashB64, hashAlgorithmOID: OID_SHA256, signAlgo };
      if (auth.sad) body.SAD = auth.sad;
      if (auth.credentialToken) authHeader = `Bearer ${auth.credentialToken}`;
    } else {
      // v1: the credential-scope access token stands in for the SAD
      body = { credentialID: credential.id, SAD: auth.sad ?? auth.credentialToken, hash: hashB64, hashAlgo: OID_SHA256, signAlgo };
    }
    const r = await this.call<{ signatures?: string[] }>('signatures/signHash', body, authHeader ? { auth: authHeader } : {});
    if (!r.signatures || r.signatures.length !== hashes.length) {
      throw new CscError('signatures/signHash returned an unexpected number of signatures');
    }
    return r.signatures.map(base64ToBytes);
  }
}

export function isRsaCredential(c: CscCredential): boolean {
  // An empty list means the service did not say; the certificate check catches non-RSA keys later
  return c.keyAlgos.length === 0 || c.keyAlgos.some(a => a.startsWith('1.2.840.113549.1.1.'));
}

function pickSignAlgo(c: CscCredential): string {
  if (c.keyAlgos.includes(OID_SHA256_WITH_RSA)) return OID_SHA256_WITH_RSA;
  return OID_RSA_ENCRYPTION;
}

function asStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string');
  if (typeof v === 'string') return [v];
  return [];
}

function parseV1Credential(id: string, r: Record<string, unknown>): CscCredential {
  const key = (r.key ?? {}) as Record<string, unknown>;
  const cert = (r.cert ?? {}) as Record<string, unknown>;
  const pin = (r.PIN ?? {}) as Record<string, unknown>;
  const otp = (r.OTP ?? {}) as Record<string, unknown>;
  const authObjects: CscAuthObject[] = [];
  const pinPresence = PRESENCE[String(pin.presence ?? 'false')] ?? 'none';
  if (pinPresence !== 'none') {
    authObjects.push({ id: 'PIN', kind: 'pin', label: pin.label as string | undefined, description: pin.description as string | undefined, format: pin.format as string | undefined, required: pinPresence === 'required' });
  }
  const otpPresence = PRESENCE[String(otp.presence ?? 'false')] ?? 'none';
  if (otpPresence !== 'none') {
    authObjects.push({ id: 'OTP', kind: 'otp', label: otp.label as string | undefined, description: otp.description as string | undefined, format: otp.format as string | undefined, required: otpPresence === 'required', online: otp.type === 'online' });
  }
  return {
    id,
    description: r.description as string | undefined,
    keyAlgos: asStringArray(key.algo),
    keyLen: typeof key.len === 'number' ? key.len : undefined,
    certificates: asStringArray(cert.certificates),
    subjectDN: cert.subjectDN as string | undefined,
    issuerDN: cert.issuerDN as string | undefined,
    validFrom: cert.validFrom as string | undefined,
    validTo: cert.validTo as string | undefined,
    authMode: normalizeAuthMode(r.authMode),
    authObjects,
    multisign: typeof r.multisign === 'number' ? r.multisign : undefined,
  };
}

function parseV2Credential(r: Record<string, unknown>): CscCredential {
  const key = (r.key ?? {}) as Record<string, unknown>;
  const cert = (r.cert ?? {}) as Record<string, unknown>;
  const auth = (r.auth ?? {}) as Record<string, unknown>;
  const expression = typeof auth.expression === 'string' ? auth.expression : '';
  const objects = Array.isArray(auth.objects) ? (auth.objects as Record<string, unknown>[]) : [];
  const authObjects: CscAuthObject[] = objects
    .filter(o => typeof o.id === 'string')
    .map(o => {
      const id = o.id as string;
      const kind: CscAuthObject['kind'] = /pin/i.test(id) ? 'pin' : /otp/i.test(id) ? 'otp' : 'other';
      return {
        id,
        kind,
        label: o.label as string | undefined,
        description: o.description as string | undefined,
        format: o.format as string | undefined,
        // "PIN OR OTP": the user may give either
        required: !/\bOR\b/.test(expression),
        online: kind === 'otp' && typeof o.generator === 'string' ? !/^(totp|hotp)$/i.test(o.generator) : undefined,
      };
    });
  return {
    id: String(r.credentialID ?? ''),
    description: r.description as string | undefined,
    keyAlgos: asStringArray(key.algo),
    keyLen: typeof key.len === 'number' ? key.len : undefined,
    certificates: asStringArray(cert.certificates),
    subjectDN: cert.subjectDN as string | undefined,
    issuerDN: cert.issuerDN as string | undefined,
    validFrom: cert.validFrom as string | undefined,
    validTo: cert.validTo as string | undefined,
    authMode: normalizeAuthMode(auth.mode ?? r.authMode),
    authObjects,
    multisign: typeof r.multisign === 'number' ? r.multisign : undefined,
  };
}

function normalizeAuthMode(v: unknown): CscCredential['authMode'] {
  return v === 'implicit' || v === 'oauth2code' ? v : 'explicit';
}

// ---------------------------------------------------------------------------
// OAuth 2.0 authorization code flow with PKCE (scope "service" or "credential")

export interface OAuthEndpoints {
  authorize: string;
  token: string;
}

export async function resolveOAuthEndpoints(info: CscServiceInfo, fetchImpl: FetchLike = fetch): Promise<OAuthEndpoints> {
  if (info.oauth2Issuer) {
    try {
      const issuer = info.oauth2Issuer.replace(/\/+$/, '');
      const res = await fetchImpl(`${issuer}/.well-known/oauth-authorization-server`);
      if (res.ok) {
        const meta = await res.json() as { authorization_endpoint?: string; token_endpoint?: string };
        if (meta.authorization_endpoint && meta.token_endpoint) {
          return { authorize: meta.authorization_endpoint, token: meta.token_endpoint };
        }
      }
    } catch {
      // fall back to the CSC oauth2 base URI below
    }
  }
  if (!info.oauth2) throw new CscError('The service does not advertise an OAuth 2.0 endpoint');
  const base = info.oauth2.replace(/\/+$/, '');
  return { authorize: `${base}/oauth2/authorize`, token: `${base}/oauth2/token` };
}

export interface PkcePair {
  verifier: string;
  challenge: string;
}

export async function createPkcePair(): Promise<PkcePair> {
  const raw = crypto.getRandomValues(new Uint8Array(32));
  const verifier = base64UrlEncode(raw);
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier)));
  return { verifier, challenge: base64UrlEncode(digest) };
}

export interface AuthorizeUrlParams {
  clientId: string;
  redirectUri: string;
  scope: 'service' | 'credential';
  state: string;
  codeChallenge: string;
  lang?: string;
  credentialID?: string;
  numSignatures?: number;
  hashes?: Uint8Array[];
  description?: string;
}

export function buildAuthorizeUrl(endpoint: string, version: CscVersion, p: AuthorizeUrlParams): string {
  const u = new URL(endpoint);
  u.searchParams.set('response_type', 'code');
  u.searchParams.set('client_id', p.clientId);
  u.searchParams.set('redirect_uri', p.redirectUri);
  u.searchParams.set('scope', p.scope);
  u.searchParams.set('state', p.state);
  u.searchParams.set('code_challenge', p.codeChallenge);
  u.searchParams.set('code_challenge_method', 'S256');
  if (p.lang) u.searchParams.set('lang', p.lang);
  if (p.scope === 'credential') {
    if (p.credentialID) u.searchParams.set('credentialID', p.credentialID);
    if (p.numSignatures) u.searchParams.set('numSignatures', String(p.numSignatures));
    if (p.hashes?.length) {
      // v1 calls the parameter "hash" (base64); v2 "hashes" (base64url) plus the hash algorithm
      if (version === 'v2') {
        u.searchParams.set('hashes', p.hashes.map(base64UrlEncode).join(','));
        u.searchParams.set('hashAlgorithmOID', OID_SHA256);
      } else {
        u.searchParams.set('hash', p.hashes.map(bytesToBase64).join(','));
      }
    }
    if (p.description) u.searchParams.set('description', p.description);
  }
  return u.toString();
}

export async function exchangeCode(
  tokenEndpoint: string,
  version: CscVersion,
  p: { code: string; clientId: string; redirectUri: string; codeVerifier: string },
  fetchImpl: FetchLike = fetch,
): Promise<string> {
  const fields = {
    grant_type: 'authorization_code',
    code: p.code,
    client_id: p.clientId,
    redirect_uri: p.redirectUri,
    code_verifier: p.codeVerifier,
  };
  // CSC v1 specifies a JSON body; v2 follows RFC 6749 form encoding
  const init: RequestInit = version === 'v1'
    ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) }
    : { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fields).toString() };
  let res: Response;
  try {
    res = await fetchImpl(tokenEndpoint, init);
  } catch (e) {
    throw new CscError(`Could not reach the token endpoint (${e instanceof Error ? e.message : String(e)})`);
  }
  const json = await res.json().catch(() => ({})) as { access_token?: string; error?: string; error_description?: string };
  if (!res.ok || !json.access_token) {
    throw new CscError(`Token request failed (${res.status})${json.error ? `: ${json.error}` : ''}${json.error_description ? ` - ${json.error_description}` : ''}`, res.status, json.error);
  }
  return json.access_token;
}

// ---------------------------------------------------------------------------
// encoding helpers

export function bytesToBase64(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    s += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + 0x8000)));
  }
  return btoa(s);
}

export function base64ToBytes(b64: string): Uint8Array {
  const norm = b64.replace(/-/g, '+').replace(/_/g, '/').replace(/\s+/g, '');
  const s = atob(norm + '='.repeat((4 - (norm.length % 4)) % 4));
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

export function base64UrlEncode(bytes: Uint8Array): string {
  return bytesToBase64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
