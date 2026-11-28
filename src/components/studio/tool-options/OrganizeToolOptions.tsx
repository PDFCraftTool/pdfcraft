'use client';

import React from 'react';
import {
  Scissors,
  Split,
  Layers,
  Grid,
  BookOpen,
  Image,
  CreditCard,
  Columns,
  BookMarked,
  Maximize2,
  FileSpreadsheet,
  Bookmark as BookmarkIcon,
  ListOrdered,
  FileText,
  Palette,
  Info,
} from 'lucide-react';

interface OrganizeToolOptionsProps {
  toolId: string;
  options: Record<string, any>;
  onChange: (key: string, value: any) => void;
  totalPages?: number;
  locale?: string;
}

export function OrganizeToolOptions({
  toolId,
  options,
  onChange,
  totalPages = 1,
  locale = 'en',
}: OrganizeToolOptionsProps) {
  const validLocale = (locale as string) || 'en';
  const isZh = validLocale.toLowerCase().startsWith('zh');

  switch (toolId) {
    case 'split-pdf': {
      const splitMode = options.splitMode || 'ranges';
      const rangeInput = options.rangeInput || '';
      const splitCount = options.splitCount || 2;
      const evenOddMode = options.evenOddMode || 'both';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '拆分模式' : 'Split Mode'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'ranges', label: isZh ? '自定义区间' : 'Custom Ranges', desc: isZh ? '如 1-3, 5-8' : 'e.g. 1-3, 5-8' },
                { id: 'everyN', label: isZh ? '每隔 N 页' : 'Every N Pages', desc: isZh ? '均匀切分' : 'Even split' },
                { id: 'all', label: isZh ? '提取所有单页' : 'All Single Pages', desc: isZh ? '每页独立' : 'Each page separate' },
                { id: 'evenOdd', label: isZh ? '奇偶页拆分' : 'Even / Odd', desc: isZh ? '分离奇偶' : 'Odd / Even' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onChange('splitMode', m.id)}
                  className={`flex flex-col items-start p-2.5 rounded-lg border text-left text-xs transition-colors ${
                    splitMode === m.id
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border/60 hover:bg-muted/50 text-foreground'
                  }`}
                >
                  <span className="font-semibold">{m.label}</span>
                  <span className="text-[10px] text-muted-foreground">{m.desc}</span>
                </button>
              ))}
            </div>

            {splitMode === 'ranges' && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-medium text-foreground">
                  {isZh ? '页码区间表达式' : 'Page Range Expression'}
                </label>
                <input
                  type="text"
                  value={rangeInput}
                  onChange={(e) => onChange('rangeInput', e.target.value)}
                  placeholder={isZh ? '例如: 1-3, 5, 7-10' : 'e.g. 1-3, 5, 7-10'}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <p className="text-[11px] text-muted-foreground">
                  {isZh ? `文档共 ${totalPages} 页，用逗号分隔多个区间` : `Total ${totalPages} pages. Separate with commas`}
                </p>
              </div>
            )}

            {splitMode === 'everyN' && (
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-foreground">{isZh ? '每隔几页拆为一个文档' : 'Pages Per Chunk'}</span>
                  <span className="font-semibold text-primary">{splitCount} {isZh ? '页' : 'pages'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={Math.max(10, totalPages)}
                  value={splitCount}
                  onChange={(e) => onChange('splitCount', parseInt(e.target.value) || 1)}
                  className="w-full accent-primary"
                />
              </div>
            )}

            {splitMode === 'evenOdd' && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-medium text-foreground">{isZh ? '输出范围' : 'Output Target'}</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'both', label: isZh ? '两者都导出' : 'Both' },
                    { id: 'odd', label: isZh ? '仅奇数页' : 'Odd Only' },
                    { id: 'even', label: isZh ? '仅偶数页' : 'Even Only' },
                  ].map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => onChange('evenOddMode', o.id)}
                      className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                        evenOddMode === o.id
                          ? 'border-primary bg-primary/10 text-primary font-medium'
                          : 'border-border/60 hover:bg-muted/50'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    case 'divide-pages': {
      const splitDirection = options.splitDirection || 'vertical';
      const splitRatio = options.splitRatio ?? 0.5;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '分割方向与比例' : 'Divide Direction & Ratio'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onChange('splitDirection', 'vertical')}
                className={`py-2 px-3 text-xs rounded-lg border text-center font-medium ${
                  splitDirection === 'vertical'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border/60 hover:bg-muted/50'
                }`}
              >
                {isZh ? '垂直左右对半' : 'Vertical (Left / Right)'}
              </button>
              <button
                type="button"
                onClick={() => onChange('splitDirection', 'horizontal')}
                className={`py-2 px-3 text-xs rounded-lg border text-center font-medium ${
                  splitDirection === 'horizontal'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border/60 hover:bg-muted/50'
                }`}
              >
                {isZh ? '水平上下对半' : 'Horizontal (Top / Bottom)'}
              </button>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '分割线位置' : 'Split Ratio'}</span>
                <span className="font-semibold text-primary">{Math.round(splitRatio * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.9"
                step="0.05"
                value={splitRatio}
                onChange={(e) => onChange('splitRatio', parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'combine-single-page': {
      const direction = options.direction || 'vertical';
      const spacing = options.spacing ?? 10;
      const backgroundColor = options.backgroundColor || '#ffffff';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '单页拼接排列' : 'Combine Direction'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onChange('direction', 'vertical')}
                className={`py-2 px-3 text-xs rounded-lg border text-center font-medium ${
                  direction === 'vertical'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border/60 hover:bg-muted/50'
                }`}
              >
                {isZh ? '垂直纵向长图' : 'Vertical Stack'}
              </button>
              <button
                type="button"
                onClick={() => onChange('direction', 'horizontal')}
                className={`py-2 px-3 text-xs rounded-lg border text-center font-medium ${
                  direction === 'horizontal'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border/60 hover:bg-muted/50'
                }`}
              >
                {isZh ? '水平横向长图' : 'Horizontal Strip'}
              </button>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '页面间距' : 'Page Spacing'}</span>
                <span className="font-semibold text-primary">{spacing} pt</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={spacing}
                onChange={(e) => onChange('spacing', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
            <div className="flex items-center justify-between pt-2 text-xs">
              <span>{isZh ? '画板底色' : 'Background Color'}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => onChange('backgroundColor', e.target.value)}
                  className="w-7 h-7 rounded border border-border cursor-pointer p-0.5"
                />
                <span className="font-mono text-muted-foreground">{backgroundColor}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'grid-combine': {
      const rows = options.rows ?? 2;
      const cols = options.cols ?? 2;
      const margin = options.margin ?? 20;
      const spacing = options.spacing ?? 10;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '网格行列设置' : 'Grid Dimensions'}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">{isZh ? '行数 (Rows)' : 'Rows'}</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={rows}
                  onChange={(e) => onChange('rows', parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1">{isZh ? '列数 (Cols)' : 'Cols'}</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={cols}
                  onChange={(e) => onChange('cols', parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
                />
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '页边距' : 'Page Margin'}</span>
                <span className="font-semibold text-primary">{margin} pt</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={margin}
                onChange={(e) => onChange('margin', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '单元格间距' : 'Grid Spacing'}</span>
                <span className="font-semibold text-primary">{spacing} pt</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={spacing}
                onChange={(e) => onChange('spacing', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-booklet': {
      const gridMode = options.gridMode || '1x2';
      const paperSize = options.paperSize || 'a4';
      const orientation = options.orientation || 'landscape';
      const rotation = options.rotation || 'none';
      const padding = options.padding ?? 20;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '小册子装订拼版' : 'Booklet Layout'}
            </label>
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground block">{isZh ? '拼版格式' : 'Grid Mode'}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: '1x2', label: isZh ? '1x2 骑马订 (双页并排)' : '1x2 Saddle Stitch' },
                  { id: '2x2', label: isZh ? '2x2 四联微型折页' : '2x2 Mini Folio' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('gridMode', m.id)}
                    className={`py-2 px-2 text-xs rounded-lg border text-center ${
                      gridMode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">{isZh ? '纸张尺寸' : 'Paper Size'}</label>
                <select
                  value={paperSize}
                  onChange={(e) => onChange('paperSize', e.target.value)}
                  className="w-full px-2 py-1.5 text-xs rounded-lg border border-border bg-background"
                >
                  <option value="a4">A4 (210×297mm)</option>
                  <option value="letter">US Letter</option>
                  <option value="a3">A3</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1">{isZh ? '装订纸张方向' : 'Orientation'}</label>
                <select
                  value={orientation}
                  onChange={(e) => onChange('orientation', e.target.value)}
                  className="w-full px-2 py-1.5 text-xs rounded-lg border border-border bg-background"
                >
                  <option value="landscape">{isZh ? '横向 (推荐)' : 'Landscape'}</option>
                  <option value="portrait">{isZh ? '纵向' : 'Portrait'}</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '装订缝留白 (Padding)' : 'Gutter Padding'}</span>
                <span className="font-semibold text-primary">{padding} pt</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={padding}
                onChange={(e) => onChange('padding', parseInt(e.target.value) || 0)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'photo-tiling-prepress': {
      const photoSpec = options.photoSpec || '1-inch';
      const paperSize = options.paperSize || '6-inch';
      const gapPt = options.gapPt ?? 8;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '证件照平铺冲印拼版' : 'Photo Prepress Tiling'}
            </label>
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">{isZh ? '照片规格' : 'Photo Spec'}</label>
              <select
                value={photoSpec}
                onChange={(e) => onChange('photoSpec', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value="1-inch">{isZh ? '1寸证件照 (25×35mm)' : '1 Inch (25×35mm)'}</option>
                <option value="2-inch">{isZh ? '2寸证件照 (35×49mm)' : '2 Inch (35×49mm)'}</option>
                <option value="passport">{isZh ? '护照/签证标准 (33×48mm)' : 'Passport (33×48mm)'}</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">{isZh ? '冲印相纸规格' : 'Photo Paper'}</label>
              <select
                value={paperSize}
                onChange={(e) => onChange('paperSize', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value="6-inch">{isZh ? '6寸相纸 (102×152mm)' : '6 Inch Paper'}</option>
                <option value="a4">{isZh ? 'A4 照片纸' : 'A4 Photo Paper'}</option>
              </select>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '裁切线间距' : 'Cutting Gap'}</span>
                <span className="font-semibold text-primary">{gapPt} pt</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                value={gapPt}
                onChange={(e) => onChange('gapPt', parseInt(e.target.value) || 8)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-lossless-slicer': {
      const pageNumber = options.pageNumber || 1;
      const sliceX = options.sliceX ?? 0.1;
      const sliceY = options.sliceY ?? 0.1;
      const sliceWidth = options.sliceWidth ?? 0.8;
      const sliceHeight = options.sliceHeight ?? 0.8;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '无损切片裁剪范围' : 'Lossless Slicer Area'}
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '水平起点 (X)' : 'Slice X'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="0.9"
                  value={sliceX}
                  onChange={(e) => onChange('sliceX', parseFloat(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '垂直起点 (Y)' : 'Slice Y'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="0.9"
                  value={sliceY}
                  onChange={(e) => onChange('sliceY', parseFloat(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '切片宽度比例' : 'Slice Width'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0.1"
                  max="1"
                  value={sliceWidth}
                  onChange={(e) => onChange('sliceWidth', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '切片高度比例' : 'Slice Height'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0.1"
                  max="1"
                  value={sliceHeight}
                  onChange={(e) => onChange('sliceHeight', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'passport-id-composer': {
      const watermark = options.watermark || (isZh ? '仅供业务办理' : 'For Official Use Only');
      const layout = options.layout || 'single-page';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '证件拼排参数' : 'ID Composer Options'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '防滥用专属水印' : 'Watermark Text'}</label>
              <input
                type="text"
                value={watermark}
                onChange={(e) => onChange('watermark', e.target.value)}
                placeholder={isZh ? '如: 仅供办理XX业务使用' : 'e.g. FOR COPY ONLY'}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-muted-foreground">{isZh ? '排版版面' : 'Layout Mode'}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onChange('layout', 'single-page')}
                  className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                    layout === 'single-page'
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border/60 hover:bg-muted/50'
                  }`}
                >
                  {isZh ? '单页正反面同页' : 'Front & Back (1 Page)'}
                </button>
                <button
                  type="button"
                  onClick={() => onChange('layout', 'two-cards')}
                  className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                    layout === 'two-cards'
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border/60 hover:bg-muted/50'
                  }`}
                >
                  {isZh ? '多卡片标准排列' : 'Multi-Cards Grid'}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-two-column-reflower': {
      const middleGapRatio = options.middleGapRatio ?? 0.5;
      const horizontalReading = options.horizontalReading ?? false;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '双栏文献重排参数' : 'Two-Column Reflow'}
            </label>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '中缝分栏位置' : 'Middle Gap Ratio'}</span>
                <span className="font-semibold text-primary">{Math.round(middleGapRatio * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="0.8"
                step="0.05"
                value={middleGapRatio}
                onChange={(e) => onChange('middleGapRatio', parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            <div className="pt-2 flex items-center justify-between text-xs">
              <span>{isZh ? '横向优先阅读流' : 'Horizontal Reading Flow'}</span>
              <input
                type="checkbox"
                checked={horizontalReading}
                onChange={(e) => onChange('horizontalReading', e.target.checked)}
                className="w-4 h-4 rounded text-primary focus:ring-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-spine-bookbinder': {
      const pageCount = options.pageCount ?? totalPages;
      const paperGsm = options.paperGsm ?? 80;
      const bookTitle = options.bookTitle || 'PDFCraft Book';

      // Spine thickness approximate calculation (mm)
      const spineThicknessMm = ((pageCount / 2) * (paperGsm === 70 ? 0.09 : paperGsm === 80 ? 0.1 : paperGsm === 100 ? 0.12 : 0.15)).toFixed(1);

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '书脊厚度装订计算器' : 'Spine Bookbinder'}
            </label>
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex justify-between items-center text-xs">
              <span className="font-medium text-primary">{isZh ? '预计书脊厚度' : 'Estimated Spine Width'}:</span>
              <span className="font-mono text-base font-bold text-primary">{spineThicknessMm} mm</span>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '书名 (印于书脊)' : 'Book Title'}</label>
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => onChange('bookTitle', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '内页总页数' : 'Page Count'}</label>
                <input
                  type="number"
                  min="4"
                  value={pageCount}
                  onChange={(e) => onChange('pageCount', parseInt(e.target.value) || 4)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '纸张克重 (GSM)' : 'Paper GSM'}</label>
                <select
                  value={paperGsm}
                  onChange={(e) => onChange('paperGsm', parseInt(e.target.value) || 80)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value={70}>{isZh ? '70g 普通道林纸' : '70 GSM Woodfree'}</option>
                  <option value={80}>{isZh ? '80g 标准复印纸' : '80 GSM Standard'}</option>
                  <option value={100}>{isZh ? '100g 加厚纸' : '100 GSM Heavyweight'}</option>
                  <option value={120}>{isZh ? '120g 铜版纸' : '120 GSM Coated'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-page-resizer-uniform': {
      const targetSize = options.targetSize || 'A4';
      const scaleMode = options.scaleMode || 'fit';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '统一页面尺寸参数' : 'Uniform Page Resizer'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '目标标准尺寸' : 'Target Size'}</label>
              <select
                value={targetSize}
                onChange={(e) => onChange('targetSize', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value="A4">A4 (210×297mm)</option>
                <option value="Letter">US Letter (8.5×11in)</option>
                <option value="A3">A3 (297×420mm)</option>
                <option value="A5">A5 (148×210mm)</option>
              </select>
            </div>
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-muted-foreground">{isZh ? '缩放适配模式' : 'Scale Mode'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fit', label: isZh ? '保持比例居中' : 'Fit (Preserve)' },
                  { id: 'fill', label: isZh ? '裁剪填满' : 'Fill' },
                  { id: 'stretch', label: isZh ? '直接拉伸' : 'Stretch' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onChange('scaleMode', s.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      scaleMode === s.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-scratchpad-canvas': {
      const padPosition = options.padPosition || 'right';
      const padSize = options.padSize ?? 200;
      const gridType = options.gridType || 'grid';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '随笔画板扩展区' : 'Scratchpad Extension'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '附加位置' : 'Position'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'right', label: isZh ? '右侧附加' : 'Right' },
                  { id: 'left', label: isZh ? '左侧附加' : 'Left' },
                  { id: 'bottom', label: isZh ? '底部附加' : 'Bottom' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onChange('padPosition', p.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      padPosition === p.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs text-muted-foreground">{isZh ? '底纹网格类型' : 'Grid Type'}</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'grid', label: isZh ? '方格纸' : 'Square Grid' },
                  { id: 'dots', label: isZh ? '点阵纸' : 'Dot Matrix' },
                  { id: 'lines', label: isZh ? '横线纸' : 'Ruled Lines' },
                  { id: 'blank', label: isZh ? '纯白空白' : 'Blank' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => onChange('gridType', g.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      gridType === g.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span>{isZh ? '扩展区宽度 (pt)' : 'Pad Width (pt)'}</span>
                <span className="font-semibold text-primary">{padSize} pt</span>
              </div>
              <input
                type="range"
                min="100"
                max="400"
                value={padSize}
                onChange={(e) => onChange('padSize', parseInt(e.target.value) || 200)}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'table-of-contents': {
      const title = options.title || (isZh ? '目 录' : 'Table of Contents');
      const fontSize = options.fontSize ?? 12;
      const fontFamily = options.fontFamily || 'helv';
      const addBookmark = options.addBookmark ?? true;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '目录生成选项' : 'Table of Contents'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">{isZh ? '目录标题' : 'TOC Title'}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => onChange('title', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '字体系列' : 'Font'}</label>
                <select
                  value={fontFamily}
                  onChange={(e) => onChange('fontFamily', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value="helv">{isZh ? 'Helvetica / 微软雅黑' : 'Helvetica / Sans-Serif'}</option>
                  <option value="times">{isZh ? 'Times New Roman / 宋体' : 'Times New Roman / Serif'}</option>
                  <option value="courier">{isZh ? 'Courier 等宽' : 'Courier Monospace'}</option>
                </select>
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '正文字号' : 'Font Size'}</label>
                <input
                  type="number"
                  min="9"
                  max="24"
                  value={fontSize}
                  onChange={(e) => onChange('fontSize', parseInt(e.target.value) || 12)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs">
              <span>{isZh ? '同步生成 PDF 侧边栏书签' : 'Generate PDF Outline Bookmark'}</span>
              <input
                type="checkbox"
                checked={addBookmark}
                onChange={(e) => onChange('addBookmark', e.target.checked)}
                className="w-4 h-4 rounded text-primary"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'bookmark': {
      const title = options.title || '';
      const pageNumber = options.pageNumber ?? 1;
      const level = options.level ?? 1;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '添加书签/大纲项' : 'Add Bookmark'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">{isZh ? '书签名称' : 'Bookmark Title'}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => onChange('title', e.target.value)}
                placeholder={isZh ? '例如: 第一章 绪论' : 'e.g. Chapter 1'}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '目标页码' : 'Target Page'}</label>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={pageNumber}
                  onChange={(e) => onChange('pageNumber', parseInt(e.target.value) || 1)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '层级深度' : 'Level'}</label>
                <select
                  value={level}
                  onChange={(e) => onChange('level', parseInt(e.target.value) || 1)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value={1}>{isZh ? '1级大纲 (章)' : 'Level 1'}</option>
                  <option value={2}>{isZh ? '2级大纲 (节)' : 'Level 2'}</option>
                  <option value={3}>{isZh ? '3级大纲 (小节)' : 'Level 3'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'edit-metadata': {
      const title = options.title || '';
      const author = options.author || '';
      const subject = options.subject || '';
      const keywords = options.keywords || '';
      const creator = options.creator || 'PDFCraft';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '编辑 PDF 元数据' : 'Edit PDF Metadata'}
            </label>
            <div className="space-y-2 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '文档标题 (Title)' : 'Title'}</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => onChange('title', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '作者 (Author)' : 'Author'}</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => onChange('author', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '主题描述 (Subject)' : 'Subject'}</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => onChange('subject', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '关键词 (Keywords, 逗号分隔)' : 'Keywords'}</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => onChange('keywords', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '创建工具 (Creator)' : 'Creator'}</label>
                <input
                  type="text"
                  value={creator}
                  onChange={(e) => onChange('creator', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'organize-pdf': {
      const sortMode = options.sortMode || 'original';
      const customOrder = options.customOrder || '';
      const rotateAll = options.rotateAll ?? 0;
      const deletePages = options.deletePages || '';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '页面组织与排序参数' : 'Page Organization Settings'}
            </label>
            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground block">{isZh ? '页面重排顺序' : 'Page Reorder Sequence'}</label>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {[
                  { id: 'original', label: isZh ? '保持原序' : 'Original Order' },
                  { id: 'reverse', label: isZh ? '逆序倒排' : 'Reverse All' },
                  { id: 'odd-first', label: isZh ? '奇数页在前' : 'Odd Pages First' },
                  { id: 'even-first', label: isZh ? '偶数页在前' : 'Even Pages First' },
                  { id: 'custom', label: isZh ? '自定义序列' : 'Custom Sequence' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('sortMode', m.id)}
                    className={`py-1.5 px-2.5 rounded-lg border text-left font-medium transition-all ${
                      sortMode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              {sortMode === 'custom' && (
                <div className="pt-1.5">
                  <input
                    type="text"
                    value={customOrder}
                    onChange={(e) => onChange('customOrder', e.target.value)}
                    placeholder={isZh ? '如 1, 3, 2, 5, 4 或 1-3, 5' : 'e.g. 1, 3, 2, 5, 4 or 1-3, 5'}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '统一旋转页面' : 'Rotate All Pages'}</label>
                <select
                  value={rotateAll}
                  onChange={(e) => onChange('rotateAll', parseInt(e.target.value, 10) || 0)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value={0}>{isZh ? '不旋转 (0°)' : 'No Rotation (0°)'}</option>
                  <option value={90}>{isZh ? '顺时针 90°' : 'Clockwise 90°'}</option>
                  <option value={180}>{isZh ? '旋转 180°' : 'Rotate 180°'}</option>
                  <option value={270}>{isZh ? '逆时针 90° (270°)' : 'Counter-Clockwise 90°'}</option>
                </select>
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '剔除页码 (可选)' : 'Delete Pages (Optional)'}</label>
                <input
                  type="text"
                  value={deletePages}
                  onChange={(e) => onChange('deletePages', e.target.value)}
                  placeholder={isZh ? '如 2, 4' : 'e.g. 2, 4'}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-multi-tool': {
      const reversePages = options.reversePages ?? false;
      const stripBlank = options.stripBlank ?? false;
      const batchRotate = options.batchRotate ?? 0;
      const insertBlank = options.insertBlank || 'none';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '多功能综合任务流水线' : 'Multi-Task Batch Pipeline'}
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                <span>{isZh ? '页面序列逆向倒序翻转' : 'Reverse Page Sequence'}</span>
                <input
                  type="checkbox"
                  checked={reversePages}
                  onChange={(e) => onChange('reversePages', e.target.checked)}
                  className="rounded text-primary accent-primary"
                />
              </label>
              <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                <span>{isZh ? '智能识别并剔除纯空白页' : 'Auto-Strip Blank Pages'}</span>
                <input
                  type="checkbox"
                  checked={stripBlank}
                  onChange={(e) => onChange('stripBlank', e.target.checked)}
                  className="rounded text-primary accent-primary"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '批量旋转' : 'Batch Rotate'}</label>
                <select
                  value={batchRotate}
                  onChange={(e) => onChange('batchRotate', parseInt(e.target.value, 10) || 0)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value={0}>{isZh ? '保持角度 (0°)' : 'Keep Angle (0°)'}</option>
                  <option value={90}>+90°</option>
                  <option value={180}>180°</option>
                  <option value={270}>+270° (-90°)</option>
                </select>
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '插入空白隔离页' : 'Insert Blank Pages'}</label>
                <select
                  value={insertBlank}
                  onChange={(e) => onChange('insertBlank', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-background"
                >
                  <option value="none">{isZh ? '不插入' : 'None'}</option>
                  <option value="every-page">{isZh ? '每页之后插入' : 'After Every Page'}</option>
                  <option value="at-end">{isZh ? '仅文档末尾追加' : 'At Document End'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'rotate-custom': {
      const angle = options.angle ?? 90;
      const direction = options.direction || 'clockwise';
      const scope = options.scope || 'all';
      const customPages = options.customPages || '';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '自定义旋转参数' : 'Custom Rotation Settings'}
            </label>

            {/* Quick angle buttons */}
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '快捷旋转预设' : 'Preset Angles'}</label>
              <div className="grid grid-cols-4 gap-1.5 text-xs">
                {[90, 180, 270, 0].map((deg) => (
                  <button
                    key={deg}
                    type="button"
                    onClick={() => onChange('angle', deg)}
                    className={`py-1.5 rounded-lg border text-center font-medium transition-all ${
                      angle === deg
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {deg === 0 ? (isZh ? '重置 0°' : 'Reset 0°') : `${deg}°`}
                  </button>
                ))}
              </div>
            </div>

            {/* Stepless Angle Slider */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{isZh ? '精确连续角度微调' : 'Fine-Tune Angle'}</span>
                <span className="text-primary font-bold">{angle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={angle}
                onChange={(e) => onChange('angle', parseInt(e.target.value, 10) || 0)}
                className="w-full accent-primary"
              />
            </div>

            {/* Rotation Direction */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              {[
                { id: 'clockwise', label: isZh ? '顺时针 ↻' : 'Clockwise ↻' },
                { id: 'counter-clockwise', label: isZh ? '逆时针 ↺' : 'Counter-Clockwise ↺' },
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => onChange('direction', d.id)}
                  className={`py-1.5 px-2 rounded-lg border text-center font-medium transition-all ${
                    direction === d.id
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-border text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Rotation Scope */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-foreground font-medium">{isZh ? '作用页面范围' : 'Apply Scope'}</label>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {[
                  { id: 'all', label: isZh ? '所有页面' : 'All Pages' },
                  { id: 'odd', label: isZh ? '仅奇数页' : 'Odd Pages Only' },
                  { id: 'even', label: isZh ? '仅偶数页' : 'Even Pages Only' },
                  { id: 'custom', label: isZh ? '自定义区间' : 'Custom Pages' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onChange('scope', s.id)}
                    className={`py-1.5 px-2 rounded-lg border text-center font-medium transition-all ${
                      scope === s.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              {scope === 'custom' && (
                <div className="pt-1">
                  <input
                    type="text"
                    value={customPages}
                    onChange={(e) => onChange('customPages', e.target.value)}
                    placeholder={isZh ? '如 1-3, 5' : 'e.g. 1-3, 5'}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    case 'overlay-pdf': {
      const mode = options.mode || 'overlay';
      const pageRange = options.pageRange || 'all';
      const loop = options.loop ?? true;
      const opacity = options.opacity ?? 100;
      const scale = options.scale ?? 100;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '覆叠与垫底图层参数' : 'Overlay & Underlay Settings'}
            </label>

            {/* Mode: Overlay vs Underlay */}
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '图层合成位置' : 'Layer Placement'}</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'overlay', label: isZh ? '前景覆叠 (印章/公文头)' : 'Foreground Overlay' },
                  { id: 'underlay', label: isZh ? '背景垫底 (底纹/暗记)' : 'Background Underlay' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('mode', m.id)}
                    className={`py-2 px-2.5 rounded-lg border text-center font-medium transition-all ${
                      mode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Opacity slider */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{isZh ? '图层不透明度' : 'Layer Opacity'}</span>
                <span className="text-primary font-bold">{opacity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={opacity}
                onChange={(e) => onChange('opacity', parseInt(e.target.value, 10) || 100)}
                className="w-full accent-primary"
              />
            </div>

            {/* Scale slider */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{isZh ? '图层缩放比例' : 'Layer Scale'}</span>
                <span className="text-primary font-bold">{scale}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="150"
                step="5"
                value={scale}
                onChange={(e) => onChange('scale', parseInt(e.target.value, 10) || 100)}
                className="w-full accent-primary"
              />
            </div>

            {/* Loop layer switch */}
            <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer text-xs">
              <span>{isZh ? '当覆叠层页数少于底本时循环覆叠' : 'Loop overlay if fewer pages'}</span>
              <input
                type="checkbox"
                checked={loop}
                onChange={(e) => onChange('loop', e.target.checked)}
                className="rounded text-primary accent-primary"
              />
            </label>

            {/* Target page range */}
            <div className="space-y-1 pt-1">
              <label className="text-xs text-foreground font-medium">{isZh ? '目标页面范围' : 'Target Page Scope'}</label>
              <input
                type="text"
                value={pageRange}
                onChange={(e) => onChange('pageRange', e.target.value)}
                placeholder={isZh ? '留空为全部，或如 1-5' : 'Empty for all, or e.g. 1-5'}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'compare-pdfs': {
      const compareMode = options.compareMode || 'side-by-side';
      const checkText = options.checkText ?? true;
      const checkStyle = options.checkStyle ?? true;
      const ignoreHeaderFooter = options.ignoreHeaderFooter ?? false;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '文档差异对比规则' : 'Document Comparison Rules'}
            </label>

            {/* Comparison view mode */}
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '对比呈现方式' : 'Diff Presentation Mode'}</label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {[
                  { id: 'side-by-side', label: isZh ? '并排对照' : 'Side-by-Side' },
                  { id: 'overlay-heatmap', label: isZh ? '视觉热力' : 'Visual Overlay' },
                  { id: 'summary-report', label: isZh ? '差异报告' : 'Diff Summary' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChange('compareMode', m.id)}
                    className={`py-1.5 px-1.5 rounded-lg border text-center font-medium transition-all ${
                      compareMode === m.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Diff scopes */}
            <div className="space-y-2 text-xs pt-1">
              <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                <span>{isZh ? '检测正文文字内容变动 (增删改)' : 'Compare Text Content (Add/Del/Mod)'}</span>
                <input
                  type="checkbox"
                  checked={checkText}
                  onChange={(e) => onChange('checkText', e.target.checked)}
                  className="rounded text-primary accent-primary"
                />
              </label>
              <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                <span>{isZh ? '检测字体字号排版与样式变动' : 'Compare Typography & Formatting'}</span>
                <input
                  type="checkbox"
                  checked={checkStyle}
                  onChange={(e) => onChange('checkStyle', e.target.checked)}
                  className="rounded text-primary accent-primary"
                />
              </label>
              <label className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                <span>{isZh ? '自动忽略页眉页脚与动态页码' : 'Ignore Headers, Footers & Page Nums'}</span>
                <input
                  type="checkbox"
                  checked={ignoreHeaderFooter}
                  onChange={(e) => onChange('ignoreHeaderFooter', e.target.checked)}
                  className="rounded text-primary accent-primary"
                />
              </label>
            </div>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
