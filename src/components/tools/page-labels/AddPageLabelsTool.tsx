'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { addPageLabels } from '@/lib/pdf/processors/page-labels';
import { parsePageLabelRange } from '@/lib/pdf/page-label-range';
import type { ProcessOutput } from '@/types/pdf';
import { 
  Plus, 
  Trash2, 
  Tag, 
  Info, 
  Layers, 
  HelpCircle, 
  Check, 
  AlertCircle 
} from 'lucide-react';

export interface PageLabelRuleInput {
  pageRange: string;
  style: 'D' | 'R' | 'r' | 'A' | 'a' | 'none';
  prefix: string;
  startValue: number;
}

export function AddPageLabelsTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingFile, setIsLoadingFile] = useState(false);

  // Configuration options: list of rules
  const [rules, setRules] = useState<PageLabelRuleInput[]>([
    {
      pageRange: '', // Default: all pages
      style: 'D',
      prefix: '',
      startValue: 1,
    }
  ]);

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Preview limit
  const [showAllPreview, setShowAllPreview] = useState(false);

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Handle File Selection and read total pages
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingFile(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError(t('pageLabels.errorMetadata'));
    } finally {
      setIsLoadingFile(false);
    }
  }, []);

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
  };

  /**
   * Rule Management Operations
   */
  const handleAddRule = () => {
    setRules(prev => [
      ...prev,
      {
        pageRange: '',
        style: 'D',
        prefix: '',
        startValue: 1,
      }
    ]);
  };

  const handleRemoveRule = (index: number) => {
    setRules(prev => prev.filter((_, i) => i !== index));
  };

  const handleRuleChange = (index: number, fields: Partial<PageLabelRuleInput>) => {
    setRules(prev => prev.map((rule, i) => {
      if (i === index) {
        return {
          ...rule,
          ...fields
        };
      }
      return rule;
    }));
  };

  /**
   * Client-side Label Generation preview logic
   */
  const pageLabelsPreview = useMemo(() => {
    if (totalPages <= 0) return [];

    // 1. Initialize map
    const pageToRuleMap = new Array<PageLabelRuleInput | null>(totalPages).fill(null);

    // Later rules override earlier ones
    rules.forEach((rule, ruleIdx) => {
      const indices = parsePageLabelRange(rule.pageRange || '', totalPages);
      indices.forEach(idx => {
        // Embed the unique rule order index as reference
        pageToRuleMap[idx] = { ...rule, startValue: ruleIdx }; 
      });
    });

    // 2. Track real indices to count applied count per rule
    const ruleAppliedCount = new Map<number, number>();
    rules.forEach((_, ruleIdx) => {
      ruleAppliedCount.set(ruleIdx, 0);
    });

    const labels: string[] = [];

    // 3. Re-run boundary-splitting transition flow
    for (let i = 0; i < totalPages; i++) {
      const currentRuleRef = pageToRuleMap[i];

      if (currentRuleRef !== null) {
        const ruleIndex = currentRuleRef.startValue; // stored order index
        const originalRule = rules[ruleIndex];

        const countSoFar = ruleAppliedCount.get(ruleIndex) || 0;
        const startValBase = originalRule.startValue !== undefined && !isNaN(originalRule.startValue) 
          ? originalRule.startValue 
          : 1;
        const finalStartVal = startValBase + countSoFar;

        const numStr = formatNumberForPreview(finalStartVal, originalRule.style);
        labels.push(`${originalRule.prefix || ''}${numStr}`);

        ruleAppliedCount.set(ruleIndex, countSoFar + 1);
      } else {
        // Default decimal fallback
        labels.push(String(i + 1));
      }
    }

    return labels;
  }, [totalPages, rules]);

  /**
   * Process and Compile
   */
  const handleProcess = async () => {
    if (!file) {
      setError(t('pageLabels.errorUpload'));
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await addPageLabels(
        file,
        {
          rules: rules.map(r => ({
            pageRange: r.pageRange,
            style: r.style,
            prefix: r.prefix || undefined,
            startValue: r.startValue !== undefined && !isNaN(r.startValue) ? r.startValue : undefined
          }))
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || t('pageLabels.progressInjecting'));
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || t('pageLabels.errorInjecting'));
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : t('pageLabels.errorUnknown'));
        setStatus('error');
      }
    }
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  // Limit preview count to prevent DOM lag on massive PDFs
  const maxPreviewCount = 60;
  const previewList = showAllPreview 
    ? pageLabelsPreview 
    : pageLabelsPreview.slice(0, maxPreviewCount);

  return (
    <div className="space-y-6">
      {/* File Upload Zone */}
      <div className="space-y-3">
        <label className="text-sm font-bold text-[hsl(var(--color-foreground))] block">
          {t('pageLabels.uploadLabel')}
        </label>
        {file ? (
          <Card 
            variant="outlined" 
            className="relative group p-4 flex items-center justify-between border-2 border-[hsl(var(--color-primary)/0.3)] bg-[hsl(var(--color-muted)/0.15)] rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 text-[hsl(var(--color-primary))]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 2v6h6" fill="white" />
                <text x="8" y="17" fontSize="5" fill="white" fontWeight="bold">LABEL</text>
              </svg>
              <div>
                <p 
                  className="font-semibold text-sm text-[hsl(var(--color-foreground))] truncate max-w-[280px] md:max-w-md" 
                  title={file.name}
                >
                  {file.name}
                </p>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {totalPages > 0 ? t('pageLabels.uploadSuccess', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                </p>
              </div>
            </div>
            <button 
              onClick={handleClearFile}
              disabled={isProcessing}
              className="p-1 rounded-full hover:bg-[hsl(var(--color-muted))] text-zinc-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </Card>
        ) : (
          <FileUploader
            accept={['application/pdf']}
            multiple={false}
            onFilesSelected={handleFileSelected}
            onError={setError}
            disabled={isProcessing || isLoadingFile}
            label={t('pageLabels.uploadButton')}
            description={t('pageLabels.uploadDesc')}
            className="min-h-[160px] p-6 rounded-2xl"
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400">
          <div className="flex gap-2.5 items-start">
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        </div>
      )}

      {/* Configuration & Preview Area */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Rules configuration panel */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center pb-2">
              <label className="text-sm font-bold text-[hsl(var(--color-foreground))] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[hsl(var(--color-primary))]" />
                {t('pageLabels.optionsTitle')}
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddRule}
                disabled={isProcessing}
                className="flex items-center gap-1 text-xs border border-[hsl(var(--color-primary)/0.35)] hover:bg-[hsl(var(--color-primary)/0.08)] py-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                {t('pageLabels.addRuleButton')}
              </Button>
            </div>

            <div className="space-y-4">
              {rules.map((rule, idx) => (
                <Card 
                  key={idx}
                  variant="outlined" 
                  className="p-5 rounded-2xl relative space-y-4 backdrop-blur-md bg-white/40 dark:bg-black/35 border border-white/20 dark:border-zinc-800/40 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex justify-between items-center border-b border-[hsl(var(--color-border))] pb-3">
                    <span className="text-xs font-bold text-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] px-2.5 py-1 rounded-md">
                      {t('pageLabels.ruleTitle', { index: idx + 1 })}
                    </span>
                    {rules.length > 1 && (
                      <button
                        onClick={() => handleRemoveRule(idx)}
                        disabled={isProcessing}
                        className="text-zinc-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-[hsl(var(--color-muted))] transition-colors"
                        title={t('pageLabels.deleteRuleTitle')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Page Range input */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))]">
                          {t('pageLabels.pageRangeLabel')}
                        </label>
                        <span className="text-[10px] text-[hsl(var(--color-muted-foreground))] font-medium">
                          {t('pageLabels.pageRangeHelp')}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={t('pageLabels.pageRangePlaceholder')}
                        value={rule.pageRange}
                        onChange={(e) => handleRuleChange(idx, { pageRange: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-input))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Style selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] block">
                        {t('pageLabels.styleLabel')}
                      </label>
                      <select
                        value={rule.style}
                        onChange={(e) => handleRuleChange(idx, { style: e.target.value as any })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[hsl(var(--color-muted)/0.35)] border border-[hsl(var(--color-input))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] transition-all"
                      >
                        <option value="D">{t('pageLabels.styleArabic')}</option>
                        <option value="R">{t('pageLabels.styleRomanUpper')}</option>
                        <option value="r">{t('pageLabels.styleRomanLower')}</option>
                        <option value="A">{t('pageLabels.styleAlphaUpper')}</option>
                        <option value="a">{t('pageLabels.styleAlphaLower')}</option>
                        <option value="none">{t('pageLabels.styleNone')}</option>
                      </select>
                    </div>

                    {/* Prefix input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] block">
                        {t('pageLabels.prefixLabel')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('pageLabels.prefixPlaceholder')}
                        value={rule.prefix}
                        onChange={(e) => handleRuleChange(idx, { prefix: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-input))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] transition-all"
                      />
                    </div>

                    {/* Start value input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] block">
                        {t('pageLabels.startValueLabel')}
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={rule.startValue}
                        onChange={(e) => handleRuleChange(idx, { startValue: parseInt(e.target.value, 10) || 1 })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-input))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] transition-all"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Run Buttons */}
            <div className="space-y-3 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleProcess}
                disabled={isProcessing}
                className="w-full py-4 font-bold shadow-lg shadow-[hsl(var(--color-primary)/0.15)] flex items-center justify-center gap-2"
              >
                <Tag className="w-5 h-5" />
                {isProcessing ? t('pageLabels.processing') : t('pageLabels.processButton')}
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={file.name.replace('.pdf', '_labeled.pdf')}
                  variant="secondary"
                  size="lg"
                  className="w-full py-4"
                  showFileSize
                />
              )}
            </div>

            {status === 'complete' && result && (
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400 text-center animate-in fade-in">
                <p className="text-sm font-semibold flex items-center justify-center gap-1.5">
                  <Check className="w-5 h-5" />
                  {t('pageLabels.successMessage')}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Live tag preview panel */}
          <div className="lg:col-span-5 space-y-4">
            <label className="text-sm font-bold text-[hsl(var(--color-foreground))] flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-emerald-500" />
              {t('pageLabels.previewTitle')}
            </label>

            <Card 
              variant="outlined" 
              className="p-6 bg-[hsl(var(--color-card))] rounded-2xl min-h-[460px] flex flex-col border border-[hsl(var(--color-border))] shadow-inner"
            >
              {/* Informative tips */}
              <div className="mb-4 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/35 text-[11px] text-[hsl(var(--color-muted-foreground))] leading-normal flex gap-2">
                <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[hsl(var(--color-foreground))]">{t('pageLabels.previewAlgorithmTitle')}</span>
                  {t('pageLabels.previewAlgorithmDesc')}
                </div>
              </div>

              {/* Grid Preview */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 overflow-y-auto max-h-[380px] pr-1.5 custom-scrollbar">
                {previewList.map((label, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl border border-[hsl(var(--color-border)/0.4)] bg-white/20 dark:bg-zinc-800/10 backdrop-blur-sm select-none transition-all duration-300 hover:border-[hsl(var(--color-primary)/0.3)]"
                  >
                    <span className="text-[10px] font-bold text-[hsl(var(--color-muted-foreground))]">
                      P.{idx + 1}
                    </span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white shadow-sm shadow-emerald-500/10">
                      {label}
                    </span>
                  </div>
                ))}

                {totalPages > maxPreviewCount && !showAllPreview && (
                  <div className="col-span-full pt-4 pb-2 text-center">
                    <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] mb-2">
                      {t('pageLabels.previewFolded', { count: totalPages - maxPreviewCount })}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAllPreview(true)}
                      className="text-[10px] py-1 px-3 rounded-xl"
                    >
                      {t('pageLabels.previewLoadAll', { total: totalPages })}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={handleCancel}
          showPercentage
        />
      )}
    </div>
  );
}

/**
 * Format helper for client preview
 */
function formatNumberForPreview(num: number, style: string): string {
  switch (style) {
    case 'D':
      return String(num);
    case 'R':
      return toRomanForPreview(num);
    case 'r':
      return toRomanForPreview(num).toLowerCase();
    case 'A':
      return toAlphaForPreview(num, true);
    case 'a':
      return toAlphaForPreview(num, false);
    case 'none':
    default:
      return '';
  }
}

function toRomanForPreview(num: number): string {
  if (num <= 0 || num > 3999) return String(num);
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  let val = num;
  for (const [value, symbol] of romanNumerals) {
    while (val >= value) {
      result += symbol;
      val -= value;
    }
  }
  return result;
}

function toAlphaForPreview(num: number, isUppercase: boolean): string {
  if (num <= 0) return String(num);
  let result = '';
  let temp = num;
  const baseCharCode = isUppercase ? 65 : 97;
  
  while (temp > 0) {
    const remainder = (temp - 1) % 26;
    result = String.fromCharCode(baseCharCode + remainder) + result;
    temp = Math.floor((temp - 1) / 26);
  }
  return result;
}

export default AddPageLabelsTool;
