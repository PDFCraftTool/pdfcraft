'use client';

import { useTranslations } from 'next-intl';
import { Tool, ToolContent, HowToStep, UseCase, FAQ, ToolCategory } from '@/types/tool';
import { Card } from '@/components/ui/Card';
import { getToolById } from '@/config/tools';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { getToolIcon } from '@/config/icons';
import Link from 'next/link';
import { ChevronRight, Bookmark } from 'lucide-react';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { useMemo } from 'react';
import { sanitizeHtml } from '@/lib/utils/html-sanitizer';

export interface ToolPageProps {
  /** Tool data */
  tool: Tool;
  /** Tool content for SEO and documentation */
  content: ToolContent;
  /** Current locale */
  locale: string;
  /** Children for the tool interface area */
  children?: React.ReactNode;
  /** Localized content for related tools */
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
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
 * ToolPage layout component provides the structure for individual tool pages.
 * Includes tool interface, description, how-to, use cases, FAQ, and related tools.
 */
export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  // Get related tools data
  const relatedTools = tool.relatedTools
    .map(id => getToolById(id))
    .filter((t): t is Tool => t !== undefined);

  const t = useTranslations();

  // Get tool display name
  const toolDisplayName = content.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const IconComponent = getToolIcon(tool.icon);

  return (
    <ToolProvider toolSlug={tool.slug} toolName={toolDisplayName}>
      <div className="min-h-screen flex flex-col" data-testid="tool-page">
        <Header locale={locale as Locale} />

        <main id="main-content" className="flex-1 pt-14" tabIndex={-1}>
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-6 pb-16">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-[hsl(var(--color-muted-foreground))] mb-6">
              <Link href={`/${locale}/tools`} className="hover:text-[hsl(var(--color-primary))] transition-colors">
                Tools
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <Link
                href={`/${locale}/tools?category=${tool.category}`}
                className="hover:text-[hsl(var(--color-primary))] transition-colors"
              >
                {t(`home.categories.${categoryTranslationKeys[tool.category]}`)}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="font-medium text-[hsl(var(--color-foreground))] truncate" aria-current="page">
                {content.title || toolDisplayName}
              </span>
            </nav>

            {/* Tool heading row */}
            <div className="flex items-start justify-between gap-4 mb-2" data-testid="tool-page-header">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <IconComponent className="w-6 h-6 text-[hsl(var(--color-primary))]" />
                </div>
                <div>
                  <h1
                    className="text-2xl font-bold text-[hsl(var(--color-foreground))]"
                    data-testid="tool-page-title"
                  >
                    {content.title || toolDisplayName}
                  </h1>
                </div>
              </div>
              <button
                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors shrink-0 mt-1"
                onClick={() => {/* handled by FavoriteButton below */}}
                aria-label="Save tool"
              >
                <Bookmark className="w-4 h-4" aria-hidden="true" />
                Save tool
              </button>
            </div>

            {/* Description + trust badges */}
            <p
              className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed mb-4 max-w-2xl"
              data-testid="tool-page-subtitle"
            >
              {content.metaDescription}
            </p>
            <TrustBadges className="mb-8" />

            {/* Two-column layout: tool interface + (implicit) settings panel inside children */}
            <section
              data-testid="tool-page-interface"
              aria-label="Tool interface"
            >
              {children}
            </section>

            {/* SEO content below the fold */}
            <DescriptionSection description={content.description} />
            <HowToUseSection steps={content.howToUse} />
            <UseCasesSection useCases={content.useCases} />
            <FAQSection faq={content.faq} />

            {/* Related Tools */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale}
              localizedRelatedTools={localizedRelatedTools}
            />
          </div>
        </main>

        <Footer locale={locale as Locale} />
      </div>
    </ToolProvider>
  );
}

/* ToolHeader is now inlined into ToolPage above; kept for reference only */

/**
 * Description section with detailed tool information
 */
interface DescriptionSectionProps {
  description: string;
}

function DescriptionSection({ description }: DescriptionSectionProps) {
  const t = useTranslations();
  const sanitizedDescription = useMemo(() => sanitizeHtml(description), [description]);
  if (!description) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-description"
      aria-labelledby="description-heading"
    >
      <h2
        id="description-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.about')}
      </h2>
      <Card variant="outlined" size="lg" className="glass-card">
        <div
          className="prose prose-sm max-w-none text-[hsl(var(--color-foreground))/0.8]"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </Card>
    </section>
  );
}

