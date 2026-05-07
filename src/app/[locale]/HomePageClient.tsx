'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, Sparkles, Edit, FileImage, FolderOpen, Settings, ShieldCheck, Star, Workflow } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getPopularTools } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';
import { CATEGORY_INFO, type ToolCategory } from '@/types/tool';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

// ... (previous imports)

// ... (props interface)

// ... (previous imports)

// ... (props interface)

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
  const allTools = getAllTools();
  const popularTools = getPopularTools();

  // Feature highlights (same as before)
  const features = [
    {
      icon: ShieldCheck,
      titleKey: 'home.features.privacy.title',
      descriptionKey: 'home.features.privacy.description',
      color: 'text-green-500',
    },
    {
      icon: Zap,
      titleKey: 'home.features.free.title',
      descriptionKey: 'home.features.free.description',
      color: 'text-yellow-500',
    },
    {
      icon: Wrench,
      titleKey: 'home.features.powerful.title',
      descriptionKey: 'home.features.powerful.description',
      color: 'text-blue-500',
    },
  ];

  // Category icons mapping
  const categoryIcons: Record<ToolCategory, typeof Edit> = {
    'edit-annotate': Edit,
    'convert-to-pdf': FileImage,
    'convert-from-pdf': FileImage,
    'organize-manage': FolderOpen,
    'optimize-repair': Settings,
    'secure-pdf': ShieldCheck,
  };

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  // Category sections to display
  const categoryOrder: ToolCategory[] = [
    'edit-annotate',
    'convert-to-pdf',
    'convert-from-pdf',
    'organize-manage',
    'optimize-repair',
    'secure-pdf',
  ];

  // Quick-action chips matching the Figma design
  const quickActions = [
    { label: 'Merge PDF', href: `/${locale}/tools/merge` },
    { label: 'Compress', href: `/${locale}/tools/compress` },
    { label: 'PDF to Word', href: `/${locale}/tools/pdf-to-docx` },
    { label: 'Sign', href: `/${locale}/tools/sign` },
    { label: 'Edit', href: `/${locale}/tools/edit-pdf` },
  ];

  // Trust badges shown below CTA row
  const trustBadges = [
    { icon: '🔒', label: 'Browser-processed & private' },
    { icon: '⬆️', label: 'No file uploads' },
    { icon: '🛠️', label: `${allTools.length}+ tools` },
    { icon: '✓', label: 'Free forever' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1" tabIndex={-1}>

        {/* Hero Section */}
        <section className="pt-20 pb-16 lg:pt-24 lg:pb-20" aria-labelledby="hero-title">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto text-center">

              {/* Hero heading */}
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight mb-4">
                <span className="text-[hsl(var(--color-foreground))]">Every PDF tool you need.</span>
                <br />
                <span className="text-[hsl(var(--color-primary))]">Fast, private, and simple.</span>
              </h1>

              <p className="text-base md:text-lg text-[hsl(var(--color-muted-foreground))] mb-8 max-w-xl mx-auto leading-relaxed">
                Merge, compress, convert, edit, sign, and protect PDFs directly in your browser. No uploads, no tracking.
              </p>

              {/* Search bar */}
              <div className="relative max-w-md mx-auto mb-5">
                <input
                  type="search"
                  placeholder="Search PDF tools..."
                  readOnly
                  onClick={() => {
                    /* header search will open on Cmd+K */
                  }}
                  className="w-full pl-10 pr-24 py-3 text-sm rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))/0.3] cursor-pointer"
                  aria-label="Search PDF tools"
                />
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
                <Link
                  href={`/${locale}/tools`}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-lg transition-colors"
                >
                  Search
                </Link>
              </div>

              {/* Quick-action chips */}
              <div className="flex flex-wrap justify-center gap-2 mb-8" role="list" aria-label="Quick actions">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    role="listitem"
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] hover:border-[hsl(var(--color-primary))] hover:text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary)/0.05)] transition-all"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                <Link
                  href={`/${locale}/tools`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                >
                  Choose a PDF tool
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={`/${locale}/workflow`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[hsl(var(--color-foreground))] border border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary))] hover:text-[hsl(var(--color-primary))] rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Workflow className="h-4 w-4" aria-hidden="true" />
                  Try Workflow Builder
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center items-center gap-4" aria-label="Trust indicators">
                {trustBadges.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--color-muted-foreground))]">
                    <span aria-hidden="true">{badge.icon}</span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-14 border-t border-[hsl(var(--color-border))]" aria-labelledby="popular-tools-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-1">
                  Most used by everyone
                </p>
                <h2 id="popular-tools-heading" className="text-2xl font-bold text-[hsl(var(--color-foreground))]">
                  Popular PDF tools
                </h2>
              </div>
              <Link href={`/${locale}/tools`} className="text-sm font-medium text-[hsl(var(--color-primary))] hover:underline">
                See all {allTools.length}+ →
              </Link>
            </div>
            <ToolGrid
              tools={popularTools}
              locale={locale}
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        {/* Category Hub Section */}
        <section className="py-14 bg-[hsl(var(--color-muted)/0.4)] border-t border-[hsl(var(--color-border))]" aria-labelledby="categories-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-1">
                Organised by category
              </p>
              <h2 id="categories-heading" className="text-2xl font-bold text-[hsl(var(--color-foreground))]">
                All your PDF needs, organized
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryOrder.map((category) => {
                const categoryTools = getToolsByCategory(category);
                const Icon = categoryIcons[category];
                const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);
                const sampleTools = categoryTools.slice(0, 4);

                return (
                  <Link
                    key={category}
                    href={`/${locale}/tools?category=${category}`}
                    className="group block"
                  >
                    <Card className="p-5 h-full bg-[hsl(var(--color-card))] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center">
                          <Icon className="h-4.5 w-4.5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-sm text-[hsl(var(--color-foreground))] group-hover:text-[hsl(var(--color-primary))] transition-colors">
                          {categoryName}
                        </h3>
                        <ArrowRight className="h-3.5 w-3.5 ml-auto text-[hsl(var(--color-muted-foreground))] group-hover:text-[hsl(var(--color-primary))] transition-all group-hover:translate-x-0.5" aria-hidden="true" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sampleTools.map((tool) => {
                          const toolName = localizedToolContent?.[tool.id]?.title || tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                          return (
                            <span
                              key={tool.id}
                              className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]"
                            >
                              {toolName}
                            </span>
                          );
                        })}
                        {categoryTools.length > 4 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]">
                            +{categoryTools.length - 4} more
                          </span>
                        )}
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacy CTA Section */}
        <section className="py-14 border-t border-[hsl(var(--color-border))]" aria-labelledby="privacy-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-primary))] border border-[hsl(var(--color-primary)/0.15)] mb-4">
                  Privacy-first design
                </span>
                <h2 id="privacy-heading" className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  Your PDFs never leave your device.
                </h2>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed mb-6">
                  Every tool runs entirely in your browser using WebAssembly. Files are processed locally — no uploads, no tracking, no cloud. You own your documents, just like it should be.
                </p>
                <ul className="flex flex-col gap-2.5" aria-label="Privacy features">
                  {[
                    'Zero file uploads — everything stays on your device',
                    'Open-source PDF engine, audited regularly',
                    'WASM & native-binaries run all the time',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[hsl(var(--color-foreground))]">
                      <span className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center" aria-hidden="true">
                        <svg className="h-2.5 w-2.5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-4">Recent activity</p>
                <div className="flex flex-col gap-2.5">
                  {popularTools.slice(0, 3).map((tool) => {
                    const toolName = localizedToolContent?.[tool.id]?.title || tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                    return (
                      <div key={tool.id} className="flex items-center gap-3 p-2.5 rounded-lg bg-[hsl(var(--color-muted)/0.5)]">
                        <div className="h-8 w-8 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                          <Lock className="h-3.5 w-3.5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[hsl(var(--color-foreground))]">{toolName}</p>
                          <p className="text-xs text-[hsl(var(--color-muted-foreground))]">Processed locally</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow CTA Section */}
        <section className="py-14 bg-[hsl(var(--color-muted)/0.4)] border-t border-[hsl(var(--color-border))]" aria-labelledby="workflow-cta-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-primary))] border border-[hsl(var(--color-primary)/0.15)] mb-4">
                  Beta
                </span>
                <h2 id="workflow-cta-heading" className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                  Chain PDF tools into one click.
                </h2>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed mb-6">
                  Build reusable PDF pipelines. Drag in a few steps — merge, compress, watermark, encrypt — all in one drag-and-drop pipeline that runs locally.
                </p>
                <Link
                  href={`/${locale}/workflow`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <Workflow className="h-4 w-4" aria-hidden="true" />
                  Try Workflow Builder
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['Merge', 'Compress', 'Watermark', 'Encrypt'].map((tool) => (
                  <div
                    key={tool}
                    className="px-4 py-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-sm font-medium text-[hsl(var(--color-foreground))] shadow-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer locale={locale} />
    </div>
  );
}
