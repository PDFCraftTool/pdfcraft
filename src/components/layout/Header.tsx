'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, Menu, X, Command, Github } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { RecentFilesDropdown } from '@/components/common/RecentFilesDropdown';
import { searchTools, SearchResult } from '@/lib/utils/search';
import { getToolContent } from '@/config/tool-content';
import { getAllTools } from '@/config/tools';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { UpdateCheckButton } from '@/components/common/UpdateCheckButton';

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
    { href: `/${locale}`, label: t('navigation.home') },
    { href: `/${locale}/studio`, label: 'Studio' },
    { href: `/${locale}/tools`, label: t('navigation.tools') },
    { href: `/${locale}/workflow`, label: t('navigation.workflow') || 'Workflow' },
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-[hsl(var(--color-background))]/80 backdrop-blur-md border-b border-[hsl(var(--color-border))/0.5] shadow-sm'
        : 'bg-transparent border-transparent'
        }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex flex-1 items-center gap-2">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-2.5 text-xl font-bold text-[hsl(var(--color-foreground))] hover:opacity-90 transition-opacity"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-accent))] shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="text-xl tracking-tight" data-testid="brand-name">
                {t('brand')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full border border-[hsl(var(--color-border))/0.4] bg-[hsl(var(--color-background))/0.5] p-1.5 backdrop-blur-sm shadow-sm transition-all duration-300 ${isSearchOpen ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0'
              }`}
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isStudio = item.href.endsWith('/studio');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all inline-flex items-center gap-1.5 ${
                    isStudio
                      ? 'text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary)/0.1)]'
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))/0.5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isStudio && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[hsl(var(--color-primary))] text-white leading-none">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {/* Search */}
            {showSearch && (
              <div className="relative" ref={searchContainerRef}>
                {isSearchOpen ? (
                  <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-[22px] md:top-1/2 md:-translate-y-1/2 z-50 md:origin-right animate-in fade-in slide-in-from-right-4 duration-200">
                    <div className="relative w-full md:w-96">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
                      <input
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={t('search.placeholder') || 'Search tools...'}
                        className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] shadow-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                        aria-label="Search tools"
                        autoComplete="off"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSearchToggle}
                        aria-label="Close search"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                      >
                        <X className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                      </Button>

                      {/* Search Results Dropdown */}
                      {searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[hsl(var(--color-background))] border border-[hsl(var(--color-border))] rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[60vh] overflow-y-auto">
                          <ul className="py-2" role="listbox">
                            {searchResults.map((result, index) => {
                              const localized = localizedTools[result.tool.id];
                              const toolName = localized?.title || result.tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                              const toolDescription = localized?.description || result.tool.features.slice(0, 3).join(' • ');

                              return (
                                <li key={result.tool.id}>
                                  <button
                                    onClick={() => navigateToTool(result.tool.slug)}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    className={`
                                      w-full px-4 py-2.5 text-left flex items-center gap-3 transition-colors
                                      ${index === selectedIndex
                                        ? 'bg-[hsl(var(--color-primary))/0.1] text-[hsl(var(--color-primary))]'
                                        : 'hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))]'
                                      }
                                    `}
                                    role="option"
                                    aria-selected={index === selectedIndex}
                                  >
                                    <span className="text-xl filter grayscale group-hover:grayscale-0">{getToolIcon(result.tool.category)}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-sm truncate">
                                        {toolName}
                                      </div>
                                      <div className="text-xs text-[hsl(var(--color-muted-foreground))] truncate">
                                        {toolDescription}
                                      </div>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSearchToggle}
                    aria-label="Open search"
                    className="relative text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                  >
                    <Search className="h-5 w-5" aria-hidden="true" />
                    <span className="ml-2 hidden lg:inline-block text-xs text-[hsl(var(--color-muted-foreground))/0.5] border border-[hsl(var(--color-border))] rounded px-1.5 py-0.5">⌘K</span>
                  </Button>
                )}
              </div>
            )}

            {/* Recent Files Dropdown */}
            <RecentFilesDropdown
              locale={locale}
              translations={{
                title: t('recentFiles.title') || 'Recent Files',
                empty: t('recentFiles.empty') || 'No recent files',
                clearAll: t('recentFiles.clearAll') || 'Clear all',
                processedWith: t('recentFiles.processedWith') || 'Processed with',
              }}
            />

            {/* Update Check Button */}
            <UpdateCheckButton />

            {/* GitHub Repository Link */}
            <a
              href="https://github.com/PDFCraftTool/pdfcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center h-9 w-9 rounded-lg text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))/0.5] transition-all"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Selector placeholder */}
            <div id="language-selector-slot" />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] backdrop-blur-xl shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2 p-2">
              {navItems.map((item) => {
                const isStudio = item.href.endsWith('/studio');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isStudio
                          ? 'text-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.06)] hover:bg-[hsl(var(--color-primary)/0.12)]'
                          : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      {isStudio && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[hsl(var(--color-primary))] text-white">
                          NEW
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
              {/* GitHub Link in Mobile Menu */}
              <li>
                <a
                  href="https://github.com/PDFCraftTool/pdfcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
