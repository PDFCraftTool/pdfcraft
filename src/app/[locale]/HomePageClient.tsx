'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, Sparkles, Edit, FileImage, FolderOpen, Settings, ShieldCheck, Star, LayoutGrid } from 'lucide-react';
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

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28"
          aria-labelledby="hero-title"
        >
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--color-primary)/0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[hsl(var(--color-accent)/0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[hsl(var(--color-secondary)/0.3)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Brand Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[hsl(var(--color-background)/0.8)] border border-[hsl(var(--color-primary)/0.2)] shadow-sm backdrop-blur-md transition-all hover:bg-[hsl(var(--color-background))]">
                <Sparkles className="h-4 w-4 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-sm font-medium text-[hsl(var(--color-primary))]">
                  {t('common.brand')}
                </span>
              </div>

              {/* Hero Title */}
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-[hsl(var(--color-foreground))]">{t('home.hero.title')} </span>
                <span className="text-gradient block mt-1 pb-2">{t('home.hero.highlight')}</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="text-lg text-[hsl(var(--color-muted-foreground))] mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link href={`/${locale}/studio`}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="h-11 px-7 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 gap-2"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    <span>{locale === 'zh' ? '进入 Studio 工作台' : 'Open PDF Studio'}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 text-white leading-none">
                      NEW
                    </span>
                  </Button>
                </Link>
                <Link href={`/${locale}/tools`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-11 px-6 text-base transition-all hover:-translate-y-0.5 gap-2 bg-[hsl(var(--color-card)/0.6)] backdrop-blur-sm"
                  >
                    <LayoutGrid className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                    <span>{t('home.hero.cta')}</span>
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] bg-[hsl(var(--color-background)/0.5)] px-4 py-2 rounded-full border border-[hsl(var(--color-border))] backdrop-blur-sm">
                  <Lock className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>{t('common.footer.privacyBadge')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 relative z-20" aria-label="Features">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 text-center glass-card border-0 hover:-translate-y-1 transition-transform duration-300" hover={false}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] mb-4 text-[hsl(var(--color-primary))]">
                      <Icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.5)]" aria-labelledby="popular-tools-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[hsl(var(--color-primary)/0.1)] border border-[hsl(var(--color-primary)/0.2)]">
                <Star className="h-4 w-4 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-sm font-medium text-[hsl(var(--color-primary))]">
                  {t('home.popularTools.badge')}
                </span>
              </div>
              <h2 id="popular-tools-heading" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                {t('home.popularTools.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto text-base">
                {t('home.popularTools.description')}
              </p>
            </div>
            <ToolGrid
              tools={popularTools}
              locale={locale}
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        <section className="py-16" aria-labelledby="featured-tools-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div className="max-w-2xl">
                <h2 id="featured-tools-heading" className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                  {t(`home.categories.${categoryTranslationKeys['organize-manage']}`)}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] text-base">
                  {t(`home.categoriesDescription.${categoryTranslationKeys['organize-manage']}`)}
                </p>
              </div>
              <Link href={`/${locale}/tools`}>
                <Button variant="outline" size="sm" className="group">
                  {t('common.navigation.tools')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
            <ToolGrid
              tools={getToolsByCategory('organize-manage').slice(0, 8)}
              locale={locale}
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.3)]" aria-labelledby="categories-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="categories-heading" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                {t('home.categoriesSection.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto text-base">
                {t('home.categoriesSection.description', { count: allTools.length })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryOrder.map((category) => {
                const categoryTools = getToolsByCategory(category);
                const Icon = categoryIcons[category];
                const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);
                const categoryDescription = t(`home.categoriesDescription.${categoryTranslationKeys[category]}`);

                return (
                  <Link
                    key={category}
                    href={`/${locale}/tools?category=${category}`}
                    className="group"
                  >
                    <Card className="p-5 h-full glass-card hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-[hsl(var(--color-border)/0.6)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base text-[hsl(var(--color-foreground))] mb-1 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                            {categoryName}
                          </h3>
                          <p className="text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-2 mb-2">
                            {categoryDescription}
                          </p>
                          <div className="flex items-center text-xs font-medium text-[hsl(var(--color-primary))]">
                            <span className="bg-[hsl(var(--color-primary)/0.1)] px-2 py-0.5 rounded-md">
                              {t('home.categoriesSection.toolsCount', { count: categoryTools.length })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" aria-label="Statistics">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[hsl(var(--color-border))]">
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  {allTools.length}+
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.pdfTools')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  100%
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.freeToUse')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  9
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.languages')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  0
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.filesUploaded')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