/**
 * How to use section with numbered steps
 */
interface HowToUseSectionProps {
  steps: HowToStep[];
}

function HowToUseSection({ steps }: HowToUseSectionProps) {
  const t = useTranslations();
  if (!steps || steps.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-how-to-use"
      aria-labelledby="how-to-use-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <h2
        id="how-to-use-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
        itemProp="name"
      >
        {t('tools.howToUse')}
      </h2>
      <ol className="grid gap-6 md:grid-cols-3" data-testid="how-to-use-steps">
        {steps.map((step) => (
          <li
            key={step.step}
            className="flex flex-col h-full"
            data-testid={`how-to-step-${step.step}`}
            id={`step-${step.step}`}
            itemScope
            itemProp="step"
            itemType="https://schema.org/HowToStep"
          >
            <meta itemProp="position" content={String(step.step)} />
            <Card className="flex-1 h-full glass-card border-[hsl(var(--color-border))/0.6] hover:border-[hsl(var(--color-primary)/0.3)] transition-colors">
              <div
                className="w-10 h-10 rounded-xl bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] flex items-center justify-center font-bold text-lg mb-4"
                aria-hidden="true"
              >
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2" itemProp="name">
                {step.title}
              </h3>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]" itemProp="text">
                {step.description}
              </p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

/**
 * Use cases section with practical scenarios
 */
interface UseCasesSectionProps {
  useCases: UseCase[];
}

function UseCasesSection({ useCases }: UseCasesSectionProps) {
  const t = useTranslations();
  if (!useCases || useCases.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-use-cases"
      aria-labelledby="use-cases-heading"
    >
      <h2
        id="use-cases-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.useCases')}
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="use-cases-grid"
      >
        {useCases.map((useCase, index) => (
          <Card
            key={index}
            variant="default"
            className="glass-card hover:shadow-lg transition-all duration-300"
            data-testid={`use-case-${index}`}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--color-secondary)/0.5)] flex items-center justify-center"
                aria-hidden="true"
              >
                {/* We can map icons here too if needed, for now using a generic check */}
                <div className="w-6 h-6 text-[hsl(var(--color-secondary-foreground))] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">
                  {useCase.title}
                </h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {useCase.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/**
 * FAQ section with common questions and answers
 */
interface FAQSectionProps {
  faq: FAQ[];
}

function FAQSection({ faq }: FAQSectionProps) {
  const t = useTranslations();
  if (!faq || faq.length === 0) return null;

  return (
    <section
      className="mt-10"
      data-testid="tool-page-faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="faq-heading"
        className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        {t('tools.faq')}
      </h2>
      <div className="space-y-4" data-testid="faq-list">
        {faq.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            className="glass-card"
            data-testid={`faq-item-${index}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 className="font-semibold text-[hsl(var(--color-foreground))]" itemProp="name">
              {item.question}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]" itemProp="text">
                {item.answer}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/**
 * Related tools section
 */
interface RelatedToolsSectionProps {
  tools: Tool[];
  locale: string;
  localizedRelatedTools: Record<string, { title: string; description: string }>;
}

function RelatedToolsSection({ tools, locale, localizedRelatedTools }: RelatedToolsSectionProps) {
  const t = useTranslations();
  if (!tools || tools.length === 0) return null;

  return (
    <section
      className="mt-12 pt-8 border-t border-[hsl(var(--color-border))]"
      data-testid="tool-page-related-tools"
      aria-labelledby="related-tools-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-1">
        Related PDF tools
      </p>
      <h2
        id="related-tools-heading"
        className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-6"
      >
        What&apos;s next?
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-testid="related-tools-grid"
      >
        {tools.map(tool => {
          const localized = localizedRelatedTools[tool.id];
          const toolName = localized?.title || tool.id
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          const toolDesc = localized?.description || '';

          const IconComponent = getToolIcon(tool.icon);

          return (
            <a
              key={tool.id}
              href={`/${locale}/tools/${tool.slug}`}
              className="block group"
            >
              <Card className="h-full bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="p-4 flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-5 h-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-[hsl(var(--color-foreground))] block group-hover:text-[hsl(var(--color-primary))] transition-colors">
                      {toolName}
                    </span>
                    {toolDesc && (
                      <span className="text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-1">
                        {toolDesc}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ToolPage;
