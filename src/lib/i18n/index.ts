import { locales as canonicalLocales } from './config';

/**
 * Internationalization utilities
 * Re-exports all i18n configuration and utilities
 */

export {
  locales,
  defaultLocale,
  localeConfig,
  isRTL,
  isValidLocale,
  getLocaleFromPath,
  getLocalizedPath,
  type Locale,
} from './config';

export {
  isRTLLocale,
  getDirection,
  getRTLClasses,
  flipPosition,
  getLogicalProperty,
  getIconRotation,
} from './rtl';

export {
  loadMessages,
  loadEnglishMessages,
  getNestedValue,
  getTranslationWithFallback,
  mergeWithFallback,
  createTranslator,
  hasTranslation,
  getMissingKeys,
  type NestedMessages,
} from './fallback';

// Legacy exports for backward compatibility
export const SUPPORTED_LOCALES = canonicalLocales;
export const DEFAULT_LOCALE = 'en';
export const LOCALE_CONFIG = {
  en: { name: 'English', nativeName: 'English', direction: 'ltr' as const },
  ja: { name: 'Japanese', nativeName: '日本語', direction: 'ltr' as const },
  ko: { name: 'Korean', nativeName: '한국어', direction: 'ltr' as const },
  es: { name: 'Spanish', nativeName: 'Español', direction: 'ltr' as const },
  fr: { name: 'French', nativeName: 'Français', direction: 'ltr' as const },
  de: { name: 'German', nativeName: 'Deutsch', direction: 'ltr' as const },
  zh: { name: 'Chinese', nativeName: '中文', direction: 'ltr' as const },
  'zh-TW': { name: 'Chinese (Traditional)', nativeName: '繁體中文', direction: 'ltr' as const },
  pt: { name: 'Portuguese', nativeName: 'Português', direction: 'ltr' as const },
  ar: { name: 'Arabic', nativeName: 'العربية', direction: 'rtl' as const },
  it: { name: 'Italian', nativeName: 'Italiano', direction: 'ltr' as const },
  id: { name: 'Indonesian', nativeName: 'Bahasa Indonesia', direction: 'ltr' as const },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt', direction: 'ltr' as const },
  ro: { name: 'Romanian', nativeName: 'Română', direction: 'ltr' as const },
  pl: { name: 'Polish', nativeName: 'Polski', direction: 'ltr' as const },
};
