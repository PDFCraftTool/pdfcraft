'use client';

import React from 'react';
import {
  Type,
  Palette,
  QrCode,
  PenTool,
  FileX2,
  Trash2,
  Sparkles,
  BookOpenCheck,
  BookmarkCheck,
} from 'lucide-react';

interface EditAnnotateToolOptionsProps {
  toolId: string;
  options: Record<string, any>;
  onChange: (key: string, value: any) => void;
  totalPages?: number;
  locale?: string;
}

export function EditAnnotateToolOptions({
  toolId,
  options,
  onChange,
  totalPages = 1,
  locale = 'en',
}: EditAnnotateToolOptionsProps) {
  const validLocale = (locale as string) || 'en';
  const isZh = validLocale.toLowerCase().startsWith('zh');

  switch (toolId) {
    case 'text-color': {
      const color = options.color || '#0000ff';
      const mode = options.mode || 'dark';
      const threshold = options.threshold ?? 128;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '文本颜色替换与染色' : 'Text Color Settings'}
            </label>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{isZh ? '目标替换颜色' : 'Target Color'}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => onChange('color', e.target.value)}
                  className="w-7 h-7 rounded border border-border cursor-pointer p-0.5"
                />
                <span className="font-mono text-muted-foreground">{color}</span>
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs text-muted-foreground">{isZh ? '染色应用模式' : 'Tint Mode'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dark', label: isZh ? '深色字替换' : 'Dark Text' },
                  { id: 'light', label: isZh ? '浅色字反白' : 'Light Text' },
                  { id: 'custom', label: isZh ? '阈值替换' : 'Threshold' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('mode', m.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      mode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            {mode === 'custom' && (
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs">
                  <span>{isZh ? '灰度识别阈值' : 'Luminance Threshold'}</span>
                  <span className="font-semibold text-primary">{threshold}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="220"
                  value={threshold}
                  onChange={(e) => onChange('threshold', parseInt(e.target.value) || 128)}
                  className="w-full accent-primary"
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    case 'background-color': {
      const color = options.color || '#fdf6e2';
      const opacity = options.opacity ?? 0.8;
      const mode = options.mode || 'replace-white';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '背景底色调整' : 'Background Tint'}
            </label>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{isZh ? '页面底色 (护眼模式)' : 'Background Color'}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => onChange('color', e.target.value)}
                  className="w-7 h-7 rounded border border-border cursor-pointer p-0.5"
                />
                <span className="font-mono text-muted-foreground">{color}</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {[
                { hex: '#fdf6e2', name: isZh ? '羊皮纸' : 'Parchment' },
                { hex: '#e8f5e9', name: isZh ? '护眼绿' : 'Soft Green' },
                { hex: '#e3f2fd', name: isZh ? '柔和蓝' : 'Soft Blue' },
                { hex: '#ffffff', name: isZh ? '纯白' : 'White' },
              ].map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  onClick={() => onChange('color', c.hex)}
                  className="py-1 px-1 rounded border text-[11px] text-center"
                  style={{ backgroundColor: c.hex + '40' }}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '底色不透明度' : 'Opacity'}</span>
                <span className="font-semibold text-primary">{Math.round(opacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.0"
                step="0.05"
                value={opacity}
                onChange={(e) => onChange('opacity', parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'interactive-toc-generator': {
      const title = options.title || (isZh ? '交互式目录' : 'Interactive Table of Contents');
      const insertIndex = options.insertIndex ?? 1;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '交互式带超链接目录生成器' : 'Interactive TOC Generator'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '目录页大标题' : 'TOC Header Title'}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => onChange('title', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="space-y-1.5 pt-1 text-xs">
              <label className="text-muted-foreground block mb-1">{isZh ? '目录插入到第几页前' : 'Insert Before Page'}</label>
              <select
                value={insertIndex}
                onChange={(e) => onChange('insertIndex', parseInt(e.target.value) || 1)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
              >
                <option value={1}>{isZh ? '在第 1 页最前面插入' : 'Insert at Page 1 (Beginning)'}</option>
                <option value={2}>{isZh ? '在封面后插入 (第 2 页)' : 'Insert after Cover (Page 2)'}</option>
              </select>
            </div>
          </div>
        </div>
      );
    }

    case 'bookmarks-auto-generator': {
      const strategy = options.strategy || 'font-size';
      const minFontSize = options.minFontSize ?? 14;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? 'AI 启发式书签大纲自动生成' : 'Automatic Bookmarks Generator'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '标题检测识别策略' : 'Detection Strategy'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'font-size', label: isZh ? '依据大字号' : 'Font Size' },
                  { id: 'bold', label: isZh ? '依据加粗文本' : 'Bold Text' },
                  { id: 'numbered', label: isZh ? '依据章节目编号' : 'Numbered' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onChange('strategy', s.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      strategy === s.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '最小标题字号判定 (pt)' : 'Min Header Size (pt)'}</span>
                <span className="font-semibold text-primary">{minFontSize} pt</span>
              </div>
              <input
                type="range"
                min="10"
                max="24"
                value={minFontSize}
                onChange={(e) => onChange('minFontSize', parseInt(e.target.value) || 14)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'batch-barcode-injector': {
      const barcodeType = options.barcodeType || 'qrcode';
      const value = options.value || 'https://pdfcraft.com';
      const xPos = options.xPos ?? 0.8;
      const yPos = options.yPos ?? 0.8;
      const width = options.width ?? 80;
      const height = options.height ?? 80;
      const pageRange = options.pageRange || 'all';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '批量条码/二维码注入参数' : 'Barcode Injector'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'qrcode', label: isZh ? 'QR 二维码' : 'QR Code' },
                { id: 'code128', label: 'Code 128' },
                { id: 'ean13', label: 'EAN-13' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => onChange('barcodeType', b.id)}
                  className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                    barcodeType === b.id
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border/60 hover:bg-muted/50'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-foreground font-medium">{isZh ? '编码文本或网址' : 'Barcode Data'}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => onChange('value', e.target.value)}
                placeholder="https://example.com"
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '水平位置 X (0-1)' : 'X Pos (0-1)'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="1"
                  value={xPos}
                  onChange={(e) => onChange('xPos', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '垂直位置 Y (0-1)' : 'Y Pos (0-1)'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="1"
                  value={yPos}
                  onChange={(e) => onChange('yPos', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'signature-ink-optimizer': {
      const threshold = options.threshold ?? 200;
      const inkType = options.inkType || 'auto';
      const contrast = options.contrast ?? 1.5;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '签名墨迹与印章画质优化' : 'Signature Ink Optimizer'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '墨水类型' : 'Ink Type'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'auto', label: isZh ? '智能自适应' : 'Auto' },
                  { id: 'blue', label: isZh ? '蓝墨水笔迹' : 'Blue Ink' },
                  { id: 'black', label: isZh ? '黑墨水印章' : 'Black Ink' },
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
                <span>{isZh ? '背景噪点过滤阈值' : 'Noise Filter Threshold'}</span>
                <span className="font-semibold text-primary">{threshold}</span>
              </div>
              <input
                type="range"
                min="120"
                max="240"
                value={threshold}
                onChange={(e) => onChange('threshold', parseInt(e.target.value) || 200)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '笔画对比度增益' : 'Contrast Booster'}</span>
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

    case 'remove-blank-pages': {
      const threshold = options.threshold ?? 99;
      const filterMode = options.filterMode || 'all';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '空白页智能检测与移除' : 'Remove Blank Pages'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '扫描检测范围' : 'Scan Scope'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'all', label: isZh ? '全部页面' : 'All Pages' },
                  { id: 'even', label: isZh ? '仅偶数背页' : 'Even Backs' },
                  { id: 'odd', label: isZh ? '仅奇数页' : 'Odd Only' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onChange('filterMode', f.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      filterMode === f.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '空白度敏感度阈值' : 'Blankness Threshold'}</span>
                <span className="font-semibold text-primary">{threshold}%</span>
              </div>
              <input
                type="range"
                min="90"
                max="99.9"
                step="0.5"
                value={threshold}
                onChange={(e) => onChange('threshold', parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
              <p className="text-[11px] text-muted-foreground">
                {isZh ? '数值越高容忍的微小噪点越少，推荐 99%' : 'Higher value detects cleaner pages. 99% recommended.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    case 'remove-annotations': {
      const removeAll = options.removeAll ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '清除批注与高亮' : 'Remove Annotations'}
            </label>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{isZh ? '彻底清除全部批注与高亮标记' : 'Remove All Annotations'}</span>
              <input
                type="checkbox"
                checked={removeAll}
                onChange={(e) => onChange('removeAll', e.target.checked)}
                className="w-4 h-4 rounded text-primary"
              />
            </div>
            <p className="text-[11px] text-muted-foreground">
              {isZh ? '将清除高亮线、下划线、删除线、便签附注、自由画笔痕迹和图形注释。' : 'Removes highlights, underlines, sticky notes, and stamps.'}
            </p>
          </div>
        </div>
      );
    }

    case 'edit-pdf': {
      const editMode = options.editMode || 'direct';
      const toolType = options.toolType || 'text';
      const fontSize = options.fontSize ?? 14;
      const strokeColor = options.strokeColor || '#2563eb';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? 'PDF 编辑与批注选项' : 'PDF Editor & Annotation Settings'}
            </label>

            {/* Mode: Direct Text vs Annotator */}
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '编辑核心模式' : 'Editor Mode'}</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'direct', label: isZh ? '文本流直接内联编辑' : 'Direct Text Edit' },
                  { id: 'annotator', label: isZh ? '矢量画板批注模式' : 'Vector Markup Mode' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('editMode', m.id)}
                    className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                      editMode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active tool toolType */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-foreground font-medium">{isZh ? '默认标注工具' : 'Default Annotation Tool'}</label>
              <div className="grid grid-cols-4 gap-1.5 text-xs">
                {[
                  { id: 'text', label: isZh ? '文本框' : 'Text' },
                  { id: 'draw', label: isZh ? '涂鸦笔' : 'Pencil' },
                  { id: 'highlight', label: isZh ? '高亮' : 'Highlight' },
                  { id: 'shapes', label: isZh ? '图形' : 'Shapes' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onChange('toolType', t.id)}
                    className={`py-1.5 rounded-lg border text-center font-medium transition-all ${
                      toolType === t.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font size & Color */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '正文字号' : 'Font Size'}</label>
                <input
                  type="number"
                  min="9"
                  max="48"
                  value={fontSize}
                  onChange={(e) => onChange('fontSize', parseInt(e.target.value, 10) || 14)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '标记颜色' : 'Color'}</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => onChange('strokeColor', e.target.value)}
                    className="w-7 h-7 rounded border border-border cursor-pointer p-0.5"
                  />
                  <span className="font-mono text-muted-foreground text-[11px]">{strokeColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'sign-pdf': {
      const signType = options.signType || 'draw';
      const placement = options.placement || 'bottom-right';
      const pageSize = options.pageSize || 'last';
      const signerName = options.signerName || '';
      const signDate = options.signDate ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '电子签名配置参数' : 'Electronic Signature Settings'}
            </label>

            {/* Signature Type */}
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '签名呈现方式' : 'Signature Type'}</label>
              <div className="grid grid-cols-4 gap-1.5 text-xs">
                {[
                  { id: 'draw', label: isZh ? '手写' : 'Draw' },
                  { id: 'type', label: isZh ? '打字' : 'Type' },
                  { id: 'stamp', label: isZh ? '印章' : 'Stamp' },
                  { id: 'library', label: isZh ? '签名库' : 'Library' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onChange('signType', s.id)}
                    className={`py-1.5 rounded-lg border text-center font-medium transition-all ${
                      signType === s.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Placement preset */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-foreground font-medium">{isZh ? '落款位置' : 'Placement Preset'}</label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {[
                  { id: 'bottom-right', label: isZh ? '右下角落款' : 'Bottom Right' },
                  { id: 'bottom-left', label: isZh ? '左下角落款' : 'Bottom Left' },
                  { id: 'center', label: isZh ? '页面居中' : 'Center' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onChange('placement', p.id)}
                    className={`py-1.5 px-1 rounded-lg border text-center font-medium transition-all ${
                      placement === p.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Page */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '签名页码' : 'Sign Page'}</label>
                <select
                  value={pageSize}
                  onChange={(e) => onChange('pageSize', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value="last">{isZh ? '末页签署' : 'Last Page'}</option>
                  <option value="first">{isZh ? '首页签署' : 'First Page'}</option>
                  <option value="all">{isZh ? '所有页齐缝签署' : 'All Pages'}</option>
                </select>
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '签署人姓名 (可选)' : 'Signer Name'}</label>
                <input
                  type="text"
                  value={signerName}
                  onChange={(e) => onChange('signerName', e.target.value)}
                  placeholder={isZh ? '如 张三 / John Doe' : 'e.g. John Doe'}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>

            {/* Append Date Stamp switch */}
            <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer text-xs pt-1">
              <span>{isZh ? '附带签署日期时间戳' : 'Append Signing Date Stamp'}</span>
              <input
                type="checkbox"
                checked={signDate}
                onChange={(e) => onChange('signDate', e.target.checked)}
                className="rounded text-primary accent-primary"
              />
            </label>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
