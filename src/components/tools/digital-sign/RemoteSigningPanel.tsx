'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import type { RemoteSigner } from '@/types/digital-signature';
import { CscClient, CscCredential, CscServiceInfo } from '@/lib/pdf/remote-signing/csc-client';
import { createCscRemoteSigner } from '@/lib/pdf/remote-signing/csc-remote-signer';
import { authorizeWithPopup, oauthRedirectUri, openPendingPopup } from '@/lib/pdf/remote-signing/oauth-popup';

/** What the tool needs from a connected remote credential. */
export interface RemoteSigningSelection {
  subject: string;
  issuer: string;
  validFrom?: Date;
  validTo?: Date;
  /** The credential is authorized through the provider's sign-in page at signing time */
  needsPopup: boolean;
  /** Build the signer; `popup` is a window opened in the click handler when needsPopup */
  createSigner(popup: Window | null): RemoteSigner;
}

const URL_KEY = 'pdfcraft-csc-service-url';
const CLIENT_KEY = 'pdfcraft-csc-client-id';

const inputClass =
  'w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]';
const labelClass = 'block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1';
const hintClass = 'text-xs text-[hsl(var(--color-muted-foreground))] mt-1';

function readStored(key: string): string {
  try {
    return localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}

function store(key: string, value: string) {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    // storage may be unavailable (private mode)
  }
}

function dnField(dn: string | undefined, field: string): string | undefined {
  if (!dn) return undefined;
  const m = dn.match(new RegExp(`(?:^|[,/]\\s*)${field}=([^,/]+)`, 'i'));
  return m?.[1].trim();
}

