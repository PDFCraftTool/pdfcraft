'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import type { CertificateData } from '@/types/digital-signature';
import { openPendingPopup } from '@/lib/pdf/remote-signing/oauth-popup';
import { RemoteSigningPanel, type RemoteSigningSelection } from './RemoteSigningPanel';

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

export function DigitalSignPDFTool({ className = '' }: { className?: string }) {
  const t = useTranslations('common');
  const tTool = useTranslations('tools.digitalSign');

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);
  const [certData, setCertData] = useState<CertificateData | null>(null);
  const [certError, setCertError] = useState<string | null>(null);
  const [certInfo, setCertInfo] = useState<{ subject: string; issuer: string; validFrom: Date; validTo: Date } | null>(null);
  const [certExpired, setCertExpired] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [needsPassword, setNeedsPassword] = useState(false);
  const [signMode, setSignMode] = useState<'file' | 'remote'>('file');
  const [remote, setRemote] = useState<RemoteSigningSelection | null>(null);

  // Signature options
  const [reason, setReason] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [enableVisible, setEnableVisible] = useState(false);
  const [sigX, setSigX] = useState(25);
  const [sigY, setSigY] = useState(700);
  const [sigWidth, setSigWidth] = useState(200);
  const [sigHeight, setSigHeight] = useState(70);
  const [sigPage, setSigPage] = useState<string>('first');
  const [sigText, setSigText] = useState('');
  const [sigTextColor, setSigTextColor] = useState('#000000');
  const [sigTextSize, setSigTextSize] = useState(12);
  const [sigImageFile, setSigImageFile] = useState<File | null>(null);
  const [sigImageData, setSigImageData] = useState<ArrayBuffer | null>(null);
  const [sigImageType, setSigImageType] = useState<'png' | 'jpeg' | null>(null);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const handlePdfSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setPdfFile(files[0]);
      setError(null);
      setResult(null);
    }
  }, []);

  const parseCert = useCallback(async (file: File, pwd: string) => {
    try {
      const { parsePfxFile, parseCombinedPem, getCertificateInfo } = await import('@/lib/pdf/processors/digital-sign');
      const isPem = file.name.toLowerCase().endsWith('.pem');

      let data: CertificateData;
      if (isPem) {
        const content = await file.text();
        data = parseCombinedPem(content, pwd || undefined);
      } else {
        const bytes = await file.arrayBuffer();
        data = parsePfxFile(bytes, pwd);
      }

      setCertData(data);
      setCertError(null);
      const info = getCertificateInfo(data.certificate);
      setCertInfo(info);

      // Check certificate expiration
      const now = new Date();
      const expired = now > info.validTo || now < info.validFrom;
      setCertExpired(expired);
      if (expired) {
        setCertError('Certificate is expired or not yet valid');
      }
    } catch (err) {
      setCertData(null);
      setCertInfo(null);
      setCertExpired(false);
      const msg = err instanceof Error ? err.message : 'Failed to parse certificate';
      setCertError(msg.includes('password') ? 'Incorrect password' : msg); // TODO: Translate error messages
    }
  }, []);

  const handleCertSelected = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validExts = ['.pfx', '.p12', '.pem'];
    const hasValid = validExts.some(ext => file.name.toLowerCase().endsWith(ext));
    if (!hasValid) {
      setCertError(tTool('errorType'));
      return;
    }

    setCertFile(file);
    setCertError(null);
    setCertData(null);
    setCertInfo(null);
    setCertExpired(false);

    const isPem = file.name.toLowerCase().endsWith('.pem');

    if (isPem) {
      try {
        const content = await file.text();
        const isEncrypted = content.includes('ENCRYPTED');
        if (isEncrypted) {
          setNeedsPassword(true);
        } else {
          await parseCert(file, '');
        }
      } catch {
        setCertError(tTool('errorPEM'));
      }
    } else {
      setNeedsPassword(true);
    }
  }, [parseCert]);

  const handlePasswordSubmit = useCallback(async () => {
    if (!certFile || !password) return;
    await parseCert(certFile, password);
  }, [certFile, password, parseCert]);

  const handleClear = useCallback(() => {
    setPdfFile(null);
    setCertFile(null);
    setCertData(null);
    setCertInfo(null);
    setCertError(null);
    setCertExpired(false);
    setPassword('');
    setNeedsPassword(false);
    setResult(null);
    setError(null);
    setStatus('idle');
    setSigImageFile(null);
    setSigImageData(null);
    setSigImageType(null);
  }, []);

  const handleImageSelected = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = ['image/png', 'image/jpeg'];
    if (!validTypes.includes(file.type)) {
      setError(tTool('errorImgType'));
      return;
    }
    setSigImageFile(file);
    const buffer = await file.arrayBuffer();
    setSigImageData(buffer);
    setSigImageType(file.type === 'image/png' ? 'png' : 'jpeg');
  }, []);

  const handleSign = useCallback(async () => {
    const useRemote = signMode === 'remote';
    if (!pdfFile || (useRemote ? !remote : !certData)) return;

    // A credential authorized on the provider's page needs its window opened inside the click
    const popup = useRemote && remote?.needsPopup ? openPendingPopup() : null;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      setProgress(20);
      setProgressMessage('Reading PDF...');
      const pdfBytes = new Uint8Array(await pdfFile.arrayBuffer());

      if (cancelledRef.current) { setStatus('idle'); return; }

      setProgress(40);
      setProgressMessage('Applying digital signature...');

      const { signPdf, signPdfRemote, getCertificateInfo } = await import('@/lib/pdf/processors/digital-sign');

      let visibleSignature;
      if (enableVisible) {
        let text = sigText;
        if (!text && !sigImageData) {
          const subject = useRemote ? remote!.subject : getCertificateInfo(certData!.certificate).subject;
          text = `Digitally signed by ${subject}\n${new Date().toLocaleDateString()}`;
        }

        // Dynamic height calculation based on text
        let finalHeight = sigHeight;
        if (text && !sigImageData) {
          const lineCount = (text.match(/\n/g) || []).length + 1;
          const lineHeightFactor = 1.4;
          const padding = 16;
          const calculatedHeight = Math.ceil(lineCount * sigTextSize * lineHeightFactor + padding);
          finalHeight = Math.max(calculatedHeight, sigHeight);
        }

        visibleSignature = {
          enabled: true,
          x: sigX,
          y: sigY,
          width: sigWidth,
          height: finalHeight,
          page: sigPage === 'first' ? 0 : sigPage === 'last' ? 'last' : parseInt(sigPage, 10) - 1,
          text: text || undefined,
          textColor: sigTextColor,
          textSize: sigTextSize,
          imageData: sigImageData ?? undefined,
          imageType: sigImageType ?? undefined,
        };
      }

      const signOptions = {
        signatureInfo: { reason: reason || undefined, location: location || undefined, contactInfo: contactInfo || undefined },
        visibleSignature: visibleSignature as any,
      };
      if (useRemote) setProgressMessage(tTool('remoteSigningProgress'));
      const signedBytes = useRemote
        ? await signPdfRemote(pdfBytes, remote!.createSigner(popup), signOptions)
        : await signPdf(pdfBytes, certData!, signOptions);

      if (cancelledRef.current) { setStatus('idle'); return; }

      setProgress(100);
      setResult(new Blob([new Uint8Array(signedBytes)], { type: 'application/pdf' }));
      setStatus('complete');
    } catch (err) {
      if (!cancelledRef.current) {
        const msg = err instanceof Error ? err.message : 'Failed to sign PDF';
        if (msg.includes('Failed to fetch') || msg.includes('CORS') || msg.includes('NetworkError')) {
          setError(tTool('errorFetch'));
        } else {
          setError(msg);
        }
        setStatus('error');
      }
    } finally {
      popup?.close();
    }
  }, [signMode, remote, tTool, pdfFile, certData, reason, location, contactInfo, enableVisible, sigX, sigY, sigWidth, sigHeight, sigPage, sigText, sigTextColor, sigTextSize, sigImageData, sigImageType]);

  const isProcessing = status === 'processing';
  const signerReady = signMode === 'remote' ? !!remote : !!certData;
  const canSign = pdfFile && signerReady && !isProcessing;

  const formatDate = (d: Date) => d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* PDF Upload */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={false}
        maxFiles={1}
        onFilesSelected={handlePdfSelected}
        onError={setError}
        disabled={isProcessing}
        label={tTool('uploadLabel')}
        description={tTool('uploadDescription')}
      />

      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 dark:bg-red-950 dark:border-red-800 dark:text-red-300" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* PDF File Info */}
      {pdfFile && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">{pdfFile.name}</p>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))]">{(pdfFile.size / 1024).toFixed(1)} KB</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClear} disabled={isProcessing}>{t('buttons.remove')}</Button>
          </div>
        </Card>
      )}

      {/* Certificate Upload */}
      {pdfFile && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">{tTool('certificateTitle')}</h3>

          <div role="radiogroup" aria-label={tTool('certificateTitle')} className="inline-flex mb-4 p-1 rounded-[var(--radius-md)] bg-[hsl(var(--color-muted))]">
            {(['file', 'remote'] as const).map(mode => (
              <button
                key={mode}
                type="button"
                role="radio"
                aria-checked={signMode === mode}
                onClick={() => setSignMode(mode)}
                disabled={isProcessing}
                className={`px-3 py-1.5 text-sm font-medium rounded-[var(--radius-sm)] transition-colors duration-200 ${signMode === mode ? 'bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] shadow-sm' : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'}`}
              >
                {mode === 'file' ? tTool('modeFile') : tTool('modeRemote')}
              </button>
            ))}
          </div>

          {signMode === 'remote' ? (
            <div className="space-y-4">
              <RemoteSigningPanel disabled={isProcessing} onChange={setRemote} />
              {remote && (
                <div className="p-3 rounded-[var(--radius-sm)] space-y-1 bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800">
                  <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('subject')}:</span> <span className="font-medium text-[hsl(var(--color-foreground))]">{remote.subject}</span></p>
                  {remote.issuer && <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('issuer')}:</span> <span className="font-medium text-[hsl(var(--color-foreground))]">{remote.issuer}</span></p>}
                  {remote.validFrom && remote.validTo && <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('valid')}:</span> <span className="font-medium text-[hsl(var(--color-foreground))]">{formatDate(remote.validFrom)} — {formatDate(remote.validTo)}</span></p>}
                </div>
              )}
            </div>
          ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="cert-input" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                {tTool('uploadCertificateLabel')}
              </label>
              <input
                id="cert-input"
                type="file"
                accept=".pfx,.p12,.pem"
                onChange={handleCertSelected}
                disabled={isProcessing}
                className="block w-full text-sm text-[hsl(var(--color-foreground))] file:mr-4 file:py-2 file:px-4 file:rounded-[var(--radius-md)] file:border-0 file:text-sm file:font-medium file:bg-[hsl(var(--color-primary))] file:text-white hover:file:opacity-90 cursor-pointer"
              />
            </div>

            {certFile && (
              <div className="p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted))]">
                <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">{certFile.name}</p>
                {certInfo ? (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{tTool('certificateLoaded')}</p>
                ) : certError ? (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">{certError}</p>
                ) : (
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">{tTool('enterPassword')}</p>
                )}
              </div>
            )}

            {certError && (
              <div className="p-3 rounded-[var(--radius-sm)] bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-300">{certError}</p>
              </div>
            )}

            {needsPassword && !certData && (
              <div>
                <label htmlFor="cert-password" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                  {tTool('certificatePasswordLabel')}
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      id="cert-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                      placeholder={tTool('enterPassword')}
                      className="w-full px-3 py-2 pr-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors duration-200"
                    >
                      <EyeIcon open={showPassword} />
                    </button>
                  </div>
                  <Button variant="primary" size="md" onClick={handlePasswordSubmit} disabled={!password}>
                    {tTool('unlockButton')}
                  </Button>
                </div>
              </div>
            )}

            {/* Certificate Info */}
            {certInfo && (
              <div className={`p-3 rounded-[var(--radius-sm)] space-y-1 ${certExpired ? 'bg-yellow-50 border border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800' : 'bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800'}`}>
                <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('subject')}:</span> <span className="font-medium text-[hsl(var(--color-foreground))]">{certInfo.subject}</span></p>
                <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('issuer')}:</span> <span className="font-medium text-[hsl(var(--color-foreground))]">{certInfo.issuer}</span></p>
                <p className="text-sm"><span className="text-[hsl(var(--color-muted-foreground))]">{tTool('valid')}:</span> <span className={`font-medium ${certExpired ? 'text-red-600 dark:text-red-400' : 'text-[hsl(var(--color-foreground))]'}`}>{formatDate(certInfo.validFrom)} — {formatDate(certInfo.validTo)}</span></p>
                {certExpired && (
                  <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">{tTool('warningExpired')}</p>
                )}
              </div>
            )}
          </div>
          )}
        </Card>
      )
      }

      {/* Signature Options */}
      {
        pdfFile && signerReady && (
          <Card variant="outlined">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">{tTool('signatureOptionsTitle')}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sign-reason" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">{tTool('reasonLabel')}</label>
                  <input id="sign-reason" type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder={tTool('reasonPlaceholder')} className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]" />
                </div>
                <div>
                  <label htmlFor="sign-location" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">{tTool('locationLabel')}</label>
                  <input id="sign-location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder={tTool('locationPlaceholder')} className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]" />
                </div>
              </div>
              <div>
                <label htmlFor="sign-contact" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">{tTool('contactInfoLabel')}</label>
                <input id="sign-contact" type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} placeholder={tTool('contactInfoPlaceholder')} className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]" />
              </div>

              {/* Visible Signature Toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={enableVisible} onChange={(e) => setEnableVisible(e.target.checked)} className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]" />
                <span className="text-sm font-medium text-[hsl(var(--color-foreground))]">{tTool('visibleSignatureLabel')}</span>
              </label>

              {enableVisible && (
                <div className="space-y-3 pl-7">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('xPosition')}</label>
                      <input type="number" value={sigX} onChange={(e) => setSigX(Number(e.target.value))} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                    </div>
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('yPosition')}</label>
                      <input type="number" value={sigY} onChange={(e) => setSigY(Number(e.target.value))} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                    </div>
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('width')}</label>
                      <input type="number" value={sigWidth} onChange={(e) => setSigWidth(Number(e.target.value))} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                    </div>
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('height')}</label>
                      <input type="number" value={sigHeight} onChange={(e) => setSigHeight(Number(e.target.value))} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('pageLabel')}</label>
                    <select value={sigPage} onChange={(e) => setSigPage(e.target.value)} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]">
                      <option value="first">{tTool('firstPage')}</option>
                      <option value="last">{tTool('lastPage')}</option>
                      <option value="all">{tTool('allPages')}</option>
                    </select>
                  </div>

                  {/* Signature Image */}
                  <div>
                    <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('signatureImageLabel')}</label>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleImageSelected}
                      className="block w-full text-xs text-[hsl(var(--color-foreground))] file:mr-2 file:py-1 file:px-3 file:rounded-[var(--radius-sm)] file:border-0 file:text-xs file:bg-[hsl(var(--color-muted))] file:text-[hsl(var(--color-foreground))] hover:file:opacity-80 cursor-pointer"
                    />
                    {sigImageFile && (
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-green-600 dark:text-green-400">{sigImageFile.name}</p>
                        <button type="button" onClick={() => { setSigImageFile(null); setSigImageData(null); setSigImageType(null); }} className="text-xs text-red-500 hover:text-red-700 cursor-pointer">{t('buttons.remove')}</button>
                      </div>
                    )}
                  </div>

                  {/* Text options */}
                  <div>
                    <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('signatureTextLabel')}</label>
                    <input type="text" value={sigText} onChange={(e) => setSigText(e.target.value)} placeholder={tTool('signatureTextPlaceholder')} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('textColorLabel')}</label>
                      <input type="color" value={sigTextColor} onChange={(e) => setSigTextColor(e.target.value)} className="w-full h-8 rounded-[var(--radius-sm)] border border-[hsl(var(--color-border))] cursor-pointer" />
                    </div>
                    <div>
                      <label className="block text-xs text-[hsl(var(--color-muted-foreground))] mb-1">{tTool('textSizeLabel')}</label>
                      <input type="number" min={6} max={36} value={sigTextSize} onChange={(e) => setSigTextSize(Number(e.target.value))} className="w-full px-2 py-1.5 text-sm rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        )
      }

      {/* Processing */}
      {
        isProcessing && (
          <ProcessingProgress
            progress={progress}
            status={status}
            message={progressMessage}
            onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
            showPercentage
          />
        )
      }

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary" size="lg" onClick={handleSign} disabled={!canSign} loading={isProcessing}>
          {isProcessing ? (t('status.processing') || 'Processing...') : tTool('signButton')}
        </Button>
        {result && (
          <DownloadButton
            file={result}
            filename={pdfFile ? `${pdfFile.name.replace(/\.pdf$/i, '')}_signed.pdf` : 'signed.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {
        status === 'complete' && result && (
          <div className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-300" role="status">
            <p className="text-sm font-medium">{tTool('successMessage')}</p>
          </div>
        )
      }
    </div >
  );
}

export default DigitalSignPDFTool;
