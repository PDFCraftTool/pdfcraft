/**
 * Tool content exports for all languages
 * Requirements: 3.1 - Multi-language support
 */

export { toolContentEn } from './en';
export { toolContentJa } from './ja';
export { toolContentKo } from './ko';
export { toolContentEs } from './es';
export { toolContentFr } from './fr';
export { toolContentDe } from './de';
export { toolContentZh } from './zh';
export { toolContentZhTW } from './zh-TW';
export { toolContentPt } from './pt';
export { toolContentAr } from './ar';
export { toolContentIt } from './it';
export { toolContentId } from './id';
export { toolContentVn } from './vi';

import { toolContentEn } from './en';
import { toolContentJa } from './ja';
import { toolContentKo } from './ko';
import { toolContentEs } from './es';
import { toolContentFr } from './fr';
import { toolContentDe } from './de';
import { toolContentZh } from './zh';
import { toolContentZhTW } from './zh-TW';
import { toolContentPt } from './pt';
import { toolContentAr } from './ar';
import { toolContentIt } from './it';
import { toolContentId } from './id';
import { toolContentVn } from './vi';
import { ToolContent } from '@/types/tool';

export type Locale = 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'zh' | 'zh-TW' | 'pt' | 'ar' | 'it' | 'id' | 'vi' | 'ro';

/**
 * Get tool content for a specific locale
 * Falls back to English if translation not found
 * zh-TW falls back to zh (Simplified Chinese) content
 * ar falls back to en content for now
 */
export function getToolContent(locale: Locale, toolId: string): ToolContent | undefined {
  const contentMap: Record<string, Record<string, ToolContent>> = {
    en: toolContentEn,
    ja: toolContentJa,
    ko: toolContentKo,
    es: toolContentEs,
    fr: toolContentFr,
    de: toolContentDe,
    zh: toolContentZh,
    'zh-TW': toolContentZhTW,
    pt: toolContentPt,
    ar: toolContentAr,
    it: toolContentIt,
    id: toolContentId,
    vi: toolContentVn,
    ro: toolContentEn, // Fallback to English for Romanian tool content for now
  };

  const localeContent = contentMap[locale];
  if (localeContent && localeContent[toolId]) {
    return localeContent[toolId];
  }

  // Fallback to English
  return toolContentEn[toolId];
}

