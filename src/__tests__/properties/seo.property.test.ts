/**
 * SEO Property Tests
 * Tests for meta tags completeness and structured data presence
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { 
  generateBaseMetadata,
  generateToolMetadata,
  generateHomeMetadata,
  generateToolsListMetadata,
  generateAboutMetadata,
  generateFaqMetadata,
  generatePrivacyMetadata,
  validateMetadata,
  getCanonicalUrl,
  getAlternateUrls,
} from '@/lib/seo/metadata';
import {
  generateSoftwareApplicationSchema,
  generateFAQPageSchema,
  generateToolPageStructuredData,
  validateSoftwareApplicationSchema,
  validateFAQPageSchema,
} from '@/lib/seo/structured-data';
import { locales, type Locale } from '@/lib/i18n/config';
import { tools, getAllTools } from '@/config/tools';
import type { Tool, ToolContent, FAQ } from '@/types/tool';

/**
 * Generate a mock ToolContent for testing
 */
function createMockToolContent(tool: Tool): ToolContent {
  return {
    title: `${tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} - PDFaro`,
    metaDescription: `Use ${tool.id.replace(/-/g, ' ')} tool to process your PDF files. Free, private, and secure.`,
    keywords: [tool.id, 'PDF', 'tool', ...tool.features.slice(0, 3)],
    description: `A powerful tool for ${tool.id.replace(/-/g, ' ')} operations.`,
    howToUse: [
      { step: 1, title: 'Upload', description: 'Upload your PDF file' },
      { step: 2, title: 'Configure', description: 'Configure options' },
      { step: 3, title: 'Process', description: 'Click process button' },
      { step: 4, title: 'Download', description: 'Download the result' },
    ],
    useCases: [
      { title: 'Business', description: 'For business documents', icon: 'briefcase' },
      { title: 'Personal', description: 'For personal use', icon: 'user' },
      { title: 'Education', description: 'For educational materials', icon: 'book' },
    ],
    faq: [
      { question: 'Is it free?', answer: 'Yes, completely free.' },
      { question: 'Is it secure?', answer: 'Yes, all processing happens in your browser.' },
      { question: 'What formats are supported?', answer: `Supported formats: ${tool.acceptedFormats.join(', ')}` },
    ],
  };
}

