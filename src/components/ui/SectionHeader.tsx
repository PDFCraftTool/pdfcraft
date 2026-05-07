'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  description,
  ctaLabel,
  ctaHref,
  badge,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const centerClass = align === 'center' ? 'text-center items-center' : '';

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${className}`}>
      <div className={`flex flex-col gap-2 ${centerClass}`}>
        {badge && (
          <span className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-primary))] border border-[hsl(var(--color-primary)/0.15)]">
            {badge}
          </span>
        )}
        <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))]">{title}</h2>
        {description && (
          <p className="text-sm text-[hsl(var(--color-muted-foreground))] max-w-xl">{description}</p>
        )}
      </div>

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--color-primary))] hover:underline shrink-0"
        >
          {ctaLabel}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
