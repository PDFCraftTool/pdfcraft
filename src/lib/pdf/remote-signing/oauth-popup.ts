/**
 * OAuth 2.0 popup for CSC providers.
 *
 * The site is served with Cross-Origin-Opener-Policy: same-origin, so once the popup has been on the
 * provider's origin it loses window.opener. public/csc-callback.html therefore reports back over a
 * BroadcastChannel (same origin, no opener needed), with a localStorage event as fallback.
 */
import {
  CscServiceInfo,
  buildAuthorizeUrl,
  createPkcePair,
  exchangeCode,
  resolveOAuthEndpoints,
} from './csc-client';

export const OAUTH_CHANNEL = 'pdfcraft-csc-oauth';
const STORAGE_KEY = 'pdfcraft-csc-oauth-result';

export function oauthRedirectUri(): string {
  return `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/csc-callback.html`;
}

/** Opens the popup synchronously, inside the click handler, so popup blockers let it through. */
export function openPendingPopup(): Window | null {
  return window.open('about:blank', 'pdfcraft-csc-oauth', 'popup,width=520,height=720');
}

export function randomState(): string {
  const b = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(b, x => x.toString(16).padStart(2, '0')).join('');
}

/** Sends the popup to the provider and resolves with the authorization code. */
export function runOAuthPopup(popup: Window | null, authorizeUrl: string, state: string, timeoutMs = 5 * 60 * 1000): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!popup) {
      reject(new Error('The sign-in window was blocked. Allow popups for this site and try again.'));
      return;
    }

    let channel: BroadcastChannel | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const finish = (msg: { state?: string; code?: string; error?: string; error_description?: string }) => {
      if (msg.state !== state) return;
      cleanup();
      if (msg.code) resolve(msg.code);
      else reject(new Error(`Sign-in failed: ${msg.error_description || msg.error || 'no authorization code'}`));
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        finish(JSON.parse(e.newValue));
      } catch {
        // ignore malformed entries
      }
    };
    const cleanup = () => {
      if (timer) clearTimeout(timer);
      channel?.close();
      window.removeEventListener('storage', onStorage);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // storage may be unavailable
      }
    };

    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel(OAUTH_CHANNEL);
      channel.onmessage = (e) => finish(e.data ?? {});
    }
    window.addEventListener('storage', onStorage);
    timer = setTimeout(() => {
      cleanup();
      reject(new Error('Sign-in timed out'));
    }, timeoutMs);

    popup.location.href = authorizeUrl;
  });
}

/**
 * Full authorization code + PKCE round trip in `popup`; returns the access token.
 * scope "service" signs the user in; scope "credential" authorizes one signature over `hash`.
 */
export async function authorizeWithPopup(
  popup: Window | null,
  info: CscServiceInfo,
  p: { clientId: string; scope: 'service' | 'credential'; lang?: string; credentialID?: string; hash?: Uint8Array },
): Promise<string> {
  const endpoints = await resolveOAuthEndpoints(info);
  const pkce = await createPkcePair();
  const state = randomState();
  const redirectUri = oauthRedirectUri();
  const url = buildAuthorizeUrl(endpoints.authorize, info.version, {
    clientId: p.clientId,
    redirectUri,
    scope: p.scope,
    state,
    codeChallenge: pkce.challenge,
    lang: p.lang,
    credentialID: p.credentialID,
    numSignatures: p.hash ? 1 : undefined,
    hashes: p.hash ? [p.hash] : undefined,
  });
  const code = await runOAuthPopup(popup, url, state);
  return exchangeCode(endpoints.token, info.version, { code, clientId: p.clientId, redirectUri, codeVerifier: pkce.verifier });
}
