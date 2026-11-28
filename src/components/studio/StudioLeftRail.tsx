'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ChevronDown,
  Star,
  FolderOpen,
  Edit,
  Wrench,
  ShieldCheck,
  FileUp,
  FileOutput,
  Heart,
  Clock,
  Zap,
  ChevronsUpDown,
  Trash2,
} from 'lucide-react';
import {
  STUDIO_TOOLS,
  STUDIO_FEATURED_TOOL_IDS,
  normalizeStudioToolId,
  isZeroConfigTool,
  getStudioFavorites,
  saveStudioFavorites,
  getStudioRecentTools,
  clearStudioRecentTools,
  type StudioToolId,
  type StudioToolConfig,
} from './studio-processors';
import { getToolIcon } from '@/config/icons';
import { getToolContent } from '@/config/tool-content';
import type { Locale } from '@/lib/i18n/config';
import type { ToolCategory } from '@/types/tool';

interface StudioLeftRailProps {
  activeToolId: StudioToolId | null;
  onSelectTool: (id: StudioToolId | null) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  disabled?: boolean;
  locale?: string;
  onQuickApply?: (toolId: StudioToolId) => void;
}

const CATEGORY_META: Record<
  ToolCategory,
  {
    labelZh: string;
    labelEn: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    iconBg: string;
  }
