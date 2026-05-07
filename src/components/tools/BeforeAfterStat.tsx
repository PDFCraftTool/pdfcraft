'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface BeforeAfterStatProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeValue: string;
  afterValue: string;
  savingsLabel?: string;
  className?: string;
}

export function BeforeAfterStat({
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  beforeValue,
  afterValue,
  savingsLabel,
  className = '',
}: BeforeAfterStatProps) {
  return (
    <div className={`grid grid-cols-[1fr_auto_1fr] items-center gap-3 ${className}`}>
      <div className="rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.5)] p-3">
        <p className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider mb-1">
          {beforeLabel}
        </p>
        <p className="text-xl font-bold text-[hsl(var(--color-foreground))]">{beforeValue}</p>
      </div>

      <ArrowRight className="w-4 h-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />

      <div className="rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-3">
        <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">
          {afterLabel}
        </p>
        <p className="text-xl font-bold text-green-700 dark:text-green-300">{afterValue}</p>
      </div>

      {savingsLabel && (
        <p className="col-span-3 text-xs text-center text-[hsl(var(--color-muted-foreground))]">
          {savingsLabel}
        </p>
      )}
    </div>
  );
}

export default BeforeAfterStat;
