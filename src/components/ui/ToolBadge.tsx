'use client';

import React from 'react';
import { Star, Sparkles, Crown } from 'lucide-react';

export type BadgeVariant = 'popular' | 'new' | 'free' | 'premium';

const variantStyles: Record<BadgeVariant, string> = {
  popular: 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-600 dark:text-white dark:border-purple-600',
  new:     'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-600 dark:text-white dark:border-blue-600',
  free:    'bg-green-50 text-green-600 border-green-100 dark:bg-green-600 dark:text-white dark:border-green-600',
  premium: 'bg-violet-50 text-violet-600 border-violet-100 dark:bg-violet-600 dark:text-white dark:border-violet-600',
};

const BadgeIcon: Record<BadgeVariant, React.FC<{ className?: string }>> = {
  popular: ({ className }) => <Star className={className} />,
  new:     ({ className }) => <Sparkles className={className} />,
  free:    ({ className }) => <span className={className}>✓</span>,
  premium: ({ className }) => <Crown className={className} />,
};

export interface ToolBadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

export function ToolBadge({ variant, label, className = '' }: ToolBadgeProps) {
  const Icon = BadgeIcon[variant];
  const defaultLabels: Record<BadgeVariant, string> = {
    popular: 'Popular',
    new: 'New',
    free: 'Free',
    premium: 'Premium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      <Icon className="w-3 h-3" />
      {label ?? defaultLabels[variant]}
    </span>
  );
}

export default ToolBadge;
