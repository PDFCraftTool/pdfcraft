'use client';

import React from 'react';
import {
  Zap,
  RotateCw,
  Archive,
  Type,
  Layers,
  Smartphone,
  Eraser,
  Link2Off,
  PenTool,
  Wrench,
} from 'lucide-react';

interface OptimizeRepairToolOptionsProps {
  toolId: string;
  options: Record<string, any>;
  onChange: (key: string, value: any) => void;
  totalPages?: number;
  locale?: string;
}

export function OptimizeRepairToolOptions({
  toolId,
  options,
  onChange,
  totalPages = 1,
  locale = 'en',
}: OptimizeRepairToolOptionsProps) {
  const validLocale = (locale as string) || 'en';
  const isZh = validLocale.toLowerCase().startsWith('zh');

  switch (toolId) {
    case 'linearize-pdf': {
      const useObjectStreams = options.useObjectStreams ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '线性化 Fast Web View 选项' : 'Linearization Options'}
            </label>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{isZh ? '启用 Cross-Reference 对象流高效压缩' : 'Enable Object Stream Compression'}</span>
              <input
                type="checkbox"
                checked={useObjectStreams}
                onChange={(e) => onChange('useObjectStreams', e.target.checked)}
                className="w-4 h-4 rounded text-primary"
              />
            </div>
            <p className="text-[11px] text-muted-foreground">
              {isZh ? '重组 PDF 内部结构，支持在网页浏览器中按需首屏秒开，无需等待下载完整大文件。' : 'Optimizes PDF for byte-serving fast web view streaming.'}
            </p>
          </div>
        </div>
      );
    }

    case 'deskew-pdf':
    case 'pdf-deskew-aligner': {
      const threshold = options.threshold ?? 10;
      const dpi = options.dpi ?? 150;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '扫描件倾斜校正与纠偏' : 'Deskew & Align'}
            </label>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '霍夫变换灵敏度阈值' : 'Hough Sensitivity Threshold'}</span>
                <span className="font-semibold text-primary">{threshold}</span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                value={threshold}
                onChange={(e) => onChange('threshold', parseInt(e.target.value) || 10)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs text-muted-foreground">{isZh ? '检测分析分辨率 (DPI)' : 'Analysis DPI'}</label>
              <select
                value={dpi}
                onChange={(e) => onChange('dpi', parseInt(e.target.value) || 150)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value={96}>{isZh ? '96 DPI (快速分析)' : '96 DPI (Fast)'}</option>
                <option value={150}>{isZh ? '150 DPI (平衡标准)' : '150 DPI (Balanced)'}</option>
                <option value={300}>{isZh ? '300 DPI (高精微校正)' : '300 DPI (Accurate)'}</option>
              </select>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-to-pdfa': {
      const level = options.level || '2b';
      const embedFonts = options.embedFonts ?? true;
      const flattenTransparency = options.flattenTransparency ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '转换为 PDF/A 归档规范' : 'PDF/A Compliance'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? 'ISO 归档合规级别' : 'Archival Level'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1b', label: 'PDF/A-1b', desc: isZh ? '基础视觉' : 'Basic' },
                  { id: '2b', label: 'PDF/A-2b', desc: isZh ? '推荐标准' : 'Standard' },
                  { id: '3b', label: 'PDF/A-3b', desc: isZh ? '支持附件' : 'Extensible' },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => onChange('level', l.id)}
                    className={`flex flex-col items-center py-2 px-1 text-xs rounded-lg border ${
                      level === l.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-muted-foreground">{l.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2 pt-2 text-xs">
              <label className="flex items-center justify-between cursor-pointer">
                <span>{isZh ? '全量嵌入所有字体 (Embed Fonts)' : 'Embed All Fonts'}</span>
                <input
                  type="checkbox"
                  checked={embedFonts}
                  onChange={(e) => onChange('embedFonts', e.target.checked)}
                  className="w-4 h-4 rounded text-primary"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span>{isZh ? '透明度展平合规化' : 'Flatten Transparencies'}</span>
                <input
                  type="checkbox"
                  checked={flattenTransparency}
                  onChange={(e) => onChange('flattenTransparency', e.target.checked)}
                  className="w-4 h-4 rounded text-primary"
                />
              </label>
            </div>
          </div>
        </div>
      );
    }

    case 'font-to-outline': {
      const dpi = options.dpi ?? 300;
      const preserveSelectableText = options.preserveSelectableText ?? false;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '字体转曲 / 矢量轮廓化' : 'Font to Outlines'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '轮廓渲染解析度 (DPI)' : 'Rendering DPI'}</label>
              <select
                value={dpi}
                onChange={(e) => onChange('dpi', parseInt(e.target.value) || 300)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value={150}>{isZh ? '150 DPI (屏幕预览)' : '150 DPI (Preview)'}</option>
                <option value={300}>{isZh ? '300 DPI (标准印刷转曲)' : '300 DPI (Standard)'}</option>
                <option value={600}>{isZh ? '600 DPI (超高清印前)' : '600 DPI (High-res)'}</option>
              </select>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs">
              <span>{isZh ? '保留底层不可见可选文本' : 'Preserve Selectable Text Layer'}</span>
              <input
                type="checkbox"
                checked={preserveSelectableText}
                onChange={(e) => onChange('preserveSelectableText', e.target.checked)}
                className="w-4 h-4 rounded text-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'ocg-manager': {
      const layerAction = options.layerAction || 'remove-hidden';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '图层 (OCG) 管理' : 'Layer Management'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '处理方式' : 'Action'}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'remove-hidden', label: isZh ? '清理不可见隐藏图层' : 'Purge Hidden Layers' },
                  { id: 'flatten-all', label: isZh ? '合并全部图层' : 'Flatten All Layers' },
                ].map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => onChange('layerAction', a.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      layerAction === a.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'eink-optimizer': {
      const contrastOffset = options.contrastOffset ?? 15;
      const dilationAmount = options.dilationAmount ?? 1;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '墨水屏电子书阅读优化' : 'E-Ink Optimizer'}
            </label>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '黑度对比度提升' : 'Black Contrast Boost'}</span>
                <span className="font-semibold text-primary">+{contrastOffset}%</span>
              </div>
              <input
                type="range"
                min="-20"
                max="50"
                value={contrastOffset}
                onChange={(e) => onChange('contrastOffset', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '笔画文字加粗膨胀' : 'Stroke Dilation'}</span>
                <span className="font-semibold text-primary">{dilationAmount} px</span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                value={dilationAmount}
                onChange={(e) => onChange('dilationAmount', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'batch-watermark-remover': {
      const watermarkText = options.watermarkText || (isZh ? '机密' : 'CONFIDENTIAL');
      const removeImages = options.removeImages ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '批量去水印参数' : 'Batch Watermark Remover'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '要消除的水印文字关键词' : 'Watermark Keyword'}</label>
              <input
                type="text"
                value={watermarkText}
                onChange={(e) => onChange('watermarkText', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="pt-2 flex items-center justify-between text-xs">
              <span>{isZh ? '同时尝试识别并剔除浅色背景图水印' : 'Remove Background Image Watermarks'}</span>
              <input
                type="checkbox"
                checked={removeImages}
                onChange={(e) => onChange('removeImages', e.target.checked)}
                className="w-4 h-4 rounded text-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'dead-link-debugger': {
      const action = options.action || 'remove-broken';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '死链检测与自动修复' : 'Dead Link Debugger'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '失效链接处理策略' : 'Action'}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'remove-broken', label: isZh ? '移除失效超链接' : 'Purge Broken Links' },
                  { id: 'redirect-https', label: isZh ? '自动升级 HTTP 到 HTTPS' : 'Upgrade to HTTPS' },
                ].map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => onChange('action', a.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      action === a.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'handwriting-ink-contrast-booster': {
      const threshold = options.threshold ?? 180;
      const contrast = options.contrast ?? 1.8;
      const inkType = options.inkType || 'pen';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '手写笔记与墨水增强' : 'Handwriting Ink Booster'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '笔迹滤镜类型' : 'Ink Mode'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pen', label: isZh ? '钢笔/签字笔' : 'Pen' },
                  { id: 'pencil', label: isZh ? '铅笔浅印' : 'Pencil' },
                  { id: 'marker', label: isZh ? '过滤荧光笔' : 'No Marker' },
                ].map((k) => (
                  <button
                    key={k.id}
                    type="button"
                    onClick={() => onChange('inkType', k.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      inkType === k.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '二值化阈值' : 'Threshold'}</span>
                <span className="font-semibold text-primary">{threshold}</span>
              </div>
              <input
                type="range"
                min="100"
                max="240"
                value={threshold}
                onChange={(e) => onChange('threshold', parseInt(e.target.value) || 180)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '黑度加深' : 'Contrast'}</span>
                <span className="font-semibold text-primary">{contrast}x</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="3.0"
                step="0.1"
                value={contrast}
                onChange={(e) => onChange('contrast', parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