function errorText(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

export function RemoteSigningPanel({
  disabled,
  onChange,
}: {
  disabled?: boolean;
  onChange: (selection: RemoteSigningSelection | null) => void;
}) {
  const tTool = useTranslations('tools.digitalSign');
  const locale = useLocale();

  const [serviceUrl, setServiceUrl] = useState('');
  const [clientId, setClientId] = useState('');
  const [client, setClient] = useState<CscClient | null>(null);
  const [info, setInfo] = useState<CscServiceInfo | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [credentials, setCredentials] = useState<CscCredential[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [secrets, setSecrets] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const [redirectUri, setRedirectUri] = useState('');

  useEffect(() => {
    setServiceUrl(readStored(URL_KEY));
    setClientId(readStored(CLIENT_KEY));
    setRedirectUri(oauthRedirectUri());
  }, []);

  const credential = credentials.find(c => c.id === selectedId) ?? null;

  const reset = useCallback(() => {
    setClient(null);
    setInfo(null);
    setSignedIn(false);
    setCredentials([]);
    setSelectedId('');
    setSecrets({});
    setOtpSent(false);
    setPassword('');
  }, []);

  const run = useCallback(async (fn: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }, []);

  const handleConnect = useCallback(() => run(async () => {
    reset();
    const c = new CscClient({ baseUrl: serviceUrl, lang: locale });
    const i = await c.info();
    store(URL_KEY, serviceUrl.trim());
    setClient(c);
    setInfo(i);
  }), [run, reset, serviceUrl, locale]);

  const loadCredentials = useCallback(async (c: CscClient) => {
    const list = await c.listCredentials();
    setCredentials(list);
    setSignedIn(true);
    if (list.length === 0) throw new Error(tTool('remoteNoCredentials'));
    setSelectedId(list[0].id);
  }, [tTool]);

  const handleBasicLogin = useCallback(() => run(async () => {
    if (!client) return;
    await client.login(username, password);
    setPassword('');
    await loadCredentials(client);
  }), [run, client, username, password, loadCredentials]);

  const handleOAuthLogin = useCallback(() => {
    if (!client || !info) return;
    // opened before any await so popup blockers treat it as user-initiated
    const popup = openPendingPopup();
    void run(async () => {
      try {
        client.accessToken = await authorizeWithPopup(popup, info, { clientId: clientId.trim(), scope: 'service', lang: locale });
        store(CLIENT_KEY, clientId.trim());
        await loadCredentials(client);
      } finally {
        popup?.close();
      }
    });
  }, [client, info, clientId, locale, run, loadCredentials]);

  const handleSendOtp = useCallback(() => run(async () => {
    if (!client || !credential) return;
    await client.sendOtp(credential.id);
    setOtpSent(true);
  }), [run, client, credential]);

  const missingSecret = credential?.authMode === 'explicit'
    && credential.authObjects.some(o => o.required && !secrets[o.id]);

  const selection = useMemo<RemoteSigningSelection | null>(() => {
    if (!client || !credential || missingSecret) return null;
    const needsPopup = credential.authMode === 'oauth2code';
    return {
      subject: dnField(credential.subjectDN, 'CN') ?? credential.description ?? credential.id,
      issuer: dnField(credential.issuerDN, 'CN') ?? '',
      validFrom: credential.validFrom ? parseCscDate(credential.validFrom) : undefined,
      validTo: credential.validTo ? parseCscDate(credential.validTo) : undefined,
      needsPopup,
      createSigner(popup) {
        return createCscRemoteSigner(client, credential, {
          secrets,
          authorizeWithOAuth: needsPopup && info
            ? (hash) => authorizeWithPopup(popup, info, { clientId: clientId.trim(), scope: 'credential', lang: locale, credentialID: credential.id, hash })
            : undefined,
        });
      },
    };
  }, [client, credential, missingSecret, secrets, info, clientId, locale]);

  useEffect(() => {
    onChange(selection);
  }, [selection, onChange]);

  const supportsBasic = !info || info.authType.length === 0 || info.authType.includes('basic');
  const supportsOAuth = !!info && info.authType.includes('oauth2code') && !!(info.oauth2 || info.oauth2Issuer);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="csc-url" className={labelClass}>{tTool('remoteServiceUrlLabel')}</label>
        <div className="flex gap-2">
          <input
            id="csc-url"
            type="url"
            inputMode="url"
            value={serviceUrl}
            onChange={(e) => { setServiceUrl(e.target.value); if (client) reset(); }}
            onKeyDown={(e) => e.key === 'Enter' && serviceUrl && handleConnect()}
            placeholder="https://signing.example.com"
            disabled={disabled || busy}
            className={inputClass}
          />
          <Button variant="primary" size="md" onClick={handleConnect} disabled={disabled || busy || !serviceUrl.trim()}>
            {tTool('remoteConnectButton')}
          </Button>
        </div>
        <p className={hintClass}>{tTool('remoteServiceUrlHint')}</p>
      </div>

      {info && (
        <div className="p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted))]">
          <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">{info.name || client?.root}</p>
          <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">CSC API {info.specs ?? info.version}</p>
        </div>
      )}

      {info && !signedIn && (
        <div className="space-y-4">
          {supportsBasic && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="csc-user" className={labelClass}>{tTool('remoteUsernameLabel')}</label>
                <input id="csc-user" type="text" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} disabled={disabled || busy} className={inputClass} />
              </div>
              <div>
                <label htmlFor="csc-pass" className={labelClass}>{tTool('remotePasswordLabel')}</label>
                <input
                  id="csc-pass"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && username && password && handleBasicLogin()}
                  disabled={disabled || busy}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <Button variant="primary" size="md" onClick={handleBasicLogin} disabled={disabled || busy || !username || !password}>
                  {tTool('remoteSignInButton')}
                </Button>
              </div>
            </div>
          )}

          {supportsOAuth && (
            <div className="space-y-2">
              <label htmlFor="csc-client" className={labelClass}>{tTool('remoteClientIdLabel')}</label>
              <div className="flex gap-2">
                <input id="csc-client" type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} disabled={disabled || busy} className={inputClass} />
                <Button variant="secondary" size="md" onClick={handleOAuthLogin} disabled={disabled || busy || !clientId.trim()}>
                  {tTool('remoteOAuthButton')}
                </Button>
              </div>
              <p className={hintClass}>
                {tTool('remoteRedirectHint')} <code className="break-all">{redirectUri}</code>
              </p>
            </div>
          )}
        </div>
      )}

      {signedIn && credentials.length > 0 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="csc-cred" className={labelClass}>{tTool('remoteCredentialLabel')}</label>
            <select
              id="csc-cred"
              value={selectedId}
              onChange={(e) => { setSelectedId(e.target.value); setSecrets({}); setOtpSent(false); }}
              disabled={disabled || busy}
              className={inputClass}
            >
              {credentials.map(c => (
                <option key={c.id} value={c.id}>
                  {dnField(c.subjectDN, 'CN') ?? c.description ?? c.id}{c.description && dnField(c.subjectDN, 'CN') ? ` - ${c.description}` : ''}
                </option>
              ))}
            </select>
          </div>

          {credential?.authMode === 'explicit' && credential.authObjects.map(o => (
            <div key={o.id}>
              <label htmlFor={`csc-auth-${o.id}`} className={labelClass}>
                {o.label || (o.kind === 'pin' ? tTool('remotePinLabel') : o.kind === 'otp' ? tTool('remoteOtpLabel') : o.id)}
                {!o.required && <span className="font-normal text-[hsl(var(--color-muted-foreground))]"> ({tTool('remoteOptional')})</span>}
              </label>
              <div className="flex gap-2">
                <input
                  id={`csc-auth-${o.id}`}
                  type="password"
                  autoComplete={o.kind === 'otp' ? 'one-time-code' : 'off'}
                  inputMode={o.format === 'N' ? 'numeric' : undefined}
                  value={secrets[o.id] ?? ''}
                  onChange={(e) => setSecrets(s => ({ ...s, [o.id]: e.target.value }))}
                  disabled={disabled || busy}
                  className={inputClass}
                />
                {o.online && (
                  <Button variant="secondary" size="md" onClick={handleSendOtp} disabled={disabled || busy}>
                    {otpSent ? tTool('remoteResendOtp') : tTool('remoteSendOtp')}
                  </Button>
                )}
              </div>
              {o.description && <p className={hintClass}>{o.description}</p>}
            </div>
          ))}

          {credential?.authMode === 'oauth2code' && (
            <p className={hintClass}>{tTool('remoteOAuthCredentialHint')}</p>
          )}
          {credential?.authMode === 'implicit' && (
            <p className={hintClass}>{tTool('remoteImplicitHint')}</p>
          )}
        </div>
      )}

      {error && (
        <div className="p-3 rounded-[var(--radius-sm)] bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800" role="alert">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      <p className={hintClass}>{tTool('remotePrivacyNote')}</p>
    </div>
  );
}

/** CSC dates are GeneralizedTime ("20251231235959Z") in v1 and often ISO 8601 in v2. */
function parseCscDate(s: string): Date | undefined {
  const g = s.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z$/);
  const d = g ? new Date(Date.UTC(+g[1], +g[2] - 1, +g[3], +g[4], +g[5], +g[6])) : new Date(s);
  return isNaN(d.getTime()) ? undefined : d;
}

export default RemoteSigningPanel;
