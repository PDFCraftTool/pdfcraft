/**
 * Tool content exports for all languages
 * Requirements: 3.1 - Multi-language support
 */

import { toolContentEn } from './en';
import { toolContentJa } from './ja';
import { toolContentKo } from './ko';
import { toolContentEs } from './es';
import { toolContentFr } from './fr';
import { toolContentDe } from './de';
import { toolContentZh } from './zh';
import { toolContentPt } from './pt';
import { toolContentVn } from './vi';
import { ToolContent } from '@/types/tool';

export type Locale = 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'zh' | 'zh-TW' | 'pt' | 'vi';

/**
 * Get tool content for a specific locale
 * Falls back to English if translation not found
 * zh-TW falls back to zh (Simplified Chinese) content
 */
export function getToolContent(locale: Locale, toolId: string): ToolContent | undefined {
  const contentMap: Record<Exclude<Locale, 'zh-TW'>, Record<string, ToolContent>> = {
    en: toolContentEn,
    ja: toolContentJa,
    ko: toolContentKo,
    es: toolContentEs,
    fr: toolContentFr,
    de: toolContentDe,
    zh: toolContentZh,
    pt: toolContentPt,
    vi: toolContentVn
  };

  // Map zh-TW to zh (use Simplified Chinese content for Traditional Chinese)
  const effectiveLocale = locale === 'zh-TW' ? 'zh' : locale;

  const localeContent = contentMap[effectiveLocale];
  if (localeContent && localeContent[toolId]) {
    return localeContent[toolId];
  }

  // Fallback to English
  return toolContentEn[toolId];
}

