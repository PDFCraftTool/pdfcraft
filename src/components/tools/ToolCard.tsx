'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import { getToolIcon } from '@/config/icons';
import { POPULAR_TOOL_IDS } from '@/config/tools';
import { ToolBadge, type BadgeVariant } from '@/components/ui/ToolBadge';

export interface ToolCardProps {
  tool: Tool;
  locale: string;
  className?: string;
  localizedContent?: { title: string; description: string };
  /** Override badge shown on the card */
  badge?: BadgeVariant;
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolCard component displays a single PDF tool with icon, name, and description.
 * Includes hover effects and links to the tool page.
 */
export function ToolCard({ tool, locale, className = '', localizedContent, badge }: ToolCardProps) {
  const t = useTranslations();
  const toolUrl = `/${locale}/tools/${tool.slug}`;

  const toolName = localizedContent?.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const description = localizedContent?.description || tool.features
    .slice(0, 3)
    .map(f => f.replace(/-/g, ' '))
    .join(', ');

  const IconComponent = getToolIcon(tool.icon);

  const resolvedBadge: BadgeVariant | null = badge ?? (POPULAR_TOOL_IDS.includes(tool.id) ? 'popular' : null);

  return (
    <Link
      href={toolUrl}
      className={`block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 rounded-xl group ${className}`}
      data-testid="tool-card"
    >
      <Card
        className="h-full bg-[hsl(var(--color-card))] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden border border-[hsl(var(--color-border))]"
        data-testid="tool-card-container"
      >
        {/* Badge top-right — purple star pill, no separate favorite star */}
        {resolvedBadge && (
          <div className="absolute top-3 right-3 z-10">
            <ToolBadge variant={resolvedBadge} />
          </div>
        )}

        <div className="p-4 flex flex-col gap-3">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center"
            data-testid="tool-card-icon"
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5 text-[hsl(var(--color-primary))]" data-icon={tool.icon} />
          </div>

          {/* Name + description */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-sm font-semibold text-[hsl(var(--color-card-foreground))] mb-1 group-hover:text-[hsl(var(--color-primary))] transition-colors"
              data-testid="tool-card-name"
            >
              {toolName}
            </h3>
            <p
              className="text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-2 leading-relaxed"
              data-testid="tool-card-description"
            >
              {description}
            </p>
          </div>

          {/* Open tool link */}
          <div className="flex items-center gap-1 text-xs font-medium text-[hsl(var(--color-primary))]">
            Open tool
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default ToolCard;
