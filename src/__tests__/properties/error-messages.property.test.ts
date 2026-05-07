import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { PDFErrorCode } from '@/types/pdf';
import { 
  ERROR_MESSAGE_KEYS, 
  DEFAULT_ERROR_MESSAGES,
  getAllErrorCodes,
  isValidErrorCode,
} from '@/lib/pdf/errors';
import { SUPPORTED_LOCALES, type Locale } from '@/lib/i18n';

// Import all locale message files
import enMessages from '../../../messages/en.json';
import jaMessages from '../../../messages/ja.json';
import koMessages from '../../../messages/ko.json';
import esMessages from '../../../messages/es.json';
import frMessages from '../../../messages/fr.json';
import deMessages from '../../../messages/de.json';
import zhMessages from '../../../messages/zh.json';
import zhTW_Messages from '../../../messages/zh-TW.json';
import ptMessages from '../../../messages/pt.json';
import arMessages from '../../../messages/ar.json';
import itMessages from '../../../messages/it.json';

// Map of locale to messages
const LOCALE_MESSAGES: Record<Locale, Record<string, unknown>> = {
  en: enMessages,
  ja: jaMessages,
  ko: koMessages,
  es: esMessages,
  fr: frMessages,
  de: deMessages,
  zh: zhMessages,
  'zh-TW': zhTW_Messages,
  pt: ptMessages,
  ar: arMessages,
  it: itMessages,
};

/**
 * Helper function to get nested value from object using dot notation
 */
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  
  return typeof current === 'string' ? current : undefined;
}

describe('Error Message Mapping Property Tests', () => {
  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * For any defined error code in the system, there SHALL exist a 
   * corresponding user-friendly error message in all supported locales.
   */
  it('Property 9: every error code has a message key defined', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        (errorCode) => {
          // Every error code should have a corresponding message key
          const messageKey = ERROR_MESSAGE_KEYS[errorCode];
          expect(messageKey).toBeDefined();
          expect(typeof messageKey).toBe('string');
          expect(messageKey.length).toBeGreaterThan(0);
          
          // Message key should follow the pattern 'errors.{errorName}'
          expect(messageKey).toMatch(/^errors\./);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * For any defined error code, there SHALL exist a default English message.
   */
  it('Property 9: every error code has a default English message', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        (errorCode) => {
          // Every error code should have a default message
          const defaultMessage = DEFAULT_ERROR_MESSAGES[errorCode];
          expect(defaultMessage).toBeDefined();
          expect(typeof defaultMessage).toBe('string');
          expect(defaultMessage.length).toBeGreaterThan(0);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * For any defined error code and any supported locale, there SHALL exist
   * a corresponding user-friendly error message in that locale.
   */
  it('Property 9: every error code has a message in all supported locales', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        fc.constantFrom(...SUPPORTED_LOCALES),
        (errorCode, locale) => {
          // Get the message key for this error code
          const messageKey = ERROR_MESSAGE_KEYS[errorCode];
          expect(messageKey).toBeDefined();
          
          // Get the messages for this locale
          const messages = LOCALE_MESSAGES[locale];
          expect(messages).toBeDefined();
          
          // Get the error message from the locale messages
          const errorMessage = getNestedValue(messages, messageKey);
          
          // Every error code should have a message in every locale
          expect(errorMessage).toBeDefined();
          expect(typeof errorMessage).toBe('string');
          expect(errorMessage!.length).toBeGreaterThan(0);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * For any error code, the message in each locale should be user-friendly
   * (not just the error code itself or a technical message).
   */
  it('Property 9: error messages are user-friendly (not raw error codes)', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        fc.constantFrom(...SUPPORTED_LOCALES),
        (errorCode, locale) => {
          const messageKey = ERROR_MESSAGE_KEYS[errorCode];
          const messages = LOCALE_MESSAGES[locale];
          const errorMessage = getNestedValue(messages, messageKey);
          
          // Message should not be the raw error code
          expect(errorMessage).not.toBe(errorCode);
          
          // Message should not contain the raw error code format (SCREAMING_SNAKE_CASE)
          expect(errorMessage).not.toMatch(/^[A-Z_]+$/);
          
          // Message should be a proper sentence (contains spaces or is localized)
          // For non-English locales, we just check it's not empty
          if (locale === 'en') {
            expect(errorMessage).toMatch(/\s/); // Contains at least one space
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * The error code validation function should correctly identify valid codes.
   */
  it('Property 9: isValidErrorCode correctly validates error codes', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        (errorCode) => {
          // All defined error codes should be valid
          expect(isValidErrorCode(errorCode)).toBe(true);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * Random strings that are not error codes should be invalid.
   */
  it('Property 9: random strings are not valid error codes', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => !allErrorCodes.includes(s as PDFErrorCode)),
        (randomString) => {
          // Random strings should not be valid error codes
          expect(isValidErrorCode(randomString)).toBe(false);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 9: Error Message Mapping**
   * **Validates: Requirements 5.5**
   * 
   * All error codes should have consistent message key naming.
   */
  it('Property 9: error message keys follow consistent naming convention', () => {
    const allErrorCodes = getAllErrorCodes();
    
    fc.assert(
      fc.property(
        fc.constantFrom(...allErrorCodes),
        (errorCode) => {
          const messageKey = ERROR_MESSAGE_KEYS[errorCode];
          
          // All message keys should start with 'errors.'
          expect(messageKey.startsWith('errors.')).toBe(true);
          
          // The key after 'errors.' should be camelCase
          const keyName = messageKey.replace('errors.', '');
          expect(keyName).toMatch(/^[a-z][a-zA-Z]*$/);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Verify that the number of error codes matches the number of message keys
   */
  it('Property 9: all error codes have corresponding message keys (completeness check)', () => {
    const allErrorCodes = getAllErrorCodes();
    const messageKeyCount = Object.keys(ERROR_MESSAGE_KEYS).length;
    
    // The number of error codes should match the number of message keys
    expect(allErrorCodes.length).toBe(messageKeyCount);
    
    // Every error code should be a key in ERROR_MESSAGE_KEYS
    for (const code of allErrorCodes) {
      expect(ERROR_MESSAGE_KEYS).toHaveProperty(code);
    }
  });
});