> = {
  'organize-manage': {
    labelZh: '页面组织与管理',
    labelEn: 'Organize & Manage',
    icon: FolderOpen,
    accentColor: 'text-blue-500 dark:text-blue-400',
    iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  'edit-annotate': {
    labelZh: '编辑与标注',
    labelEn: 'Edit & Annotate',
    icon: Edit,
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  'optimize-repair': {
    labelZh: '优化与修复',
    labelEn: 'Optimize & Repair',
    icon: Wrench,
    accentColor: 'text-purple-500 dark:text-purple-400',
    iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  'secure-pdf': {
    labelZh: '安全与隐私',
    labelEn: 'Secure & Privacy',
    icon: ShieldCheck,
    accentColor: 'text-rose-500 dark:text-rose-400',
    iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
  'convert-from-pdf': {
    labelZh: '导出与提取',
    labelEn: 'Convert & Extract',
    icon: FileOutput,
    accentColor: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  'convert-to-pdf': {
    labelZh: '转换与追加',
    labelEn: 'Convert to PDF',
    icon: FileUp,
    accentColor: 'text-cyan-500 dark:text-cyan-400',
    iconBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
};

const CATEGORY_ORDER: ToolCategory[] = [
  'organize-manage',
  'edit-annotate',
  'optimize-repair',
  'secure-pdf',
  'convert-from-pdf',
  'convert-to-pdf',
];

export const StudioLeftRail: React.FC<StudioLeftRailProps> = ({
  activeToolId,
  onSelectTool,
  isCollapsed,
  onToggleCollapse,
  disabled = false,
  locale = 'en',
  onQuickApply,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState<string>('all');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentToolIds, setRecentToolIds] = useState<string[]>([]);
  const [flyoutCategory, setFlyoutCategory] = useState<string | null>(null);

  const validLocale = (locale as Locale) || 'en';
  const isZh = typeof validLocale === 'string' && validLocale.toLowerCase().startsWith('zh');

  // Load favorites & recent from storage
  useEffect(() => {
    setFavorites(getStudioFavorites());
    setRecentToolIds(getStudioRecentTools());
  }, []);

  const toggleFavorite = (toolId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const normId = normalizeStudioToolId(toolId);
    setFavorites((prev) => {
      const next = prev.includes(normId)
        ? prev.filter((id) => id !== normId)
        : [...prev, normId];
      saveStudioFavorites(next);
      return next;
    });
  };

  const handleClearRecent = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearStudioRecentTools();
    setRecentToolIds([]);
  };

  const toggleCategory = (catKey: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [catKey]: !prev[catKey],
    }));
  };

  const toggleAllCategories = () => {
    const allCollapsed = CATEGORY_ORDER.every((c) => collapsedCategories[c]);
    const newState: Record<string, boolean> = {};
    CATEGORY_ORDER.forEach((c) => {
      newState[c] = !allCollapsed;
    });
    newState['featured'] = !allCollapsed;
    newState['recent'] = !allCollapsed;
    newState['favorites'] = !allCollapsed;
    setCollapsedCategories(newState);
  };

  // Enhance each tool with localized title and description
  const localizedTools = useMemo(() => {
    return STUDIO_TOOLS.map((tool) => {
      const content = getToolContent(validLocale, tool.id);
      return {
        ...tool,
        displayTitle: content?.title || tool.name,
        displayDesc: content?.metaDescription || tool.description,
        keywords: content?.keywords || [],
        isZeroConfig: isZeroConfigTool(tool.id),
      };
    });
  }, [validLocale]);

  // Featured tools list
  const featuredTools = useMemo(() => {
    return localizedTools.filter((t) => STUDIO_FEATURED_TOOL_IDS.includes(t.id));
  }, [localizedTools]);

  // Favorite tools list
  const favoriteTools = useMemo(() => {
    return localizedTools.filter((t) => favorites.includes(t.id));
  }, [localizedTools, favorites]);

  // Recent tools list
  const recentTools = useMemo(() => {
    return recentToolIds
      .map((id) => localizedTools.find((t) => t.id === id))
      .filter((t): t is typeof localizedTools[0] => t !== undefined);
  }, [localizedTools, recentToolIds]);

  // Tab filtered or search filtered tools
  const visibleTools = useMemo(() => {
    let list = localizedTools;

    if (activeFilterTab === 'featured') {
      list = featuredTools;
    } else if (activeFilterTab === 'favorites') {
      list = favoriteTools;
    } else if (activeFilterTab === 'recent') {
      list = recentTools;
    } else if (activeFilterTab !== 'all') {
      list = localizedTools.filter((t) => t.category === activeFilterTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((t) => {
        return (
          t.displayTitle.toLowerCase().includes(q) ||
          t.displayDesc.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [localizedTools, activeFilterTab, searchQuery, featuredTools, favoriteTools, recentTools]);

  const activeNormId = activeToolId ? normalizeStudioToolId(activeToolId) : null;

  const primaryTabs = [
    { key: 'all', label: isZh ? '全部' : 'All', icon: Sparkles, count: localizedTools.length },
    { key: 'featured', label: isZh ? '高频' : 'Featured', icon: Star, count: featuredTools.length },
    { key: 'favorites', label: isZh ? '收藏' : 'Favs', icon: Heart, count: favorites.length },
    { key: 'recent', label: isZh ? '最近' : 'Recent', icon: Clock, count: recentTools.length },
  ];

  const categoryTabs = [
    { key: 'organize-manage', label: isZh ? '页面' : 'Pages', fullLabel: isZh ? '页面组织与管理' : 'Organize & Manage' },
    { key: 'edit-annotate', label: isZh ? '标注' : 'Annotate', fullLabel: isZh ? '编辑与标注' : 'Edit & Annotate' },
    { key: 'optimize-repair', label: isZh ? '优化' : 'Optimize', fullLabel: isZh ? '优化与修复' : 'Optimize & Repair' },
    { key: 'secure-pdf', label: isZh ? '安全' : 'Security', fullLabel: isZh ? '安全与隐私' : 'Secure & Privacy' },
    { key: 'convert-from-pdf', label: isZh ? '导出' : 'Export', fullLabel: isZh ? '导出与提取' : 'Convert & Extract' },
    { key: 'convert-to-pdf', label: isZh ? '追加' : 'Append', fullLabel: isZh ? '转换与追加' : 'Convert to PDF' },
  ];

  return (
    <aside
      className={`relative flex flex-col flex-shrink-0 border-r border-[hsl(var(--color-border))] bg-[hsl(var(--color-card)/0.92)] backdrop-blur-md transition-all duration-300 z-20 ${
        isCollapsed ? 'w-16' : 'w-80 sm:w-[336px]'
      }`}
    >
      {/* Top Header / Collapsible trigger */}
      <div className="h-12 border-b border-[hsl(var(--color-border))] px-3 flex items-center justify-between flex-shrink-0">
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-[hsl(var(--color-primary))] to-sky-400 text-white shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-baseline gap-1.5 truncate">
              <span className="text-xs font-bold text-[hsl(var(--color-foreground))] tracking-tight">
                {isZh ? 'Studio 工具箱' : 'Studio Toolbox'}
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]">
                {STUDIO_TOOLS.length}
              </span>
            </div>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className={`p-1.5 rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors ${
            isCollapsed ? 'mx-auto' : ''
          }`}
          title={isCollapsed ? (isZh ? '展开工具栏' : 'Expand Sidebar') : (isZh ? '折叠工具栏' : 'Collapse Sidebar')}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Mode: Search Bar & Dual Non-Scrolling Filter Tiers */}
      {!isCollapsed && (
        <div className="p-2 border-b border-[hsl(var(--color-border)/0.6)] space-y-2 flex-shrink-0">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[hsl(var(--color-muted-foreground))]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isZh ? '搜索全部 67+ 工具 (快捷键: /)...' : 'Search 67+ tools (Press /)...'}
              data-testid="studio-tool-search"
              className="w-full pl-8 pr-10 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-muted-foreground)/0.7)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary)/0.25)] focus:border-[hsl(var(--color-primary))] transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            ) : (
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono px-1 py-0.2 rounded bg-[hsl(var(--color-muted)/0.8)] text-[hsl(var(--color-muted-foreground))] border border-[hsl(var(--color-border)/0.6)] pointer-events-none select-none">
                /
              </span>
            )}
          </div>

          {/* Dual Non-Scrolling Filter Controls */}
          <div className="space-y-1 pt-0.5">
            {/* Tier 1: Segmented View Selector (4 Equal Columns Grid, Zero Scrolling) */}
            <div className="grid grid-cols-4 gap-1 p-0.5 bg-[hsl(var(--color-muted)/0.5)] rounded-lg border border-[hsl(var(--color-border)/0.5)]">
              {primaryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilterTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    data-testid={`filter-pill-${tab.key}`}
                    onClick={() => setActiveFilterTab(tab.key)}
                    className={`relative py-1 px-1 rounded-md text-[11px] font-medium transition-all flex items-center justify-center gap-1 select-none ${
                      isActive
                        ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-primary))] shadow-xs font-semibold'
                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-card)/0.5)]'
                    }`}
                  >
                    <Icon
                      className={`w-3 h-3 flex-shrink-0 ${
                        tab.key === 'favorites' && favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                    <span className="truncate">{tab.label}</span>
                    {tab.count !== undefined && tab.count > 0 && tab.key !== 'all' && (
                      <span
                        className={`text-[9px] font-bold px-1 rounded-full ${
                          isActive
                            ? 'bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))]'
                            : 'bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]'
                        }`}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tier 2: Category Quick Filters (6 Columns Grid, Zero Scrolling) */}
            <div className="grid grid-cols-6 gap-1">
              {categoryTabs.map((cat) => {
                const isActive = activeFilterTab === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    data-testid={`filter-pill-${cat.key}`}
                    onClick={() => setActiveFilterTab(isActive ? 'all' : cat.key)}
                    title={cat.fullLabel}
                    className={`py-1 px-0.5 rounded text-[10.5px] font-medium text-center transition-all truncate border ${
                      isActive
                        ? 'bg-[hsl(var(--color-primary))] text-white border-transparent shadow-xs font-semibold'
                        : 'bg-[hsl(var(--color-background))] text-[hsl(var(--color-muted-foreground))] border-[hsl(var(--color-border)/0.6)] hover:text-[hsl(var(--color-foreground))] hover:border-[hsl(var(--color-primary)/0.4)] hover:bg-[hsl(var(--color-muted)/0.3)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tool List Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-2 scrollbar-thin">
        {/* COLLAPSED MODE: Clean Icon Rail with Hover Flyouts */}
        {isCollapsed ? (
          <div className="space-y-2 py-1">
            {/* Featured Tools in Collapsed Mode */}
            {featuredTools.slice(0, 10).map((tool) => {
              const IconComponent = getToolIcon(tool.icon);
              const isActive = activeNormId === tool.id;

              return (
                <div key={tool.id} className="relative group">
                  <button
                    disabled={disabled}
                    onClick={() => onSelectTool(isActive ? null : tool.id)}
                    title={`${tool.displayTitle} - ${tool.displayDesc}`}
                    className={`w-full flex items-center justify-center p-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[hsl(var(--color-primary))] text-white shadow-md shadow-[hsl(var(--color-primary)/0.2)]'
                        : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                    } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          /* EXPANDED MODE: Render Tool Sections */
          <>
            {/* Quick Actions Header Controls (if in all tab) */}
            {activeFilterTab === 'all' && !searchQuery && (
              <div className="flex items-center justify-between px-1.5 py-0.5 text-[10px] text-[hsl(var(--color-muted-foreground))]">
                <span>{isZh ? '按大类浏览' : 'Browse categories'}</span>
                <button
                  onClick={toggleAllCategories}
                  className="hover:text-[hsl(var(--color-foreground))] flex items-center gap-1"
                  title={isZh ? '一键展开或折叠全部分类' : 'Toggle all categories'}
                >
                  <ChevronsUpDown className="w-3 h-3" />
                  <span>{isZh ? '展开/收起全部' : 'Toggle All'}</span>
                </button>
              </div>
            )}

            {/* Filtered Flat View (Search or Specific Tab) */}
            {(searchQuery.trim() || activeFilterTab !== 'all') ? (
              <div className="space-y-1">
                <div className="px-2 py-1 text-[11px] font-semibold text-[hsl(var(--color-muted-foreground))] flex items-center justify-between">
                  <span>
                    {isZh ? `找到 ${visibleTools.length} 个工具` : `Found ${visibleTools.length} tools`}
                  </span>
                  {activeFilterTab === 'recent' && recentTools.length > 0 && (
                    <button
                      onClick={handleClearRecent}
                      className="text-[10px] text-red-500 hover:underline flex items-center gap-1"
                    >
                      <Trash2 className="w-2.5 h-2.5" />
                      {isZh ? '清空' : 'Clear'}
                    </button>
                  )}
                </div>

                {visibleTools.length === 0 ? (
                  <div className="py-12 text-center text-xs text-[hsl(var(--color-muted-foreground))] space-y-2">
                    <p>{isZh ? '未找到相关工具' : 'No matching tools found'}</p>
                    {activeFilterTab === 'favorites' && (
                      <p className="text-[11px] text-[hsl(var(--color-muted-foreground)/0.8)]">
                        {isZh ? '点击工具右侧爱心图标即可收藏' : 'Click the heart icon on any tool to favorite'}
                      </p>
                    )}
                  </div>
                ) : (
                  visibleTools.map((tool) => {
                    const IconComponent = getToolIcon(tool.icon);
                    const isActive = activeNormId === tool.id;
                    const isFav = favorites.includes(tool.id);

                    return (
                      <div
                        key={tool.id}
                        className={`group relative flex items-center rounded-xl transition-all ${
                          isActive
                            ? 'bg-[hsl(var(--color-primary))] text-white shadow-md shadow-[hsl(var(--color-primary)/0.2)]'
                            : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                        }`}
                      >
                        <button
                          disabled={disabled}
                          data-testid={`tool-item-${tool.id}`}
                          onClick={() => onSelectTool(isActive ? null : tool.id)}
                          className="flex-1 flex items-center gap-2.5 px-2.5 py-2 text-left min-w-0"
                        >
                          <IconComponent
                            className={`w-4 h-4 flex-shrink-0 ${
                              isActive ? 'text-white' : 'text-[hsl(var(--color-primary))]'
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold leading-tight truncate">
                              {tool.displayTitle}
                            </div>
                            <div
                              className={`text-[10px] leading-tight truncate mt-0.5 ${
                                isActive ? 'text-white/80' : 'text-[hsl(var(--color-muted-foreground))]'
                              }`}
                            >
                              {tool.displayDesc}
                            </div>
                          </div>
                        </button>

                        {/* Quick action buttons on right */}
                        <div className="flex items-center gap-1 pr-2 opacity-80 group-hover:opacity-100">
                          {/* Zero-config Instant Run button */}
                          {tool.isZeroConfig && onQuickApply && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onQuickApply(tool.id);
                              }}
                              className={`p-1 rounded-md transition-all ${
                                isActive
                                  ? 'hover:bg-white/20 text-white'
                                  : 'hover:bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))]'
                              }`}
                              title={isZh ? '⚡ 零参数一键执行' : '⚡ Instant Run'}
                            >
                              <Zap className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {/* Favorite button */}
                          <button
                            type="button"
                            onClick={(e) => toggleFavorite(tool.id, e)}
                            className={`p-1 rounded-md transition-all ${
                              isFav
                                ? 'text-rose-500 fill-current'
                                : isActive
                                ? 'text-white/70 hover:text-white'
                                : 'text-[hsl(var(--color-muted-foreground))] hover:text-rose-500 opacity-0 group-hover:opacity-100'
                            }`}
                            title={isFav ? (isZh ? '取消收藏' : 'Unfavorite') : (isZh ? '添加收藏' : 'Favorite')}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              /* Grouped View (Featured + Recents + Categories) */
              <>
                {/* 1. Recent Tools Section (if any) */}
                {recentTools.length > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between px-2 py-1 text-[11px] font-bold text-[hsl(var(--color-muted-foreground))]">
                      <button
                        onClick={() => toggleCategory('recent')}
                        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                      >
                        <Clock className="w-3 h-3" />
                        <span>{isZh ? '最近使用' : 'Recently Used'}</span>
                        <span className="text-[10px] font-normal text-[hsl(var(--color-muted-foreground))]">
                          ({recentTools.length})
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={handleClearRecent}
                        className="text-[10px] text-[hsl(var(--color-muted-foreground))] hover:text-red-500 transition-colors"
                        title={isZh ? '清空最近记录' : 'Clear recent records'}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>

                    {!collapsedCategories['recent'] && (
                      <div className="grid grid-cols-2 gap-1 px-1">
                        {recentTools.slice(0, 4).map((tool) => {
                          const IconComponent = getToolIcon(tool.icon);
                          const isActive = activeNormId === tool.id;

                          return (
                            <button
                              key={`recent-${tool.id}`}
                              disabled={disabled}
                              onClick={() => onSelectTool(isActive ? null : tool.id)}
                              className={`flex items-center gap-1.5 p-1.5 rounded-lg text-left text-xs transition-all border ${
                                isActive
                                  ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-semibold'
                                  : 'border-[hsl(var(--color-border)/0.5)] bg-[hsl(var(--color-background)/0.5)] text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                              }`}
                            >
                              <IconComponent className="w-3.5 h-3.5 text-[hsl(var(--color-primary))] shrink-0" />
                              <span className="truncate text-[11px]">{tool.displayTitle}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* 2. Featured Tools Accordion */}
                <div className="space-y-1 pt-0.5">
                  <button
                    onClick={() => toggleCategory('featured')}
                    className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted)/0.6)] rounded-lg transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-amber-500/15 text-amber-500 transition-transform group-hover:scale-105 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="font-bold text-[hsl(var(--color-foreground))]">{isZh ? '高频推荐' : 'Featured Tools'}</span>
                    </div>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[hsl(var(--color-muted-foreground))] transition-transform duration-200 ${
                        collapsedCategories['featured'] ? '-rotate-90' : ''
                      }`}
                    />
                  </button>

                  {!collapsedCategories['featured'] && (
                    <div className="space-y-0.5 pl-2 border-l border-amber-500/20 ml-3.5 my-0.5">
                      {featuredTools.map((tool) => {
                        const IconComponent = getToolIcon(tool.icon);
                        const isActive = activeNormId === tool.id;
                        const isFav = favorites.includes(tool.id);

                        return (
                          <div
                            key={tool.id}
                            className={`group relative flex items-center rounded-lg transition-all ${
                              isActive
                                ? 'bg-[hsl(var(--color-primary))] text-white shadow-sm'
                                : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                            }`}
                          >
                            <button
                              disabled={disabled}
                              data-testid={`tool-item-${tool.id}`}
                              onClick={() => onSelectTool(isActive ? null : tool.id)}
                              className="flex-1 flex items-center gap-2.5 px-2 py-1.5 text-left min-w-0"
                            >
                              <IconComponent
                                className={`w-3.5 h-3.5 flex-shrink-0 ${
                                  isActive ? 'text-white' : 'text-[hsl(var(--color-primary))]'
                                }`}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium leading-tight truncate">
                                  {tool.displayTitle}
                                </div>
                                <div
                                  className={`text-[10px] leading-tight truncate mt-0.5 ${
                                    isActive ? 'text-white/80' : 'text-[hsl(var(--color-muted-foreground))]'
                                  }`}
                                >
                                  {tool.displayDesc}
                                </div>
                              </div>
                            </button>

                            <div className="flex items-center gap-1 pr-2">
                              {tool.isZeroConfig && onQuickApply && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onQuickApply(tool.id);
                                  }}
                                  className={`p-1 rounded-md transition-all ${
                                    isActive
                                      ? 'hover:bg-white/20 text-white'
                                      : 'hover:bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))]'
                                  }`}
                                  title={isZh ? '⚡ 零参数一键执行' : '⚡ Instant Run'}
                                >
                                  <Zap className="w-3 h-3" />
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={(e) => toggleFavorite(tool.id, e)}
                                className={`p-1 rounded-md transition-all ${
                                  isFav
                                    ? 'text-rose-500 fill-current'
                                    : isActive
                                    ? 'text-white/70 hover:text-white'
                                    : 'text-[hsl(var(--color-muted-foreground))] hover:text-rose-500 opacity-0 group-hover:opacity-100'
                                }`}
                                title={isFav ? (isZh ? '取消收藏' : 'Unfavorite') : (isZh ? '添加收藏' : 'Favorite')}
                              >
                                <Heart className={`w-3 h-3 ${isFav ? 'fill-rose-500' : ''}`} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Standard Categorized Accordions */}
                {CATEGORY_ORDER.map((catKey) => {
                  const meta = CATEGORY_META[catKey];
                  const CategoryIcon = meta.icon;
                  const catTools = localizedTools.filter((t) => t.category === catKey);
                  if (catTools.length === 0) return null;

                  const isCatCollapsed = collapsedCategories[catKey] ?? false;

                  return (
                    <div key={catKey} className="space-y-1 border-t border-[hsl(var(--color-border)/0.5)] pt-1.5">
                      <button
                        onClick={() => toggleCategory(catKey)}
                        className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted)/0.5)] rounded-lg transition-colors group"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <div className={`p-1 rounded-md ${meta.iconBg} transition-transform group-hover:scale-105 shrink-0`}>
                            <CategoryIcon className={`w-3.5 h-3.5 ${meta.accentColor}`} />
                          </div>
                          <span className="truncate">{isZh ? meta.labelZh : meta.labelEn}</span>
                          <span className="text-[10px] font-normal text-[hsl(var(--color-muted-foreground))]">
                            ({catTools.length})
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[hsl(var(--color-muted-foreground))] transition-transform duration-200 ${
                            isCatCollapsed ? '-rotate-90' : ''
                          }`}
                        />
                      </button>

                      {!isCatCollapsed && (
                        <div className="space-y-0.5 pl-2 border-l border-[hsl(var(--color-border)/0.5)] ml-3.5 my-0.5">
                          {catTools.map((tool) => {
                            const IconComponent = getToolIcon(tool.icon);
                            const isActive = activeNormId === tool.id;
                            const isFav = favorites.includes(tool.id);

                            return (
                              <div
                                key={tool.id}
                                className={`group relative flex items-center rounded-lg transition-all ${
                                  isActive
                                    ? 'bg-[hsl(var(--color-primary))] text-white shadow-sm'
                                    : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                                }`}
                              >
                                <button
                                  disabled={disabled}
                                  data-testid={`tool-item-${tool.id}`}
                                  onClick={() => onSelectTool(isActive ? null : tool.id)}
                                  className="flex-1 flex items-center gap-2.5 px-2 py-1.5 text-left min-w-0"
                                >
                                  <IconComponent
                                    className={`w-3.5 h-3.5 flex-shrink-0 ${
                                      isActive ? 'text-white' : 'text-[hsl(var(--color-primary))]'
                                    }`}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium leading-tight truncate">
                                      {tool.displayTitle}
                                    </div>
                                    <div
                                      className={`text-[10px] leading-tight truncate mt-0.5 ${
                                        isActive ? 'text-white/80' : 'text-[hsl(var(--color-muted-foreground))]'
                                      }`}
                                    >
                                      {tool.displayDesc}
                                    </div>
                                  </div>
                                </button>

                                <div className="flex items-center gap-1 pr-2">
                                  {tool.isZeroConfig && onQuickApply && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onQuickApply(tool.id);
                                      }}
                                      className={`p-1 rounded-md transition-all ${
                                        isActive
                                          ? 'hover:bg-white/20 text-white'
                                          : 'hover:bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))]'
                                      }`}
                                      title={isZh ? '⚡ 零参数一键执行' : '⚡ Instant Run'}
                                    >
                                      <Zap className="w-3 h-3" />
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={(e) => toggleFavorite(tool.id, e)}
                                    className={`p-1 rounded-md transition-all ${
                                      isFav
                                        ? 'text-rose-500 fill-current'
                                        : isActive
                                        ? 'text-white/70 hover:text-white'
                                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-rose-500 opacity-0 group-hover:opacity-100'
                                    }`}
                                    title={isFav ? (isZh ? '取消收藏' : 'Unfavorite') : (isZh ? '添加收藏' : 'Favorite')}
                                  >
                                    <Heart className={`w-3 h-3 ${isFav ? 'fill-rose-500' : ''}`} />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  );
};
