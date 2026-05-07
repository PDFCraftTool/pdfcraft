'use client';

import React, { useMemo, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export type ProcessingStatus = 'idle' | 'uploading' | 'processing' | 'complete' | 'error';

export interface ProcessingProgressProps {
  /** Current progress (0-100) */
  progress: number;
  /** Current processing status */
  status: ProcessingStatus;
  /** Current step message */
  message?: string;
  /** Estimated time remaining in seconds */
  estimatedTime?: number;
  /** Custom class name */
  className?: string;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Show estimated time */
  showEstimatedTime?: boolean;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
}

/**
 * ProcessingProgress Component
 * Requirements: 5.3
 * 
 * Displays progress bar with current step and estimated time.
 */
export const ProcessingProgress: React.FC<ProcessingProgressProps> = ({
  progress,
  status,
  message,
  estimatedTime,
  className = '',
  showPercentage = true,
  showEstimatedTime = true,
  onCancel,
}) => {
  const t = useTranslations('common');

  // Clamp progress between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // Format estimated time
  const formattedTime = useMemo(() => {
    if (!estimatedTime || estimatedTime <= 0) return null;
    
    if (estimatedTime < 60) {
      return `${Math.ceil(estimatedTime)}s remaining`;
    }
    
    const minutes = Math.floor(estimatedTime / 60);
    const seconds = Math.ceil(estimatedTime % 60);
    
    if (minutes < 60) {
      return `${minutes}m ${seconds}s remaining`;
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m remaining`;
  }, [estimatedTime]);

  // Get status text
  const statusText = useMemo(() => {
    switch (status) {
      case 'idle':
        return t('status.idle');
      case 'uploading':
        return t('status.uploading');
      case 'processing':
        return t('status.processing');
      case 'complete':
        return t('status.complete');
      case 'error':
        return t('status.error');
      default:
        return '';
    }
  }, [status, t]);

  // Get progress bar color based on status
  const progressBarColor = useMemo(() => {
    switch (status) {
      case 'complete':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'uploading':
      case 'processing':
        return 'bg-[hsl(var(--color-primary))]';
      default:
        return 'bg-[hsl(var(--color-muted))]';
    }
  }, [status]);

  // Determine if we should show the cancel button
  const showCancel = onCancel && (status === 'uploading' || status === 'processing');

  // Track previous status for announcements
  const prevStatusRef = useRef(status);
  const announcementRef = useRef<string>('');

  // Update announcement when status changes
  useEffect(() => {
    if (prevStatusRef.current !== status) {
      if (status === 'complete') {
        announcementRef.current = `${statusText}. ${message || ''}`;
      } else if (status === 'error') {
        announcementRef.current = `${statusText}. ${message || ''}`;
      } else if (status === 'processing' || status === 'uploading') {
        announcementRef.current = statusText;
      }
      prevStatusRef.current = status;
    }
  }, [status, statusText, message]);

  // Don't render if idle
  if (status === 'idle') {
    return null;
  }

  return (
    <div
      className={`w-full rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-4 ${className}`.trim()}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${statusText}: ${clampedProgress}%`}
    >
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announcementRef.current}
      </div>

      {/* Header row: message + percentage */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate">
            {message || statusText}
          </p>
          {(status === 'uploading' || status === 'processing') && (
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-0.5">
              WebAssembly · running locally · 0 KB sent
            </p>
          )}
        </div>
        {showPercentage && (
          <span className="text-sm font-semibold text-[hsl(var(--color-primary))] shrink-0">
            {Math.round(clampedProgress)}%
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-1.5 bg-[hsl(var(--color-muted))] rounded-full overflow-hidden mb-3">
        <div
          className={`absolute left-0 top-0 h-full transition-all duration-300 ease-out rounded-full ${progressBarColor}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>

      {/* Footer row: time + cancel */}
      <div className="flex items-center justify-between text-xs text-[hsl(var(--color-muted-foreground))]">
        <span>
          {(status === 'uploading' || status === 'processing') && showEstimatedTime && formattedTime && (
            <span>{formattedTime}</span>
          )}
        </span>
        {showCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors"
            aria-label={t('buttons.cancel')}
          >
            {t('buttons.cancel')}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProcessingProgress;
