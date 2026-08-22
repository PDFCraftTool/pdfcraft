/**
 * Supported locales
 */
export type Locale = 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'zh' | 'zh-TW' | 'pt' | 'ar' | 'it' | 'id' | 'vi' | 'ro' | 'pl';

/**
 * Locale configuration
 */
export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  dateFormat: string;
}

/**
 * Common translation messages
 */
export interface CommonMessages {
  brand: string;
  tagline: string;
  navigation: {
    home: string;
    tools: string;
    about: string;
    faq: string;
    privacy: string;
    contact: string;
  };
  buttons: {
    upload: string;
    download: string;
    process: string;
    cancel: string;
    reset: string;
  };
  status: {
    idle: string;
    uploading: string;
    processing: string;
    complete: string;
    error: string;
  };
}

/**
 * Error messages
 */
export interface ErrorMessages {
  fileTooLarge: string;
  fileTypeInvalid: string;
  fileCorrupted: string;
  processingFailed: string;
  networkError: string;
}
