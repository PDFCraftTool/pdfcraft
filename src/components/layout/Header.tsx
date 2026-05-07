'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, Menu, X, LogIn } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { RecentFilesDropdown } from '@/components/common/RecentFilesDropdown';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getToolContent } from '@/config/tool-content';
import { getAllTools } from '@/config/tools';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export interface HeaderProps {
  locale: Locale;
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ locale, showSearch = true }) => {
  const t = useTranslations('common');
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localizedTools, setLocalizedTools] = useState<Record<string, { title: string; description: string }>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Load localized tool content on mount
  useEffect(() => {
    const allTools = getAllTools();
    const contentMap: Record<string, { title: string; description: string }> = {};

    allTools.forEach(tool => {
      const content = getToolContent(locale, tool.id);
      if (content) {
        contentMap[tool.id] = {
          title: content.title,
          description: content.metaDescription
        };
      }
    });

    setLocalizedTools(contentMap);
  }, [locale]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchTools(searchQuery, localizedTools); // Pass localized content
      setSearchResults(results.slice(0, 8)); // Limit to 8 results
      setSelectedIndex(-1);
    } else {
      setSearchResults([]);
      setSelectedIndex(-1);
    }
  }, [searchQuery, localizedTools]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSearchOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        navigateToTool(searchResults[selectedIndex].tool.slug);
      } else if (searchResults.length > 0) {
        navigateToTool(searchResults[0].tool.slug);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [searchResults, selectedIndex]);

  const navigateToTool = useCallback((slug: string) => {
    router.push(`/${locale}/tools/${slug}`);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, [locale, router]);

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Get tool icon based on category
  const getToolIcon = (category: string) => {
    const icons: Record<string, string> = {
      'edit-annotate': '✏️',
      'convert-to-pdf': '📄',
      'convert-from-pdf': '🖼️',
      'organize-manage': '📁',
      'optimize-repair': '🔧',
      'secure-pdf': '🔒',
    };
    return icons[category] || '📄';
  };

  const navItems = [
    { href: `/${locale}/tools`, label: t('navigation.tools') },
    { href: `/${locale}/workflow`, label: t('navigation.workflow') || 'Workflow' },
    { href: `/${locale}/about`, label: 'Pricing' },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[hsl(var(--color-background))]/95 backdrop-blur-md border-b border-[hsl(var(--color-border))] shadow-sm'
          : 'bg-[hsl(var(--color-background))]/95 backdrop-blur-md border-b border-[hsl(var(--color-border))]'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-14 items-center gap-6">

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center gap-2 shrink-0 hover:opacity-85 transition-opacity"
            aria-label={`${t('brand')} - ${t('navigation.home')}`}
            data-testid="brand-name"
          >
            {/* Light: dark bg + white P mark */}
            <img
              src="/images/svg/aperture-mark-mono-black.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 block dark:hidden"
              draggable={false}
              aria-hidden="true"
            />
            {/* Dark: gradient blue bg + white P mark */}
            <img
              src="/images/svg/aperture-mark.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 hidden dark:block"
              draggable={false}
              aria-hidden="true"
            />
            <span className="text-base font-semibold tracking-tight text-[hsl(var(--color-foreground))]">
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-0.5 transition-all duration-200 ${
              isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] rounded-md transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex flex-1 items-center justify-end gap-2">

            {/* Search */}
            {showSearch && (
              <div className="relative" ref={searchContainerRef}>
                {isSearchOpen ? (
                  <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-3 md:top-1/2 md:-translate-y-1/2 z-50 md:origin-right">
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
                      <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={t('search.placeholder') || 'Search PDF tools...'}
                        className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] shadow-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))/0.4]"
                        aria-label="Search tools"
                        autoComplete="off"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSearchToggle}
                        aria-label="Close search"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                      >
                        <X className="h-3.5 w-3.5 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                      </Button>

                      {searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[hsl(var(--color-background))] border border-[hsl(var(--color-border))] rounded-xl shadow-xl overflow-hidden max-h-[60vh] overflow-y-auto">
                          <ul className="py-1.5" role="listbox">
                            {searchResults.map((result, index) => {
                              const localized = localizedTools[result.tool.id];
                              const toolName = localized?.title || result.tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                              const toolDescription = localized?.description || result.tool.features.slice(0, 3).join(' • ');
                              return (
                                <li key={result.tool.id}>
                                  <button
                                    onClick={() => navigateToTool(result.tool.slug)}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                                      index === selectedIndex
                                        ? 'bg-[hsl(var(--color-primary))/0.08] text-[hsl(var(--color-primary))]'
                                        : 'hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))]'
                                    }`}
                                    role="option"
                                    aria-selected={index === selectedIndex}
                                  >
                                    <span className="text-base">{getToolIcon(result.tool.category)}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-medium text-sm truncate">{toolName}</div>
                                      <div className="text-xs text-[hsl(var(--color-muted-foreground))] truncate">{toolDescription}</div>
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleSearchToggle}
                    aria-label="Open search"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-[hsl(var(--color-muted-foreground))] border border-[hsl(var(--color-border))] rounded-lg hover:bg-[hsl(var(--color-muted))] transition-colors"
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline text-xs">Search</span>
                    <span className="hidden lg:inline text-xs border border-[hsl(var(--color-border))] rounded px-1 py-0.5 font-mono">⌘K</span>
                  </button>
                )}
              </div>
            )}

            {/* Recent Files */}
            <RecentFilesDropdown
              locale={locale}
              translations={{
                title: t('recentFiles.title') || 'Recent Files',
                empty: t('recentFiles.empty') || 'No recent files',
                clearAll: t('recentFiles.clearAll') || 'Clear all',
                processedWith: t('recentFiles.processedWith') || 'Processed with',
              }}
            />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Selector slot */}
            <div id="language-selector-slot" />

            {/* Sign in — desktop only */}
            <Link
              href={`/${locale}/about`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] rounded-lg transition-colors"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Sign in
            </Link>

            {/* Get started CTA — desktop only */}
            <Link
              href={`/${locale}/tools`}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-lg transition-colors shadow-sm"
            >
              Get started
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-3 border-t border-[hsl(var(--color-border))]"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[hsl(var(--color-border))] mt-1">
                <Link
                  href={`/${locale}/tools`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get started →
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
