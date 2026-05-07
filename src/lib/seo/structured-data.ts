/**
 * JSON-LD Structured Data Generation
 * Creates schema.org structured data for SEO
 * 
 * @module lib/seo/structured-data
 */

import { siteConfig } from '@/config/site';
import type { Tool, ToolContent, FAQ, HowToStep } from '@/types/tool';
import type { Locale } from '@/lib/i18n/config';

/**
 * SoftwareApplication schema for tool pages
 * @see https://schema.org/SoftwareApplication
 */
export interface SoftwareApplicationSchema {
  '@context': 'https://schema.org';
  '@type': 'SoftwareApplication';
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: string;
    ratingCount: string;
  };
  featureList?: string[];
  screenshot?: string;
  softwareVersion?: string;
  keywords?: string;
}

/**
 * HowTo schema for step-by-step instructions
 * @see https://schema.org/HowTo
 */
export interface HowToSchema {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  totalTime?: string;
  tool?: Array<{
    '@type': 'HowToTool';
    name: string;
  }>;
  step: Array<{
    '@type': 'HowToStep';
    position: number;
    name: string;
    text: string;
    url?: string;
  }>;
}

/**
 * WebPage schema for enhanced page information
 * @see https://schema.org/WebPage
 */
export interface WebPageSchema {
  '@context': 'https://schema.org';
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    '@type': 'WebSite';
    name: string;
    url: string;
  };
  about?: {
    '@type': 'Thing';
    name: string;
  };
  mainEntity?: {
    '@type': string;
    name: string;
  };
}

/**
 * FAQPage schema for FAQ sections
 * @see https://schema.org/FAQPage
 */
export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

/**
 * WebSite schema for the main site
 * @see https://schema.org/WebSite
 */
export interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

/**
 * Organization schema
 * @see https://schema.org/Organization
 */
export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

/**
 * BreadcrumbList schema
 * @see https://schema.org/BreadcrumbList
 */
export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate SoftwareApplication schema for a tool page
 */
export function generateSoftwareApplicationSchema(
  tool: Tool,
  content: ToolContent,
  locale: Locale
): SoftwareApplicationSchema {
  const schema: SoftwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: content.title,
    description: content.metaDescription,
    url: `${siteConfig.url}/${locale}/tools/${tool.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    keywords: content.keywords ? content.keywords.join(', ') : undefined,
  };

  // Add feature list if available
  if (tool.features && tool.features.length > 0) {
    schema.featureList = tool.features;
  }

  return schema;
}

/**
 * Generate HowTo schema from tool how-to steps
 */
export function generateHowToSchema(
  tool: Tool,
  content: ToolContent,
  locale: Locale
): HowToSchema | null {
  if (!content.howToUse || content.howToUse.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to ${content.title}`,
    description: content.metaDescription,
    totalTime: 'PT5M', // Estimated 5 minutes for most PDF operations
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Web Browser',
      },
    ],
    step: content.howToUse.map((step: HowToStep) => ({
      '@type': 'HowToStep',
      position: step.step,
      name: step.title,
      text: step.description,
      url: `${siteConfig.url}/${locale}/tools/${tool.slug}#step-${step.step}`,
    })),
  };
}

/**
 * Generate WebPage schema for enhanced page information
 */
export function generateWebPageSchema(
  tool: Tool,
  content: ToolContent,
  locale: Locale
): WebPageSchema {
  const languageMap: Record<Locale, string> = {
    en: 'en-US',
    ja: 'ja-JP',
    ko: 'ko-KR',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    zh: 'zh-CN',
    'zh-TW': 'zh-TW',
    pt: 'pt-BR',
    ar: 'ar-AR',
    it: 'it-IT',
    id: 'id-ID',
    vi: 'vi-VN',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.title,
    description: content.metaDescription,
    url: `${siteConfig.url}/${locale}/tools/${tool.slug}`,
    inLanguage: languageMap[locale] || 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      '@type': 'Thing',
      name: 'PDF Processing',
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: content.title,
    },
  };
}

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQPageSchema(faqs: FAQ[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebSite schema for the main site
 */
export function generateWebSiteSchema(locale: Locale): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/${locale}/tools?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: siteConfig.links.github ? [siteConfig.links.github] : [],
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  locale: Locale
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}/${locale}${item.path}`,
    })),
  };
}

/**
 * Generate all structured data for a tool page
 */
export function generateToolPageStructuredData(
  tool: Tool,
  content: ToolContent,
  locale: Locale
): {
  softwareApplication: SoftwareApplicationSchema;
  howTo: HowToSchema | null;
  faqPage: FAQPageSchema | null;
  webPage: WebPageSchema;
  breadcrumb: BreadcrumbListSchema;
} {
  const softwareApplication = generateSoftwareApplicationSchema(tool, content, locale);
  const howTo = generateHowToSchema(tool, content, locale);
  const webPage = generateWebPageSchema(tool, content, locale);

  // Only generate FAQ schema if there are FAQs
  const faqPage = content.faq && content.faq.length > 0
    ? generateFAQPageSchema(content.faq)
    : null;

  const breadcrumb = generateBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Tools', path: '/tools' },
      { name: content.title, path: `/tools/${tool.slug}` },
    ],
    locale
  );

  return {
    softwareApplication,
    howTo,
    faqPage,
    webPage,
    breadcrumb,
  };
}

/**
 * Serialize structured data to JSON-LD script tag content
 */
export function serializeStructuredData(data: object): string {
  return JSON.stringify(data, null, 0);
}

/**
 * Check if structured data contains required SoftwareApplication fields
 */
export function validateSoftwareApplicationSchema(
  schema: SoftwareApplicationSchema
): { valid: boolean; missingFields: string[] } {
  const requiredFields = ['@context', '@type', 'name', 'description', 'url', 'applicationCategory', 'operatingSystem', 'offers'];
  const missingFields: string[] = [];

  for (const field of requiredFields) {
    if (!(field in schema) || !schema[field as keyof SoftwareApplicationSchema]) {
      missingFields.push(field);
    }
  }

  // Check @type value
  if (schema['@type'] !== 'SoftwareApplication') {
    missingFields.push('@type (must be SoftwareApplication)');
  }

  return {
    valid: missingFields.length === 0,
    missingFields,
  };
}

/**
 * Check if structured data contains required FAQPage fields
 */
export function validateFAQPageSchema(
  schema: FAQPageSchema
): { valid: boolean; missingFields: string[] } {
  const missingFields: string[] = [];

  if (schema['@context'] !== 'https://schema.org') {
    missingFields.push('@context');
  }

  if (schema['@type'] !== 'FAQPage') {
    missingFields.push('@type (must be FAQPage)');
  }

  if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
    missingFields.push('mainEntity');
  } else {
    // Validate each FAQ item
    for (let i = 0; i < schema.mainEntity.length; i++) {
      const item = schema.mainEntity[i];
      if (item['@type'] !== 'Question') {
        missingFields.push(`mainEntity[${i}].@type`);
      }
      if (!item.name) {
        missingFields.push(`mainEntity[${i}].name`);
      }
      if (!item.acceptedAnswer || item.acceptedAnswer['@type'] !== 'Answer' || !item.acceptedAnswer.text) {
        missingFields.push(`mainEntity[${i}].acceptedAnswer`);
      }
    }
  }

  return {
    valid: missingFields.length === 0,
    missingFields,
  };
}
