'use client';

import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export interface TrustBadge {
  icon: React.ReactNode;
  label: string;
}

const defaultBadges: TrustBadge[] = [
  { icon: <ShieldCheck className="w-3.5 h-3.5 text-green-500" />, label: 'Processed locally' },
  { icon: <span className="w-3.5 h-3.5 text-green-500 font-bold text-xs">✓</span>, label: 'Free' },
  { icon: <Star className="w-3.5 h-3.5 text-amber-500" />, label: 'Popular' },
];

export interface TrustBadgesProps {
  badges?: TrustBadge[];
  className?: string;
}

export function TrustBadges({ badges = defaultBadges, className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Tool features">
      {badges.map((badge, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--color-muted-foreground))]"
        >
          {badge.icon}
          {badge.label}
        </span>
      ))}
    </div>
  );
}

export default TrustBadges;