describe('SEO Property Tests', () => {
  /**
   * **Feature: nextjs-pdf-toolkit, Property 1: Meta Tags Completeness**
   * **Validates: Requirements 1.3, 4.1**
   * 
   * For any page in the application and any supported locale, rendering that page 
   * SHALL produce HTML containing all required meta tags (title, description, 
   * og:title, og:description, twitter:card).
   */
  describe('Property 1: Meta Tags Completeness', () => {
    it('all page metadata generators produce complete meta tags for all locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          (locale) => {
            // Test home page metadata
            const homeMetadata = generateHomeMetadata(locale);
            const homeValidation = validateMetadata(homeMetadata);
            expect(homeValidation.valid).toBe(true);
            expect(homeValidation.missingFields).toHaveLength(0);
            
            // Test tools list metadata
            const toolsMetadata = generateToolsListMetadata(locale);
            const toolsValidation = validateMetadata(toolsMetadata);
            expect(toolsValidation.valid).toBe(true);
            
            // Test about page metadata
            const aboutMetadata = generateAboutMetadata(locale);
            const aboutValidation = validateMetadata(aboutMetadata);
            expect(aboutValidation.valid).toBe(true);
            
            // Test FAQ page metadata
            const faqMetadata = generateFaqMetadata(locale);
            const faqValidation = validateMetadata(faqMetadata);
            expect(faqValidation.valid).toBe(true);
            
            // Test privacy page metadata
            const privacyMetadata = generatePrivacyMetadata(locale);
            const privacyValidation = validateMetadata(privacyMetadata);
            expect(privacyValidation.valid).toBe(true);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page metadata contains all required fields for all tools and locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const metadata = generateToolMetadata({ locale, tool, content });
            const validation = validateMetadata(metadata);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify specific required fields
            expect(metadata.title).toBeTruthy();
            expect(metadata.description).toBeTruthy();
            expect(metadata.openGraph).toBeDefined();
            expect(metadata.openGraph?.title).toBeTruthy();
            expect(metadata.openGraph?.description).toBeTruthy();
            expect(metadata.twitter).toBeDefined();
            expect(metadata.twitter?.card).toBeTruthy();
            expect(metadata.twitter?.title).toBeTruthy();
            expect(metadata.twitter?.description).toBeTruthy();
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('metadata includes canonical URL and alternate language URLs', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom('/tools/merge-pdf', '/about', '/faq', ''),
          (locale, path) => {
            const metadata = generateBaseMetadata({
              locale,
              path,
              title: 'Test Page',
              description: 'Test description',
            });
            
            // Check canonical URL
            expect(metadata.alternates?.canonical).toBeTruthy();
            expect(metadata.alternates?.canonical).toContain(locale);
            
            // Check alternate language URLs
            expect(metadata.alternates?.languages).toBeDefined();
            const languages = metadata.alternates?.languages as Record<string, string>;
            
            // All locales should be present
            for (const loc of locales) {
              expect(languages[loc]).toBeTruthy();
              expect(languages[loc]).toContain(loc);
            }
            
            // x-default should be present
            expect(languages['x-default']).toBeTruthy();
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Open Graph locale is correctly formatted for all locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          (locale) => {
            const metadata = generateHomeMetadata(locale);
            const ogLocale = metadata.openGraph?.locale;
            
            expect(ogLocale).toBeTruthy();
            // OG locale should be in format xx_XX
            expect(ogLocale).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 8: Structured Data Presence**
   * **Validates: Requirements 4.7**
   * 
   * For any tool page, the rendered HTML SHALL contain valid JSON-LD script tags 
   * with @type "SoftwareApplication" and "FAQPage".
   */
  describe('Property 8: Structured Data Presence', () => {
    it('tool pages generate valid SoftwareApplication schema', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const schema = generateSoftwareApplicationSchema(tool, content, locale);
            const validation = validateSoftwareApplicationSchema(schema);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify @type is SoftwareApplication
            expect(schema['@type']).toBe('SoftwareApplication');
            expect(schema['@context']).toBe('https://schema.org');
            
            // Verify required fields
            expect(schema.name).toBeTruthy();
            expect(schema.description).toBeTruthy();
            expect(schema.url).toContain(tool.slug);
            expect(schema.url).toContain(locale);
            expect(schema.applicationCategory).toBe('UtilitiesApplication');
            expect(schema.operatingSystem).toBe('Web Browser');
            expect(schema.offers).toBeDefined();
            expect(schema.offers.price).toBe('0');
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool pages generate valid FAQPage schema when FAQs are present', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = createMockToolContent(tool);
            const schema = generateFAQPageSchema(content.faq);
            const validation = validateFAQPageSchema(schema);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify @type is FAQPage
            expect(schema['@type']).toBe('FAQPage');
            expect(schema['@context']).toBe('https://schema.org');
            
            // Verify mainEntity structure
            expect(schema.mainEntity).toBeDefined();
            expect(Array.isArray(schema.mainEntity)).toBe(true);
            expect(schema.mainEntity.length).toBe(content.faq.length);
            
            // Verify each FAQ item
            for (let i = 0; i < schema.mainEntity.length; i++) {
              const item = schema.mainEntity[i];
              expect(item['@type']).toBe('Question');
              expect(item.name).toBe(content.faq[i].question);
              expect(item.acceptedAnswer['@type']).toBe('Answer');
              expect(item.acceptedAnswer.text).toBe(content.faq[i].answer);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('generateToolPageStructuredData returns all required schemas', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const structuredData = generateToolPageStructuredData(tool, content, locale);
            
            // SoftwareApplication should always be present
            expect(structuredData.softwareApplication).toBeDefined();
            expect(structuredData.softwareApplication['@type']).toBe('SoftwareApplication');
            
            // FAQPage should be present when FAQs exist
            if (content.faq && content.faq.length > 0) {
              expect(structuredData.faqPage).toBeDefined();
              expect(structuredData.faqPage?.['@type']).toBe('FAQPage');
            }
            
            // Breadcrumb should be present
            expect(structuredData.breadcrumb).toBeDefined();
            expect(structuredData.breadcrumb['@type']).toBe('BreadcrumbList');
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('FAQPage schema handles empty FAQ array correctly', () => {
      const emptyFaqs: FAQ[] = [];
      const schema = generateFAQPageSchema(emptyFaqs);
      
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity).toHaveLength(0);
    });

    it('structured data URLs are correctly formatted with locale', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const schema = generateSoftwareApplicationSchema(tool, content, locale);
            
            // URL should contain the locale
            expect(schema.url).toContain(`/${locale}/`);
            
            // URL should contain the tool slug
            expect(schema.url).toContain(`/tools/${tool.slug}`);
            
            // URL should be a valid URL format
            expect(schema.url).toMatch(/^https?:\/\//);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * Additional SEO validation tests
   */
  describe('SEO Utility Functions', () => {
    it('getCanonicalUrl generates correct URLs', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom('/tools/merge-pdf', '/about', '/faq', ''),
          (locale, path) => {
            const url = getCanonicalUrl(locale, path);
            
            expect(url).toContain(locale);
            expect(url).toMatch(/^https?:\/\//);
            
            if (path) {
              expect(url).toContain(path);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('getAlternateUrls includes all locales', () => {
      const path = '/tools/merge-pdf';
      const alternates = getAlternateUrls(path);
      
      // All locales should be present
      for (const locale of locales) {
        expect(alternates[locale]).toBeTruthy();
        expect(alternates[locale]).toContain(locale);
        expect(alternates[locale]).toContain(path);
      }
      
      // x-default should be present
      expect(alternates['x-default']).toBeTruthy();
      expect(alternates['x-default']).toContain('en');
    });
  });
});
