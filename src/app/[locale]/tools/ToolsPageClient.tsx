'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Search, X, Filter, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { ToolCard } from '@/components/tools/ToolCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getToolById } from '@/config/tools';
import { toolMatchesQuery } from '@/lib/utils/search';
import { type Locale } from '@/lib/i18n/config';
import { CATEGORY_INFO, type ToolCategory } from '@/types/tool';
import { useFavorites } from '@/hooks/useFavorites';

type CategoryFilter = ToolCategory | 'all' | 'favorites';

interface ToolsPageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function ToolsPageClient({ locale, localizedToolContent }: ToolsPageClientProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const allTools = getAllTools();
  const { favorites, isLoaded: favoritesLoaded, favoritesCount } = useFavorites();

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  // Read initial values from URL search params (client-side)
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    (initialCategory as ToolCategory) || 'all'
  );

  // Sync state with URL params when they change
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const query = searchParams.get('q') || '';
    setSelectedCategory(category as CategoryFilter);
    setSearchQuery(query);
  }, [searchParams]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let tools = allTools;

    // Filter by category
    if (selectedCategory === 'favorites') {
      // Filter to only show favorite tools
      tools = favorites
        .map(id => getToolById(id))
        .filter((tool): tool is NonNullable<typeof tool> => tool !== undefined);
    } else if (selectedCategory !== 'all') {
      tools = getToolsByCategory(selectedCategory as ToolCategory);
    }

    // Filter by search query (supports current language search)
    if (searchQuery.trim()) {
      tools = tools.filter(tool =>
        toolMatchesQuery(tool, searchQuery, localizedToolContent?.[tool.id])
      );
    }

    return tools;
  }, [allTools, selectedCategory, searchQuery, favorites]);

  // Category options
  const categories: { value: CategoryFilter; label: string; icon?: React.ReactNode }[] = [
    { value: 'all', label: t('toolsPage.allTools') },
    {
      value: 'favorites',
      label: t('tools.favorite.title'),
      icon: <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
    },
    { value: 'edit-annotate', label: t('home.categories.editAnnotate') },
    { value: 'convert-to-pdf', label: t('home.categories.convertToPdf') },
    { value: 'convert-from-pdf', label: t('home.categories.convertFromPdf') },
    { value: 'organize-manage', label: t('home.categories.organizeManage') },
    { value: 'optimize-repair', label: t('home.categories.optimizeRepair') },
    { value: 'secure-pdf', label: t('home.categories.securePdf') },
  ];

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  const sidebarCategories = categories.filter(c => c.value !== 'favorites');

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main className="flex-1 pt-14">
        {/* Page Header */}
        <div className="border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-4 lg:px-6 pt-10 pb-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-primary))] mb-1">All PDF tools</p>
            <h1 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-1">The full PDF toolkit</h1>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-6">
              {allTools.length}+ tools to organize, edit, convert, optimize and secure your PDFs — all running locally in your browser.
            </p>

            {/* Search + filter bar */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${allTools.length}+ PDF tools...`}
                  className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))/0.3]"
                  aria-label="Search tools"
                />
                {searchQuery && (
                  <button onClick={handleClearSearch} className="absolute right-2.5 top-1/2 -translate-y-1/2" aria-label="Clear search">
                    <X className="h-3.5 w-3.5 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                  </button>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-1.5"
                aria-expanded={showFilters}
              >
                <Filter className="h-3.5 w-3.5" aria-hidden="true" />
                Filters
              </Button>
              <span className="text-xs text-[hsl(var(--color-muted-foreground))] ml-auto">
                {filteredTools.length} tools
              </span>
            </div>

            {/* Category tabs */}
            <div className="flex gap-0 mt-4 -mb-px overflow-x-auto scrollbar-hide" role="tablist" aria-label="Filter by category">
              {categories.map((cat) => {
                const count = cat.value === 'all'
                  ? allTools.length
                  : cat.value === 'favorites'
                  ? favoritesCount
                  : getToolsByCategory(cat.value as ToolCategory).length;
                return (
                  <button
                    key={cat.value}
                    role="tab"
                    aria-selected={selectedCategory === cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      selectedCategory === cat.value
                        ? 'border-[hsl(var(--color-primary))] text-[hsl(var(--color-primary))]'
                        : 'border-transparent text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:border-[hsl(var(--color-border))]'
                    }`}
                  >
                    {cat.icon && <span className="mr-1">{cat.icon}</span>}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content area: sidebar + grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="flex gap-8">

            {/* Left Sidebar — desktop only */}
            <aside className="hidden lg:flex flex-col gap-6 w-52 shrink-0" aria-label="Category sidebar">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-3">Categories</p>
                <ul className="flex flex-col gap-0.5">
                  {sidebarCategories.map((cat) => {
                    const count = cat.value === 'all'
                      ? allTools.length
                      : getToolsByCategory(cat.value as ToolCategory).length;
                    return (
                      <li key={cat.value}>
                        <button
                          onClick={() => setSelectedCategory(cat.value)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === cat.value
                              ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-medium'
                              : 'text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))]'
                          }`}
                          aria-pressed={selectedCategory === cat.value}
                        >
                          {cat.label}
                          <span className="text-xs opacity-60">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Filter checkboxes */}
              {showFilters && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--color-muted-foreground))] mb-3">Filters</p>
                  <ul className="flex flex-col gap-2">
                    {['Popular', 'New', 'Free', 'Premium'].map((label) => (
                      <li key={label} className="flex items-center gap-2">
                        <input type="checkbox" id={`filter-${label}`} className="accent-[hsl(var(--color-primary))]" />
                        <label htmlFor={`filter-${label}`} className="text-sm text-[hsl(var(--color-foreground))]">{label}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            {/* Tool Grid */}
            <div className="flex-1 min-w-0">
              {filteredTools.length > 0 ? (
                <ToolGrid
                  tools={filteredTools}
                  locale={locale}
                  localizedToolContent={localizedToolContent}
                  showCategoryHeaders={selectedCategory === 'all' && !searchQuery}
                />
              ) : selectedCategory === 'favorites' ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Star className="h-12 w-12 text-amber-400 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">{t('tools.favorite.empty')}</h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-6 max-w-xs">{t('tools.favorite.hint')}</p>
                  <Button variant="outline" onClick={() => setSelectedCategory('all')}>Browse all tools</Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Search className="h-12 w-12 text-[hsl(var(--color-muted-foreground))] mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">{t('toolsPage.noToolsFound')}</h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-6">{t('tools.search.noResults', { query: searchQuery })}</p>
                  <Button variant="outline" onClick={handleClearFilters}>Clear filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
