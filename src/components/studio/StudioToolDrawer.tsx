'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  Loader2,
  SlidersHorizontal,
  Download,
  Lock,
  Unlock,
  Files,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Shield,
  FileText,
  Upload,
  Eye,
  EyeOff,
  Grid,
  Layers,
  Sparkles,
  Maximize2,
  Clock,
  Printer,
  FileCheck2,
  Image as ImageIcon,
  Type,
  Palette,
  Compass,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  type StudioToolId,
  normalizeStudioToolId,
  findStudioToolConfig,
  getToolExecutionType,
  ZERO_CONFIG_TOOL_IDS,
} from './studio-processors';
import { getToolContent } from '@/config/tool-content';
import type { Locale } from '@/lib/i18n/config';
import { OrganizeToolOptions } from './tool-options/OrganizeToolOptions';
import { EditAnnotateToolOptions } from './tool-options/EditAnnotateToolOptions';
import { SecurityToolOptions } from './tool-options/SecurityToolOptions';
import { OptimizeRepairToolOptions } from './tool-options/OptimizeRepairToolOptions';
import { ExportToolOptions } from './tool-options/ExportToolOptions';
import { ImportAppendToolOptions } from './tool-options/ImportAppendToolOptions';

export const getToolDefaultOptions = (id: string, isZh: boolean = false): Record<string, any> => {
  switch (id) {
    case 'split-pdf':
      return { splitMode: 'ranges', rangeInput: '', splitCount: 2, evenOddMode: 'both' };
    case 'divide-pages':
      return { splitDirection: 'vertical', splitRatio: 0.5 };
    case 'combine-single-page':
      return { direction: 'vertical', spacing: 10, backgroundColor: '#ffffff' };
    case 'grid-combine':
      return { rows: 2, cols: 2, margin: 20, spacing: 10 };
    case 'pdf-booklet':
      return { gridMode: '1x2', paperSize: 'a4', orientation: 'landscape', rotation: 'none', padding: 20 };
    case 'photo-tiling-prepress':
      return { photoSpec: '1-inch', paperSize: '6-inch', gapPt: 8 };
    case 'pdf-lossless-slicer':
      return { pageNumber: 1, sliceX: 0.1, sliceY: 0.1, sliceWidth: 0.8, sliceHeight: 0.8 };
    case 'passport-id-composer':
      return { watermark: isZh ? '仅供业务办理' : 'For Official Use Only', layout: 'single-page' };
    case 'pdf-two-column-reflower':
      return { middleGapRatio: 0.5, horizontalReading: false };
    case 'pdf-spine-bookbinder':
      return { pageCount: 100, paperGsm: 80, bookTitle: 'PDFCraft Book' };
    case 'pdf-page-resizer-uniform':
      return { targetSize: 'A4', scaleMode: 'fit' };
    case 'pdf-scratchpad-canvas':
      return { padPosition: 'right', padSize: 200, gridType: 'grid' };
    case 'table-of-contents':
      return { title: isZh ? '目 录' : 'Table of Contents', fontSize: 12, fontFamily: 'helv', addBookmark: true };
    case 'bookmark':
      return { title: '', pageNumber: 1, level: 1 };
    case 'edit-metadata':
      return { title: '', author: '', subject: '', keywords: '', creator: 'PDFCraft' };
    case 'text-color':
      return { color: '#0000ff', mode: 'dark', threshold: 128 };
    case 'background-color':
      return { color: '#fdf6e2', opacity: 0.8, mode: 'replace-white' };
    case 'interactive-toc-generator':
      return { title: isZh ? '交互式目录' : 'Table of Contents', insertIndex: 1 };
    case 'bookmarks-auto-generator':
      return { strategy: 'font-size', minFontSize: 14 };
    case 'batch-barcode-injector':
      return { barcodeType: 'qrcode', value: 'https://pdfcraft.com', xPos: 0.8, yPos: 0.8, width: 80, height: 80, pageRange: 'all' };
    case 'signature-ink-optimizer':
      return { threshold: 200, inkType: 'auto', contrast: 1.5 };
    case 'remove-blank-pages':
      return { threshold: 99, filterMode: 'all' };
    case 'remove-annotations':
      return { removeAll: true };
    case 'sanitize-pdf':
    case 'deep-sanitize':
      return {
        removeJavaScript: true,
        removeAttachments: true,
        removeLinks: true,
        flattenForms: true,
        removeMetadata: true,
        removeAnnotations: false,
      };
    case 'find-and-redact':
    case 'redact-pdf':
      return { searchTermsInput: '', caseSensitive: false, wholeWord: false, useRegex: false, redactionColor: '#000000', replacementText: '' };
    case 'smart-data-redactor':
      return { idRedact: true, phoneRedact: true, emailRedact: true, customKeywords: '' };
    case 'change-permissions':
      return { allowPrinting: true, allowCopying: false, allowModifying: false, allowAnnotating: false, ownerPassword: '' };
    case 'digital-sign-pdf':
      return { reason: isZh ? '我已仔细审核并签署此文档' : 'I have reviewed and approved this document', location: '', contactInfo: '', enableVisible: true, sigPage: 1 };
    case 'cert-cryptor':
      return { sealPos: 'bottom-right', waxColor: 'red' };
    case 'pdf-signature-anchor-helper':
      return { pageNumber: 1, anchorX: 0.8, anchorY: 0.8, anchorLabel: isZh ? '签署人请在此处签名' : 'Please Sign Here' };
    case 'linearize-pdf':
      return { useObjectStreams: true };
    case 'deskew-pdf':
    case 'pdf-deskew-aligner':
      return { threshold: 10, dpi: 150 };
    case 'pdf-to-pdfa':
      return { level: '2b', embedFonts: true, flattenTransparency: true };
    case 'font-to-outline':
      return { dpi: 300, preserveSelectableText: false };
    case 'ocg-manager':
      return { layerAction: 'remove-hidden' };
    case 'eink-optimizer':
      return { contrastOffset: 15, dilationAmount: 1 };
    case 'batch-watermark-remover':
      return { watermarkText: isZh ? '机密' : 'CONFIDENTIAL', removeImages: true };
    case 'dead-link-debugger':
      return { action: 'remove-broken' };
    case 'handwriting-ink-contrast-booster':
      return { threshold: 180, contrast: 1.8, inkType: 'pen' };
    case 'pdf-to-markdown':
      return { includePageNumbers: false, preserveLineBreaks: true, pageRange: '' };
    case 'pdf-to-json':
      return { includeText: true, includeMetadata: true, includePageInfo: true, includeOutline: true, prettyPrint: true, pageRange: '' };
    case 'pdf-to-tiff':
      return { colorMode: 'color', compression: 'packbits', dpi: 150 };
    case 'pdf-to-svg':
      return { scale: 2, pageRange: '' };
    case 'pdf-to-cbz':
      return { title: '', series: '', format: 'jpg', quality: 0.85, manga: 'No' };
    case 'pdf-to-pptx':
      return { dpi: 150 };
    case 'extract-images':
      return { minWidth: 100, minHeight: 100 };
    case 'extract-tables':
      return { format: 'xlsx', minColumns: 2, minRows: 2, includePageNumbers: true };
    case 'annotation-exporter':
      return { format: 'markdown', incHighlights: true, incNotes: true, incUnderlines: true };
    case 'global-invoice-parser':
      return { targetCurrency: 'USD', customRate: 1.0 };
    case 'pdf-to-slide':
      return { themeColor: '#6366f1' };
    case 'pdf-to-zip':
      return { compressionLevel: 6 };
    case 'markdown-to-pdf':
      return { pageSize: 'a4', theme: 'github', gfm: true, syntaxHighlight: true };
    case 'json-to-pdf':
      return { pageSize: 'A4', fontSize: 11, indentSpaces: 2, showLineNumbers: true };
    case 'txt-to-pdf':
      return { fontSize: 12, lineHeight: 1.5, fontId: 'helvetica' };
    case 'email-to-pdf':
      return { includeCcBcc: true, includeAttachments: true };
    case 'cbz-to-pdf':
      return { quality: 0.85, maintainAspectRatio: true };
    case 'djvu-to-pdf':
      return { dpi: 150 };
    case 'psd-to-pdf':
      return { margin: 36, centerImage: true, scaleToFit: true };
    case 'organize-pdf':
      return { sortMode: 'original', customOrder: '', rotateAll: 0, deletePages: '' };
    case 'pdf-multi-tool':
      return { reversePages: false, stripBlank: false, batchRotate: 0, insertBlank: 'none' };
    case 'rotate-custom':
      return { angle: 90, direction: 'clockwise', scope: 'all', customPages: '' };
    case 'overlay-pdf':
      return { mode: 'overlay', pageRange: 'all', loop: true, opacity: 100, scale: 100 };
    case 'compare-pdfs':
      return { compareMode: 'side-by-side', checkText: true, checkStyle: true, ignoreHeaderFooter: false };
    case 'edit-pdf':
      return { editMode: 'direct', toolType: 'text', fontSize: 14, strokeColor: '#2563eb' };
    case 'sign-pdf':
      return { signType: 'draw', placement: 'bottom-right', pageSize: 'last', signerName: '', signDate: true };
    case 'view-metadata':
      return { exportFormat: 'json' };
    case 'add-attachments':
      return { attachmentLevel: 'document', targetPage: 1, description: '' };
    case 'extract-attachments':
      return { scope: 'all', format: 'zip' };
    case 'edit-attachments':
      return { action: 'view-delete', removeAll: false };
    case 'ocr-pdf':
      return { language: 'chi_sim', outputFormat: 'searchable-pdf', pageScope: 'all', deskew: true, preserveLayout: true };
    default:
      return {};
  }
};

interface StudioToolDrawerProps {
  toolId: StudioToolId | null;
  onClose: () => void;
  onApply: (toolId: StudioToolId, options: Record<string, any>) => Promise<void>;
  onExport?: (toolId: StudioToolId, options: Record<string, any>) => Promise<void>;
  isApplying: boolean;
  locale?: string;
  availableDocuments?: Array<{ id: string; name: string; file: File; currentBlob: Blob }>;
  totalPages?: number;
}

export const StudioToolDrawer: React.FC<StudioToolDrawerProps> = ({
  toolId,
  onClose,
  onApply,
  onExport,
  isApplying,
  locale = 'en',
  availableDocuments = [],
  totalPages = 1,
}) => {
  const validLocale = (locale as Locale) || 'en';
  const isZh = typeof validLocale === 'string' && validLocale.toLowerCase().startsWith('zh');

  // Dynamic tool-specific options (aligned across all 67+ tools)
  const [dynamicOptions, setDynamicOptions] = useState<Record<string, any>>({});
  const handleDynamicOptionChange = (key: string, value: any) => {
    setDynamicOptions((prev) => ({ ...prev, [key]: value }));
  };

  // ==========================================
  // Form States - 100% Aligned with standalone tools
  // ==========================================

  // 1. Rotate PDF (Full options: Preset + Stepless Angle + Scope + Custom Pages)
  const [rotateMode, setRotateMode] = useState<'preset' | 'stepless'>('preset');
  const [rotateAngle, setRotateAngle] = useState<number>(90);
  const [steplessAngle, setSteplessAngle] = useState<number>(0);
  const [rotateScope, setRotateScope] = useState<'all' | 'odd' | 'even' | 'custom'>('all');
  const [rotateCustomPages, setRotateCustomPages] = useState<string>('');

  // 2. Watermark (Full options: Text/Image + 9-grid/Custom Position + Tile Repeat + Font Size + Color + Opacity + Angle + Flatten)
  const [watermarkType, setWatermarkType] = useState<'text' | 'image'>('text');
  const [watermarkText, setWatermarkText] = useState<string>('CONFIDENTIAL');
  const [watermarkFontSize, setWatermarkFontSize] = useState<number>(48);
  const [watermarkColorHex, setWatermarkColorHex] = useState<string>('#e11d48');
  const [watermarkOpacity, setWatermarkOpacity] = useState<number>(0.3);
  const [watermarkAngle, setWatermarkAngle] = useState<number>(45);
  const [watermarkPosition, setWatermarkPosition] = useState<string>('center');
  const [watermarkTile, setWatermarkTile] = useState<boolean>(false);
  const [watermarkScope, setWatermarkScope] = useState<'all' | 'odd' | 'even' | 'custom'>('all');
  const [watermarkCustomPages, setWatermarkCustomPages] = useState<string>('');
  const [watermarkImageFile, setWatermarkImageFile] = useState<File | null>(null);
  const [watermarkImageScale, setWatermarkImageScale] = useState<number>(50);

  // 3. Compress PDF (Full options: Quality Level + Algorithm + Optimize Images + Remove Metadata + DPI)
  const [compressQuality, setCompressQuality] = useState<'low' | 'medium' | 'high'>('medium');
  const [compressOptimizeImages, setCompressOptimizeImages] = useState<boolean>(true);
  const [compressRemoveMetadata, setCompressRemoveMetadata] = useState<boolean>(true);
  const [compressDpi, setCompressDpi] = useState<number>(150);

  // 4. Page Numbers (Full options: 6 Positions + Format + Custom Format + Start Number + Font Size + Color + Skip First Page + Odd/Even Mode)
  const [pageNumberPos, setPageNumberPos] = useState<
    'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-center' | 'top-right' | 'top-left'
  >('bottom-center');
  const [pageNumberFormat, setPageNumberFormat] = useState<'number' | 'page-of-total' | 'roman' | 'custom'>('page-of-total');
  const [pageNumberCustomFormat, setPageNumberCustomFormat] = useState<string>('Page {page} of {total}');
  const [pageNumberStart, setPageNumberStart] = useState<number>(1);
  const [pageNumberFontSize, setPageNumberFontSize] = useState<number>(11);
  const [pageNumberColor, setPageNumberColor] = useState<string>('#4b5563');
  const [pageNumberSkipFirst, setPageNumberSkipFirst] = useState<boolean>(false);
  const [pageNumberOddEvenDifferent, setPageNumberOddEvenDifferent] = useState<boolean>(false);

  // 5. Delete Pages (Full options: Page string input + quick buttons)
  const [deletePagesInput, setDeletePagesInput] = useState<string>('1');

  // 6. Extract Pages (Full options: Page range input + quick preset buttons + mode)
  const [extractPagesInput, setExtractPagesInput] = useState<string>('1');

  // 7. Add Blank Page (Full options: Insert position + Page Count)
  const [blankPagePos, setBlankPagePos] = useState<'first' | 'last' | 'after-current'>('last');
  const [blankPageCount, setBlankPageCount] = useState<number>(1);

  // 8. Crop PDF (Full options: Apply to All / Current + 4-side Margins + Presets)
  const [cropApplyToAll, setCropApplyToAll] = useState<boolean>(true);
  const [cropMarginTop, setCropMarginTop] = useState<number>(20);
  const [cropMarginBottom, setCropMarginBottom] = useState<number>(20);
  const [cropMarginLeft, setCropMarginLeft] = useState<number>(20);
  const [cropMarginRight, setCropMarginRight] = useState<number>(20);
  const [cropUniform, setCropUniform] = useState<boolean>(true);

  // 9. Encrypt PDF (Full options: User Password + Owner Password + Granular Permissions checkboxes)
  const [userPassword, setUserPassword] = useState<string>('');
  const [ownerPassword, setOwnerPassword] = useState<string>('');
  const [allowPrinting, setAllowPrinting] = useState<boolean>(true);
  const [allowCopying, setAllowCopying] = useState<boolean>(true);
  const [allowAnnotating, setAllowAnnotating] = useState<boolean>(true);
  const [allowFillingForms, setAllowFillingForms] = useState<boolean>(true);
  const [allowModifying, setAllowModifying] = useState<boolean>(false);

  // 10. Decrypt / Remove Restrictions
  const [decryptPassword, setDecryptPassword] = useState<string>('');
  const [showDecryptPassword, setShowDecryptPassword] = useState<boolean>(false);

  // 11. Header & Footer (Full options: Left, Center, Right inputs + Font size + Skip First Page)
  const [headerLeft, setHeaderLeft] = useState<string>('');
  const [headerCenter, setHeaderCenter] = useState<string>('');
  const [headerRight, setHeaderRight] = useState<string>('');
  const [footerLeft, setFooterLeft] = useState<string>('');
  const [footerCenter, setFooterCenter] = useState<string>('');
  const [footerRight, setFooterRight] = useState<string>('');
  const [hfFontSize, setHfFontSize] = useState<number>(10);
  const [hfSkipFirstPage, setHfSkipFirstPage] = useState<boolean>(false);

  // 12. Stamps (Full options: Presets + Custom text + Opacity + Position)
  const [selectedStamp, setSelectedStamp] = useState<string>('CONFIDENTIAL');
  const [stampOpacity, setStampOpacity] = useState<number>(0.7);
  const [stampPosition, setStampPosition] = useState<'center' | 'top-right' | 'bottom-right'>('center');

  // 13. Append / Merge files
  const [appendFiles, setAppendFiles] = useState<File[]>([]);
  const moveAppendFile = (index: number, direction: -1 | 1) => {
    setAppendFiles((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  // 14. N-Up PDF (Full options: Pages per sheet + Add border + Orientation + Page Size)
  const [nUpPages, setNUpPages] = useState<2 | 4 | 9 | 16>(2);
  const [nUpBorder, setNUpBorder] = useState<boolean>(false);
  const [nUpOrientation, setNUpOrientation] = useState<'auto' | 'portrait' | 'landscape'>('auto');
  const [nUpPageSize, setNUpPageSize] = useState<'A4' | 'Letter' | 'A3'>('A4');

  // 15. Posterize PDF (Full options: Grid + Overlap Margin + Page Size)
  const [posterizeGrid, setPosterizeGrid] = useState<'2x2' | '3x3' | '2x1' | '1x2'>('2x2');
  const [posterizeOverlap, setPosterizeOverlap] = useState<number>(0);
  const [posterizePageSize, setPosterizePageSize] = useState<'A4' | 'Letter'>('A4');

  // 16. Fix Page Size / Page Dimensions (Full options: Preset + Scale Mode + Orientation)
  const [pageSizePreset, setPageSizePreset] = useState<'a4' | 'letter' | 'a3' | 'a5' | 'envelope-10'>('a4');
  const [pageSizeScaleMode, setPageSizeScaleMode] = useState<'fit' | 'fill' | 'stretch'>('fit');
  const [pageSizeOrientation, setPageSizeOrientation] = useState<'auto' | 'portrait' | 'landscape'>('auto');

  // 17. Page Labels (Full options: Style + Prefix + Start Value + Page Range)
  const [labelStyle, setLabelStyle] = useState<'D' | 'R' | 'r' | 'A' | 'a'>('D');
  const [labelPrefix, setLabelPrefix] = useState<string>('');
  const [labelStartValue, setLabelStartValue] = useState<number>(1);
  const [labelRange, setLabelRange] = useState<string>('');

  // 18. Timestamp TSA (Full options: Server selection)
  const [tsaServer, setTsaServer] = useState<string>('MeSign');

  // 19. Rasterize PDF (Full options: DPI + Color/Grayscale)
  const [rasterizeDpi, setRasterizeDpi] = useState<number>(150);
  const [rasterizeGrayscale, setRasterizeGrayscale] = useState<boolean>(false);

  // 20. OCR PDF (Full options: Language selection + Output Format + Enhance contrast)
  const [ocrLanguage, setOcrLanguage] = useState<'chi_sim' | 'eng' | 'chi_tra' | 'jpn' | 'kor' | 'fra' | 'deu'>(isZh ? 'chi_sim' : 'eng');
  const [ocrOutputFormat, setOcrOutputFormat] = useState<'searchable-pdf' | 'text' | 'markdown'>('searchable-pdf');
  const [ocrEnhanceContrast, setOcrEnhanceContrast] = useState<boolean>(true);

  // 21. Export options (Images / Docx / Conversions)
  const [exportImageFormat, setExportImageFormat] = useState<'jpg' | 'png' | 'webp'>('jpg');
  const [exportImageQuality, setExportImageQuality] = useState<number>(90);
  const [exportDpi, setExportDpi] = useState<number>(150);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!toolId) return null;

  const normId = normalizeStudioToolId(toolId);
  const currentToolConfig = findStudioToolConfig(toolId);
  const localizedContent = getToolContent(validLocale, normId);

  const title = localizedContent?.title || currentToolConfig?.name || (isZh ? '配置选项' : 'Options');
  const description = localizedContent?.metaDescription || currentToolConfig?.description || '';
  const executionType = getToolExecutionType(normId);

  const parsePageNumbers = (inputStr: string): number[] => {
    const pages = inputStr
      .split(',')
      .flatMap((part) => {
        const range = part.trim().split('-');
        if (range.length === 2) {
          const start = parseInt(range[0], 10);
          const end = parseInt(range[1], 10);
          if (!isNaN(start) && !isNaN(end) && start <= end) {
            return Array.from({ length: Math.min(end - start + 1, 1000) }, (_, i) => start + i);
          }
        }
        const p = parseInt(part.trim(), 10);
        return isNaN(p) ? [] : [p];
      })
      .filter((n) => n > 0);
    return Array.from(new Set(pages));
  };

  const hexToRgbRatio = (hex: string) => {
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255 || 0;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255 || 0;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255 || 0;
    return { r, g, b };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isApplying) return;

    let options: Record<string, any> = {};

    switch (normId) {
      case 'rotate-pdf': {
        const angle = rotateMode === 'stepless' ? steplessAngle : rotateAngle;
        let pages: number[] | undefined;
        if (rotateScope === 'custom' && rotateCustomPages.trim()) {
          pages = parsePageNumbers(rotateCustomPages);
        }
        options = {
          angle,
          scope: rotateScope,
          pages,
        };
        break;
      }
      case 'add-watermark': {
        const rgb = hexToRgbRatio(watermarkColorHex);
        const positionCoordsMap: Record<string, { x: number; y: number }> = {
          center: { x: 0.5, y: 0.5 },
          'top-left': { x: 0.15, y: 0.15 },
          'top-center': { x: 0.5, y: 0.15 },
          'top-right': { x: 0.85, y: 0.15 },
          'bottom-left': { x: 0.15, y: 0.85 },
          'bottom-center': { x: 0.5, y: 0.85 },
          'bottom-right': { x: 0.85, y: 0.85 },
        };
        const coords = positionCoordsMap[watermarkPosition] || { x: 0.5, y: 0.5 };
        options = {
          type: watermarkType,
          text: watermarkText || 'CONFIDENTIAL',
          fontSize: watermarkFontSize,
          color: rgb,
          opacity: watermarkOpacity,
          rotation: watermarkAngle,
          position: watermarkPosition,
          xRatio: coords.x,
          yRatio: coords.y,
          repeat: watermarkTile,
          scope: watermarkScope,
          pages: watermarkScope === 'custom' ? parsePageNumbers(watermarkCustomPages) : watermarkScope,
          imageFile: watermarkImageFile,
          imageScale: watermarkImageScale,
        };
        break;
      }
      case 'compress-pdf':
        options = {
          quality: compressQuality,
          imageQuality: compressQuality === 'high' ? 0.85 : compressQuality === 'medium' ? 0.55 : 0.35,
          optimizeImages: compressOptimizeImages,
          removeMetadata: compressRemoveMetadata,
          dpi: compressDpi,
        };
        break;
      case 'page-numbers': {
        let fmt = '{n}';
        if (pageNumberFormat === 'page-of-total') fmt = '{n} / {total}';
        else if (pageNumberFormat === 'roman') fmt = '{roman}';
        else if (pageNumberFormat === 'custom') fmt = pageNumberCustomFormat;

        options = {
          position: pageNumberPos,
          format: fmt,
          startNumber: pageNumberStart,
          fontSize: pageNumberFontSize,
          fontColor: pageNumberColor,
          skipFirstPage: pageNumberSkipFirst,
          oddEvenDifferent: pageNumberOddEvenDifferent,
          oddPosition: 'bottom-right',
          evenPosition: 'bottom-left',
        };
        break;
      }
      case 'delete-pages': {
        const pages = parsePageNumbers(deletePagesInput);
        options = { pages: pages.length > 0 ? pages : [1] };
        break;
      }
      case 'extract-pages': {
        const usesParity = extractPagesInput.split(',').some((part) => {
          const token = part.trim().toLowerCase();
          return token === 'odd' || token === 'even';
        });
        if (usesParity) {
          options = { pageSelection: extractPagesInput, pages: [] };
        } else {
          const pages = parsePageNumbers(extractPagesInput);
          options = { pages: pages.length > 0 ? pages : [1] };
        }
        break;
      }
      case 'add-blank-page':
        options = {
          position: blankPagePos === 'first' ? 0 : 99999,
          count: blankPageCount,
        };
        break;
      case 'crop-pdf':
        options = {
          top: cropUniform ? cropMarginTop : cropMarginTop,
          bottom: cropUniform ? cropMarginTop : cropMarginBottom,
          left: cropUniform ? cropMarginTop : cropMarginLeft,
          right: cropUniform ? cropMarginTop : cropMarginRight,
          applyToAll: cropApplyToAll,
        };
        break;
      case 'encrypt-pdf':
        options = {
          userPassword,
          ownerPassword: ownerPassword || userPassword,
          permissions: {
            printing: allowPrinting,
            copying: allowCopying,
            modifying: allowModifying,
            annotating: allowAnnotating,
            fillingForms: allowFillingForms,
            contentAccessibility: true,
            documentAssembly: false,
          },
        };
        break;
      case 'remove-restrictions':
      case 'decrypt-pdf':
        options = {
          ownerPassword: decryptPassword,
          userPassword: decryptPassword,
        };
        break;
      case 'header-footer':
        options = {
          headerLeft,
          headerCenter,
          headerRight,
          footerLeft,
          footerCenter,
          footerRight,
          fontSize: hfFontSize,
          skipFirstPage: hfSkipFirstPage,
        };
        break;
      case 'add-stamps':
        options = {
          stamp: selectedStamp,
          position: stampPosition,
          opacity: stampOpacity,
        };
        break;
      case 'n-up-pdf':
        options = {
          pagesPerSheet: nUpPages,
          addBorder: nUpBorder,
          orientation: nUpOrientation,
          pageSize: nUpPageSize,
          useMargins: true,
        };
        break;
      case 'posterize-pdf': {
        const [r, c] = posterizeGrid.split('x').map((n) => parseInt(n, 10));
        options = {
          rows: r,
          cols: c,
          overlap: posterizeOverlap,
          pageSize: posterizePageSize,
          scalingMode: 'fit',
        };
        break;
      }
      case 'fix-page-size':
      case 'page-dimensions':
        options = {
          sizePreset: pageSizePreset,
          scaleMode: pageSizeScaleMode,
          orientation: pageSizeOrientation,
          maintainAspectRatio: true,
        };
        break;
      case 'add-page-labels':
        options = {
          rules: [
            {
              pageRange: labelRange,
              style: labelStyle,
              prefix: labelPrefix,
              startValue: labelStartValue,
            },
          ],
        };
        break;
      case 'timestamp-pdf':
        options = {
          tsaServer,
        };
        break;
      case 'rasterize-pdf':
        options = {
          dpi: rasterizeDpi,
          format: 'pdf',
          quality: 0.92,
          grayscale: rasterizeGrayscale,
          backgroundColor: 'white',
        };
        break;
      case 'ocr-pdf':
        options = {
          languages: ocrLanguage === 'chi_sim' ? ['chi_sim', 'eng'] : [ocrLanguage],
          outputFormat: ocrOutputFormat,
          preserveLayout: true,
          enhanceContrast: ocrEnhanceContrast,
        };
        break;
      case 'merge-pdf':
      case 'alternate-merge':
      case 'image-to-pdf':
        options = {
          additionalFiles: appendFiles,
        };
        break;
      case 'pdf-to-image':
      case 'pdf-to-jpg':
      case 'pdf-to-png':
      case 'pdf-to-webp':
        options = {
          format: normId === 'pdf-to-png' ? 'png' : normId === 'pdf-to-webp' ? 'webp' : exportImageFormat,
          quality: exportImageQuality / 100,
          scale: exportDpi === 300 ? 4 : exportDpi === 72 ? 1 : 2,
        };
        break;
      default:
        options = {
          ...getToolDefaultOptions(normId, isZh),
          ...dynamicOptions,
        };
        break;
    }

    if (executionType === 'export' && onExport) {
      await onExport(toolId, options);
    } else {
      await onApply(toolId, options);
    }
  };

  const configuredToolIds = [
    // Core organize & edit
    'rotate-pdf',
    'add-watermark',
    'compress-pdf',
    'page-numbers',
    'delete-pages',
    'extract-pages',
    'add-blank-page',
    'crop-pdf',
    'encrypt-pdf',
    'remove-restrictions',
    'decrypt-pdf',
    'header-footer',
    'add-stamps',
    'n-up-pdf',
    'posterize-pdf',
    'fix-page-size',
    'page-dimensions',
    'add-page-labels',
    'timestamp-pdf',
    'rasterize-pdf',
    'ocr-pdf',
    // Organize & Page tools
    'organize-pdf',
    'pdf-multi-tool',
    'rotate-custom',
    'compare-pdfs',
    'split-pdf',
    'divide-pages',
    'combine-single-page',
    'grid-combine',
    'overlay-pdf',
    'pdf-booklet',
    'photo-tiling-prepress',
    'pdf-lossless-slicer',
    'passport-id-composer',
    'pdf-two-column-reflower',
    'pdf-spine-bookbinder',
    'pdf-page-resizer-uniform',
    'pdf-scratchpad-canvas',
    'table-of-contents',
    'bookmark',
    'edit-metadata',
    'view-metadata',
    // Edit & Annotate tools
    'edit-pdf',
    'sign-pdf',
    'text-color',
    'background-color',
    'interactive-toc-generator',
    'bookmarks-auto-generator',
    'batch-barcode-injector',
    'signature-ink-optimizer',
    'remove-blank-pages',
    'remove-annotations',
    // Security & Protect tools
    'sanitize-pdf',
    'deep-sanitize',
    'find-and-redact',
    'redact-pdf',
    'smart-data-redactor',
    'change-permissions',
    'digital-sign-pdf',
    'cert-cryptor',
    'pdf-signature-anchor-helper',
    // Optimize & Repair tools
    'linearize-pdf',
    'deskew-pdf',
    'pdf-deskew-aligner',
    'pdf-to-pdfa',
    'font-to-outline',
    'ocg-manager',
    'eink-optimizer',
    'batch-watermark-remover',
    'dead-link-debugger',
    'handwriting-ink-contrast-booster',
    // Export & Extraction tools
    'pdf-to-markdown',
    'pdf-to-json',
    'pdf-to-tiff',
    'pdf-to-svg',
    'pdf-to-cbz',
    'pdf-to-pptx',
    'extract-images',
    'extract-tables',
    'extract-attachments',
    'annotation-exporter',
    'global-invoice-parser',
    'pdf-to-slide',
    'pdf-to-zip',
    // Import & Append tools
    'add-attachments',
    'edit-attachments',
    'markdown-to-pdf',
    'json-to-pdf',
    'txt-to-pdf',
    'email-to-pdf',
    'cbz-to-pdf',
    'djvu-to-pdf',
    'psd-to-pdf',
  ];

  return (
    <div className="w-88 sm:w-96 border-l border-[hsl(var(--color-border))] bg-[hsl(var(--color-card)/0.96)] backdrop-blur-md flex flex-col flex-shrink-0 z-20 shadow-2xl transition-all animate-in slide-in-from-right-4 duration-200">
      {/* Drawer Header */}
      <div className="h-12 border-b border-[hsl(var(--color-border))] px-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <SlidersHorizontal className="w-4 h-4 text-[hsl(var(--color-primary))] flex-shrink-0" />
          <span className="text-sm font-bold text-[hsl(var(--color-foreground))] truncate">
            {title}
          </span>
        </div>
        <button
          onClick={onClose}
          disabled={isApplying}
          className="p-1 rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors"
          aria-label="Close drawer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-5 flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-xs text-[hsl(var(--color-muted-foreground))] leading-relaxed">
            {description}
          </p>

          {/* 1. Rotate Tool Form (Alighed with RotatePDFTool) */}
          {normId === 'rotate-pdf' && (
            <div className="space-y-3.5">
              {/* Mode switch: Preset vs Stepless Calibration */}
              <div className="flex rounded-lg p-0.5 bg-[hsl(var(--color-muted))] border border-[hsl(var(--color-border))] text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setRotateMode('preset')}
                  className={`flex-1 py-1 rounded-md transition-all ${
                    rotateMode === 'preset'
                      ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow-sm font-bold'
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                >
                  {isZh ? '90° 步进旋转' : 'Preset 90°'}
                </button>
                <button
                  type="button"
                  onClick={() => setRotateMode('stepless')}
                  className={`flex-1 py-1 rounded-md transition-all ${
                    rotateMode === 'stepless'
                      ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow-sm font-bold'
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                >
                  {isZh ? '任意微调倾斜' : 'Stepless Angle'}
                </button>
              </div>

              {rotateMode === 'preset' ? (
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                    {isZh ? '旋转角度' : 'Rotation Angle'}
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { deg: 90, label: isZh ? '90° 顺时针' : '90° Clockwise' },
                      { deg: 180, label: isZh ? '180° 倒转' : '180° Flip' },
                      { deg: 270, label: isZh ? '270° 逆时针' : '270° Counter-cw' },
                      { deg: -90, label: '-90°' },
                    ].map((item) => (
                      <button
                        key={item.deg}
                        type="button"
                        onClick={() => setRotateAngle(item.deg)}
                        className={`py-2 px-1 text-xs rounded-xl border font-medium text-center transition-all ${
                          rotateAngle === item.deg
                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                            : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                        }`}
                      >
                        {item.deg > 0 ? `+${item.deg}°` : `${item.deg}°`}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '微调角度' : 'Angle'}</span>
                    <span className="text-[hsl(var(--color-primary))] font-bold">{steplessAngle > 0 ? `+${steplessAngle}°` : `${steplessAngle}°`}</span>
                  </div>
                  <input
                    type="range"
                    min="-45"
                    max="45"
                    step="0.5"
                    value={steplessAngle}
                    onChange={(e) => setSteplessAngle(parseFloat(e.target.value))}
                    className="w-full accent-[hsl(var(--color-primary))]"
                  />
                  <div className="flex justify-between text-[10px] text-[hsl(var(--color-muted-foreground))]">
                    <span>-45°</span>
                    <span>0°</span>
                    <span>+45°</span>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '应用页面范围' : 'Page Range Scope'}
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { key: 'all', label: isZh ? '全部' : 'All' },
                    { key: 'odd', label: isZh ? '仅奇数' : 'Odd' },
                    { key: 'even', label: isZh ? '仅偶数' : 'Even' },
                    { key: 'custom', label: isZh ? '指定页' : 'Custom' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setRotateScope(item.key as any)}
                      className={`py-1.5 text-xs rounded-lg border font-medium transition-all ${
                        rotateScope === item.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {rotateScope === 'custom' && (
                <input
                  type="text"
                  value={rotateCustomPages}
                  onChange={(e) => setRotateCustomPages(e.target.value)}
                  placeholder={isZh ? '如: 1, 3-5, 8' : 'e.g. 1, 3-5, 8'}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                />
              )}
            </div>
          )}

          {/* 2. Watermark Tool Form (Aligned with WatermarkTool) */}
          {normId === 'add-watermark' && (
            <div className="space-y-3.5">
              {/* Type Switcher */}
              <div className="flex rounded-lg p-0.5 bg-[hsl(var(--color-muted))] border border-[hsl(var(--color-border))] text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setWatermarkType('text')}
                  className={`flex-1 py-1 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    watermarkType === 'text'
                      ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow-sm font-bold'
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>{isZh ? '文字水印' : 'Text Watermark'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setWatermarkType('image')}
                  className={`flex-1 py-1 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    watermarkType === 'image'
                      ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow-sm font-bold'
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{isZh ? '图片水印' : 'Image Watermark'}</span>
                </button>
              </div>

              {watermarkType === 'text' ? (
                <>
                  <div>
                    <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                      {isZh ? '水印文字' : 'Watermark Text'}
                    </label>
                    <input
                      type="text"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                      placeholder="CONFIDENTIAL"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '字体大小' : 'Font Size'}</span>
                        <span className="text-[hsl(var(--color-primary))] font-bold">{watermarkFontSize} pt</span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="100"
                        value={watermarkFontSize}
                        onChange={(e) => setWatermarkFontSize(parseInt(e.target.value, 10))}
                        className="w-full accent-[hsl(var(--color-primary))]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                        {isZh ? '水印颜色' : 'Color'}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={watermarkColorHex}
                          onChange={(e) => setWatermarkColorHex(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border border-[hsl(var(--color-border))] p-0.5 bg-transparent"
                        />
                        <span className="text-xs font-mono text-[hsl(var(--color-muted-foreground))]">{watermarkColorHex.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '选择水印图片' : 'Select Watermark Image'}
                  </label>
                  <label className="border-2 border-dashed border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary))] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[hsl(var(--color-muted)/0.2)]">
                    <ImageIcon className="w-5 h-5 text-[hsl(var(--color-muted-foreground))] mb-1" />
                    <span className="text-xs font-medium text-[hsl(var(--color-foreground))] truncate max-w-[180px]">
                      {watermarkImageFile ? watermarkImageFile.name : (isZh ? '上传 PNG / JPG 印章图片' : 'Upload Image')}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setWatermarkImageFile(e.target.files[0]);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

              {/* Angle & Opacity Sliders */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '倾斜旋转' : 'Angle'}</span>
                    <span className="text-[hsl(var(--color-primary))] font-bold">{watermarkAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="-90"
                    max="90"
                    step="5"
                    value={watermarkAngle}
                    onChange={(e) => setWatermarkAngle(parseInt(e.target.value, 10))}
                    className="w-full accent-[hsl(var(--color-primary))]"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '透明度' : 'Opacity'}</span>
                    <span className="text-[hsl(var(--color-primary))] font-bold">{Math.round(watermarkOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.9"
                    step="0.05"
                    value={watermarkOpacity}
                    onChange={(e) => setWatermarkOpacity(parseFloat(e.target.value))}
                    className="w-full accent-[hsl(var(--color-primary))]"
                  />
                </div>
              </div>

              {/* Position and Tile Repeat */}
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '位置排布' : 'Position Layout'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'top-left', label: isZh ? '左上' : 'Top Left' },
                    { key: 'top-center', label: isZh ? '正上' : 'Top C' },
                    { key: 'top-right', label: isZh ? '右上' : 'Top Right' },
                    { key: 'bottom-left', label: isZh ? '左下' : 'Bottom L' },
                    { key: 'center', label: isZh ? '正中居中' : 'Center' },
                    { key: 'bottom-right', label: isZh ? '右下' : 'Bottom R' },
                  ].map((pos) => (
                    <button
                      key={pos.key}
                      type="button"
                      onClick={() => setWatermarkPosition(pos.key)}
                      className={`py-1.5 text-[11px] rounded-lg border font-medium transition-all ${
                        watermarkPosition === pos.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer pt-1 border-t border-[hsl(var(--color-border))]">
                <input
                  type="checkbox"
                  checked={watermarkTile}
                  onChange={(e) => setWatermarkTile(e.target.checked)}
                  className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                />
                <span>{isZh ? '全页面阵列密集平铺 (防盗水印)' : 'Repeat tile across entire page'}</span>
              </label>
            </div>
          )}

          {/* 3. Compress Tool Form (Aligned with CompressPDFTool) */}
          {normId === 'compress-pdf' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '压缩预设等级' : 'Compression Preset'}
                </label>
                <div className="space-y-1.5">
                  {[
                    { key: 'low', label: isZh ? '轻微压缩 (画质高清，体积稍减)' : 'Low (High Quality)' },
                    { key: 'medium', label: isZh ? '推荐均衡 (默认通用最佳折衷)' : 'Medium (Balanced Recommended)' },
                    { key: 'high', label: isZh ? '强力压缩 (极限小体积，邮件快传)' : 'High (Smallest Size)' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setCompressQuality(item.key as any)}
                      className={`w-full py-2.5 px-3 text-xs rounded-xl border text-left font-medium transition-all ${
                        compressQuality === item.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Compress Options */}
              <div className="space-y-2 pt-2 border-t border-[hsl(var(--color-border))]">
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={compressOptimizeImages}
                    onChange={(e) => setCompressOptimizeImages(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '图像重采样与质量优化' : 'Optimize & resample images'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={compressRemoveMetadata}
                    onChange={(e) => setCompressRemoveMetadata(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '清除冗余元数据与编辑历史' : 'Strip redundant metadata'}</span>
                </label>
              </div>
            </div>
          )}

          {/* 4. Page Numbers Form (Aligned with PageNumbersTool) */}
          {normId === 'page-numbers' && (
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '页码位置 (6 个方位)' : 'Page Number Position'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'top-left', label: isZh ? '顶部靠左' : 'Top L' },
                    { key: 'top-center', label: isZh ? '顶部居中' : 'Top C' },
                    { key: 'top-right', label: isZh ? '顶部靠右' : 'Top R' },
                    { key: 'bottom-left', label: isZh ? '底部靠左' : 'Bottom L' },
                    { key: 'bottom-center', label: isZh ? '底部居中' : 'Bottom C' },
                    { key: 'bottom-right', label: isZh ? '底部靠右' : 'Bottom R' },
                  ].map((pos) => (
                    <button
                      key={pos.key}
                      type="button"
                      onClick={() => setPageNumberPos(pos.key as any)}
                      className={`py-1.5 px-2 text-[11px] rounded-lg border font-medium text-center transition-all ${
                        pageNumberPos === pos.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '展示格式' : 'Format Template'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'number', label: '1, 2, 3...' },
                    { key: 'page-of-total', label: '1 / 10' },
                    { key: 'roman', label: 'i, ii, iii...' },
                  ].map((fmt) => (
                    <button
                      key={fmt.key}
                      type="button"
                      onClick={() => setPageNumberFormat(fmt.key as any)}
                      className={`py-1.5 px-2 text-xs rounded-lg border font-medium text-center transition-all ${
                        pageNumberFormat === fmt.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '起始页码' : 'Start Number'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={pageNumberStart}
                    onChange={(e) => setPageNumberStart(parseInt(e.target.value, 10) || 1)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '字体字号' : 'Font Size'}
                  </label>
                  <input
                    type="number"
                    min="8"
                    max="24"
                    value={pageNumberFontSize}
                    onChange={(e) => setPageNumberFontSize(parseInt(e.target.value, 10) || 10)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1 border-t border-[hsl(var(--color-border))]">
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pageNumberSkipFirst}
                    onChange={(e) => setPageNumberSkipFirst(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '跳过首页（封面不显示页码）' : 'Skip first page (Cover page)'}</span>
                </label>
              </div>
            </div>
          )}

          {/* 5. Delete Pages Form */}
          {normId === 'delete-pages' && (
            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                {isZh ? '需要删除的页码 (逗号或短横线分隔)' : 'Pages to Delete (e.g. 1, 3-5)'}
              </label>
              <input
                type="text"
                value={deletePagesInput}
                onChange={(e) => setDeletePagesInput(e.target.value)}
                placeholder="1, 3, 5-7"
                className="w-full px-3 py-2 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { label: isZh ? '删除第 1 页' : 'Page 1', val: '1' },
                  { label: isZh ? '删除末页' : 'Last Page', val: '99999' },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setDeletePagesInput(item.val)}
                    className="text-[10px] px-2 py-0.5 rounded border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-[hsl(var(--color-muted-foreground))]">
                {isZh ? '支持单页与范围，例如输入 1, 3-5 将删除第 1 页以及第 3 至 5 页' : 'Supports single or ranges, e.g. 1, 3-5'}
              </p>
            </div>
          )}

          {/* 6. Extract Pages Form (Aligned with ExtractPagesTool) */}
          {normId === 'extract-pages' && (
            <div className="space-y-2.5">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '提取页码范围 (如: 1-3, 5, 8)' : 'Pages to Extract (e.g. 1-3, 5)'}
                </label>
                <input
                  type="text"
                  value={extractPagesInput}
                  onChange={(e) => setExtractPagesInput(e.target.value)}
                  placeholder="1-3, 5"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: isZh ? '前 3 页' : '1-3', val: '1-3' },
                  { label: isZh ? '仅第 1 页' : 'Page 1', val: '1' },
                  { label: isZh ? '奇数页' : 'Odd', val: 'odd' },
                  { label: isZh ? '偶数页' : 'Even', val: 'even' },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setExtractPagesInput(item.val)}
                    className="text-[11px] px-2.5 py-1 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] hover:border-[hsl(var(--color-primary))] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                {isZh ? '选中的页面将组合成新的文档，其他未选择页面将被剔除。' : 'Selected pages will be preserved into a new document.'}
              </p>
            </div>
          )}

          {/* 7. Add Blank Page Form */}
          {normId === 'add-blank-page' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '插入空白页位置' : 'Insert Position'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'first', label: isZh ? '文档最开头' : 'At Beginning' },
                    { key: 'last', label: isZh ? '文档最末尾' : 'At End' },
                  ].map((pos) => (
                    <button
                      key={pos.key}
                      type="button"
                      onClick={() => setBlankPagePos(pos.key as any)}
                      className={`py-2 px-3 text-xs rounded-xl border font-medium text-center transition-all ${
                        blankPagePos === pos.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '插入页数' : 'Number of Pages'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={blankPageCount}
                  onChange={(e) => setBlankPageCount(parseInt(e.target.value, 10) || 1)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                />
              </div>
            </div>
          )}

          {/* 8. Crop Tool Form (Aligned with CropPDFTool) */}
          {normId === 'crop-pdf' && (
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '四周边距裁剪量' : 'Margin Crop'}</span>
                <span className="text-[hsl(var(--color-primary))] font-bold">{cropMarginTop} pt</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: isZh ? '轻微 (10pt)' : 'Light (10pt)', val: 10 },
                  { label: isZh ? '标准 (20pt)' : 'Normal (20pt)', val: 20 },
                  { label: isZh ? '深度 (40pt)' : 'Deep (40pt)', val: 40 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => {
                      setCropMarginTop(preset.val);
                      setCropMarginBottom(preset.val);
                      setCropMarginLeft(preset.val);
                      setCropMarginRight(preset.val);
                    }}
                    className={`py-1.5 px-2 text-xs rounded-lg border font-medium transition-all ${
                      cropMarginTop === preset.val
                        ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                        : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={cropMarginTop}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  setCropMarginTop(v);
                  setCropMarginBottom(v);
                  setCropMarginLeft(v);
                  setCropMarginRight(v);
                }}
                className="w-full accent-[hsl(var(--color-primary))]"
              />

              <div className="pt-2 border-t border-[hsl(var(--color-border))]">
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cropApplyToAll}
                    onChange={(e) => setCropApplyToAll(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '将裁剪应用至文档所有页面' : 'Apply crop to all pages in document'}</span>
                </label>
              </div>
            </div>
          )}

          {/* 9. Encrypt Tool Form (Aligned with EncryptPDFTool) */}
          {normId === 'encrypt-pdf' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '打开口令 (用户密码)' : 'User Password'}
                </label>
                <input
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '权限口令 (所有者密码，可选)' : 'Owner Password (Optional)'}
                </label>
                <input
                  type="password"
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                />
              </div>

              <div className="space-y-2 pt-1 border-t border-[hsl(var(--color-border))]">
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowPrinting}
                    onChange={(e) => setAllowPrinting(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '允许打印文档' : 'Allow Printing'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowCopying}
                    onChange={(e) => setAllowCopying(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '允许复制文字与图像' : 'Allow Copying Content'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowAnnotating}
                    onChange={(e) => setAllowAnnotating(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '允许添加与修改注释' : 'Allow Annotating'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowFillingForms}
                    onChange={(e) => setAllowFillingForms(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '允许填写表单字段' : 'Allow Form Filling'}</span>
                </label>
              </div>
            </div>
          )}

          {/* 10. Decrypt / Remove Restrictions Form */}
          {(normId === 'remove-restrictions' || normId === 'decrypt-pdf') && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '文档密码 / 口令' : 'Document Password'}
                </label>
                <div className="relative">
                  <input
                    type={showDecryptPassword ? 'text' : 'password'}
                    value={decryptPassword}
                    onChange={(e) => setDecryptPassword(e.target.value)}
                    placeholder={isZh ? '若有打开密码请输入（无密码请留空）' : 'Enter password if protected'}
                    className="w-full px-3 py-2 pr-9 text-xs rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowDecryptPassword(!showDecryptPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                  >
                    {showDecryptPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--color-foreground))]">
                  <Unlock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{isZh ? '解锁说明' : 'Unlock Note'}</span>
                </div>
                <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {isZh
                    ? '用于解除禁止打印、禁止复制、禁止修改等权限限制。若文档仅限制权限，直接点击解密即可；若文档需密码才能打开，请输入对应密码。'
                    : 'Removes printing, editing, and copying restrictions. Enter user password if document requires open authorization.'}
                </p>
              </div>
            </div>
          )}

          {/* 11. Header & Footer Form (Aligned with HeaderFooterTool) */}
          {normId === 'header-footer' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '页眉内容 (左 / 中 / 右)' : 'Header Text (L / C / R)'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <input
                    type="text"
                    value={headerLeft}
                    onChange={(e) => setHeaderLeft(e.target.value)}
                    placeholder={isZh ? '页眉左' : 'Left'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                  <input
                    type="text"
                    value={headerCenter}
                    onChange={(e) => setHeaderCenter(e.target.value)}
                    placeholder={isZh ? '页眉中' : 'Center'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                  <input
                    type="text"
                    value={headerRight}
                    onChange={(e) => setHeaderRight(e.target.value)}
                    placeholder={isZh ? '页眉右' : 'Right'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '页脚内容 (左 / 中 / 右)' : 'Footer Text (L / C / R)'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <input
                    type="text"
                    value={footerLeft}
                    onChange={(e) => setFooterLeft(e.target.value)}
                    placeholder={isZh ? '页脚左' : 'Left'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                  <input
                    type="text"
                    value={footerCenter}
                    onChange={(e) => setFooterCenter(e.target.value)}
                    placeholder={isZh ? '页脚中' : 'Center'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                  <input
                    type="text"
                    value={footerRight}
                    onChange={(e) => setFooterRight(e.target.value)}
                    placeholder={isZh ? '页脚右' : 'Right'}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[hsl(var(--color-border))]">
                <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hfSkipFirstPage}
                    onChange={(e) => setHfSkipFirstPage(e.target.checked)}
                    className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                  />
                  <span>{isZh ? '首页跳过' : 'Skip cover page'}</span>
                </label>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-[hsl(var(--color-muted-foreground))]">{isZh ? '字号:' : 'Size:'}</span>
                  <input
                    type="number"
                    min="8"
                    max="18"
                    value={hfFontSize}
                    onChange={(e) => setHfFontSize(parseInt(e.target.value, 10) || 10)}
                    className="w-12 px-1.5 py-1 text-xs rounded border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 12. Stamps Form */}
          {normId === 'add-stamps' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-2">
                  {isZh ? '选择预设印章' : 'Select Preset Stamp'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['CONFIDENTIAL', 'APPROVED', 'DRAFT', 'URGENT', 'FINAL', 'VOID'].map((stamp) => (
                    <button
                      key={stamp}
                      type="button"
                      onClick={() => setSelectedStamp(stamp)}
                      className={`py-2 px-3 text-xs rounded-xl border font-bold tracking-wider text-center transition-all ${
                        selectedStamp === stamp
                          ? 'border-red-500 bg-red-500/10 text-red-500'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {stamp}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '盖印位置' : 'Position'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'center', label: isZh ? '居中' : 'Center' },
                    { key: 'top-right', label: isZh ? '右上角' : 'Top Right' },
                    { key: 'bottom-right', label: isZh ? '右下角' : 'Bottom Right' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setStampPosition(item.key as any)}
                      className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                        stampPosition === item.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 13. N-Up PDF Form (Aligned with NUpPDFTool) */}
          {normId === 'n-up-pdf' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '每张纸拼排页数' : 'Pages per Sheet'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { count: 2, label: '2-Up' },
                    { count: 4, label: '4-Up' },
                    { count: 9, label: '9-Up' },
                    { count: 16, label: '16-Up' },
                  ].map((item) => (
                    <button
                      key={item.count}
                      type="button"
                      onClick={() => setNUpPages(item.count as any)}
                      className={`py-2 text-xs rounded-xl border font-bold text-center transition-all ${
                        nUpPages === item.count
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '拼版方向' : 'Orientation'}
                  </label>
                  <select
                    value={nUpOrientation}
                    onChange={(e) => setNUpOrientation(e.target.value as any)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]"
                  >
                    <option value="auto">{isZh ? '自适应' : 'Auto'}</option>
                    <option value="portrait">{isZh ? '纵向' : 'Portrait'}</option>
                    <option value="landscape">{isZh ? '横向' : 'Landscape'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '输出纸张' : 'Sheet Size'}
                  </label>
                  <select
                    value={nUpPageSize}
                    onChange={(e) => setNUpPageSize(e.target.value as any)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]"
                  >
                    <option value="A4">A4 (210×297mm)</option>
                    <option value="Letter">Letter (8.5×11in)</option>
                    <option value="A3">A3 (297×420mm)</option>
                  </select>
                </div>
              </div>
              <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer pt-1 border-t border-[hsl(var(--color-border))]">
                <input
                  type="checkbox"
                  checked={nUpBorder}
                  onChange={(e) => setNUpBorder(e.target.checked)}
                  className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                />
                <span>{isZh ? '为每页添加细线分割边框' : 'Add separator border around pages'}</span>
              </label>
            </div>
          )}

          {/* 14. Posterize PDF Form (Aligned with PosterizePDFTool) */}
          {normId === 'posterize-pdf' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '海报分割网格' : 'Poster Tiling Grid'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: '2x2', label: isZh ? '2×2 (4 页拼接)' : '2×2 (4 Sheets)' },
                    { key: '3x3', label: isZh ? '3×3 (9 页巨幅)' : '3×3 (9 Sheets)' },
                    { key: '2x1', label: isZh ? '2×1 (横向二折)' : '2×1 (Horizontal)' },
                    { key: '1x2', label: isZh ? '1×2 (纵向二折)' : '1×2 (Vertical)' },
                  ].map((grid) => (
                    <button
                      key={grid.key}
                      type="button"
                      onClick={() => setPosterizeGrid(grid.key as any)}
                      className={`py-2 px-2 text-xs rounded-xl border font-medium text-center transition-all ${
                        posterizeGrid === grid.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {grid.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '粘合重叠边距' : 'Tile Overlap Margin'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: isZh ? '无重叠' : '0 pt', val: 0 },
                    { label: isZh ? '标准 (15pt)' : '15 pt', val: 15 },
                    { label: isZh ? '宽边 (30pt)' : '30 pt', val: 30 },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setPosterizeOverlap(item.val)}
                      className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                        posterizeOverlap === item.val
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 15. Fix Page Size Form */}
          {(normId === 'fix-page-size' || normId === 'page-dimensions') && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '目标标准纸张规格' : 'Target Page Size'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'a4', label: 'A4 (210×297mm)' },
                    { key: 'letter', label: 'Letter (8.5×11in)' },
                    { key: 'a3', label: 'A3 (297×420mm)' },
                    { key: 'a5', label: 'A5 (148×210mm)' },
                    { key: 'envelope-10', label: '#10 Envelope (4.125×9.5in)' },
                  ].map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPageSizePreset(p.key as any)}
                      className={`py-2 px-2 text-xs rounded-xl border font-medium text-center transition-all ${
                        pageSizePreset === p.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '内容排版适应模式' : 'Content Scaling Mode'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'fit', label: isZh ? '等比居中' : 'Fit' },
                    { key: 'fill', label: isZh ? '填满页面' : 'Fill' },
                    { key: 'stretch', label: isZh ? '拉伸全屏' : 'Stretch' },
                  ].map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setPageSizeScaleMode(m.key as any)}
                      className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                        pageSizeScaleMode === m.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                  {isZh ? '页面方向' : 'Page Orientation'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'auto', label: isZh ? '自动' : 'Auto' },
                    { key: 'portrait', label: isZh ? '纵向' : 'Portrait' },
                    { key: 'landscape', label: isZh ? '横向' : 'Landscape' },
                  ].map((o) => (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => setPageSizeOrientation(o.key as any)}
                      className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                        pageSizeOrientation === o.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 16. Page Labels Form */}
          {normId === 'add-page-labels' && (
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1.5">
                  {isZh ? '编号样式' : 'Numbering Style'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { key: 'D', label: '1, 2, 3...' },
                    { key: 'r', label: 'i, ii, iii...' },
                    { key: 'R', label: 'I, II, III...' },
                    { key: 'a', label: 'a, b, c...' },
                    { key: 'A', label: 'A, B, C...' },
                  ].map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setLabelStyle(s.key as any)}
                      className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                        labelStyle === s.key
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                          : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '前缀 (如: Page-)' : 'Prefix'}
                  </label>
                  <input
                    type="text"
                    value={labelPrefix}
                    onChange={(e) => setLabelPrefix(e.target.value)}
                    placeholder="Page-"
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                    {isZh ? '起始编号' : 'Start Value'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={labelStartValue}
                    onChange={(e) => setLabelStartValue(parseInt(e.target.value, 10) || 1)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 17. Timestamp Tool Form */}
          {normId === 'timestamp-pdf' && (
            <div className="space-y-3">
              <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                {isZh ? '选择权威 TSA 时间戳服务器' : 'TSA Authority Server'}
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'MeSign', desc: isZh ? 'MeSign TSA (推荐，秒级高速)' : 'MeSign (Fastest)' },
                  { id: 'DigiCert', desc: isZh ? 'DigiCert TSA (全球公信顶级)' : 'DigiCert (Global)' },
                  { id: 'Sectigo', desc: isZh ? 'Sectigo TSA (国际公信合规)' : 'Sectigo (Standard)' },
                  { id: 'FreeTSA', desc: isZh ? 'FreeTSA.org (开放免许可)' : 'FreeTSA.org' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTsaServer(item.id)}
                    className={`w-full py-2.5 px-3 text-xs rounded-xl border text-left font-medium transition-all ${
                      tsaServer === item.id
                        ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                        : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                    }`}
                  >
                    {item.desc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 18. Rasterize PDF Form */}
          {normId === 'rasterize-pdf' && (
            <div className="space-y-3">
              <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                {isZh ? '输出分辨率 (DPI 清晰度)' : 'Output DPI'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { dpi: 96, label: isZh ? '96 (极小体积)' : '96 DPI' },
                  { dpi: 150, label: isZh ? '150 (推荐标准)' : '150 DPI' },
                  { dpi: 300, label: isZh ? '300 (高清印刷)' : '300 DPI' },
                ].map((item) => (
                  <button
                    key={item.dpi}
                    type="button"
                    onClick={() => setRasterizeDpi(item.dpi)}
                    className={`py-2 px-1 text-xs rounded-xl border font-medium text-center transition-all ${
                      rasterizeDpi === item.dpi
                        ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                        : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-xs text-[hsl(var(--color-foreground))] cursor-pointer pt-1 border-t border-[hsl(var(--color-border))]">
                <input
                  type="checkbox"
                  checked={rasterizeGrayscale}
                  onChange={(e) => setRasterizeGrayscale(e.target.checked)}
                  className="rounded text-[hsl(var(--color-primary))] accent-[hsl(var(--color-primary))]"
                />
                <span>{isZh ? '同时转为黑白灰度图像' : 'Convert to grayscale raster'}</span>
              </label>
            </div>
          )}

          {/* Dynamic Tool Options (Organize, Edit, Security, Optimize, Import, Export) */}
          <OrganizeToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            totalPages={totalPages}
            locale={locale}
          />
          <EditAnnotateToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            totalPages={totalPages}
            locale={locale}
          />
          <SecurityToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            totalPages={totalPages}
            locale={locale}
          />
          <OptimizeRepairToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            totalPages={totalPages}
            locale={locale}
          />
          <ImportAppendToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            locale={locale}
          />
          <ExportToolOptions
            toolId={normId}
            options={dynamicOptions}
            onChange={handleDynamicOptionChange}
            totalPages={totalPages}
            locale={locale}
          />

          {/* 19. Append / Merge External Files */}
          {executionType === 'append' && (
            <div className="space-y-3">
              <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block">
                {isZh ? '选择要并入的文件' : 'Select Files to Append'}
              </label>
              <label
                data-testid="studio-append-dropzone"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isApplying) return;
                  const dropped = Array.from(e.dataTransfer.files || []);
                  if (dropped.length > 0) {
                    setAppendFiles((prev) => [...prev, ...dropped]);
                  }
                }}
                className="border-2 border-dashed border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary))] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[hsl(var(--color-muted)/0.3)]"
              >
                <Upload className="w-5 h-5 text-[hsl(var(--color-muted-foreground))] mb-1" />
                <span className="text-xs font-medium text-[hsl(var(--color-foreground))]">
                  {isZh ? '点击或拖拽添加外部文件' : 'Click or drop files'}
                </span>
                <input
                  type="file"
                  multiple
                  aria-label={isZh ? '选择要并入的文件' : 'Select Files to Append'}
                  disabled={isApplying}
                  onChange={(e) => {
                    if (e.target.files) {
                      const selected = Array.from(e.target.files);
                      setAppendFiles((prev) => [...prev, ...selected]);
                      e.target.value = '';
                    }
                  }}
                  className="hidden"
                />
              </label>
              <p role="status" className="text-xs text-[hsl(var(--color-muted-foreground))]">
                {isZh ? `已选文件：${appendFiles.length}` : `Selected files: ${appendFiles.length}`}
              </p>
              {appendFiles.length > 0 && (
                <>
                  <p className="text-[11px] text-[hsl(var(--color-muted-foreground))]">
                    {isZh ? '以下文件将按顺序追加到当前文档后。' : 'Files will be appended after the current document in this order.'}
                  </p>
                  <ol aria-label={isZh ? '已选文件' : 'Selected files'} className="space-y-1.5">
                    {appendFiles.map((file, index) => (
                      <li key={index} className="flex items-center gap-1 rounded-lg border border-[hsl(var(--color-border))] p-1.5 text-xs">
                        <span className="shrink-0 text-[hsl(var(--color-muted-foreground))]">{index + 1}.</span>
                        <span className="min-w-0 flex-1 truncate" title={file.name}>{file.name}</span>
                        <Button
                          type="button" variant="ghost" size="icon" className="h-8 w-8"
                          aria-label={isZh ? `上移 ${file.name}` : `Move ${file.name} up`}
                          disabled={isApplying || index === 0}
                          onClick={() => moveAppendFile(index, -1)}
                        >
                          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                        </Button>
                        <Button
                          type="button" variant="ghost" size="icon" className="h-8 w-8"
                          aria-label={isZh ? `下移 ${file.name}` : `Move ${file.name} down`}
                          disabled={isApplying || index === appendFiles.length - 1}
                          onClick={() => moveAppendFile(index, 1)}
                        >
                          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                        </Button>
                        <Button
                          type="button" variant="ghost" size="icon" className="h-8 w-8"
                          aria-label={isZh ? `移除 ${file.name}` : `Remove ${file.name}`}
                          disabled={isApplying}
                          onClick={() => setAppendFiles((prev) => prev.filter((_, i) => i !== index))}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden="true" />
                        </Button>
                      </li>
                    ))}
                  </ol>
                </>
              )}
              {/* Quick Add from Open Studio Documents */}
              {availableDocuments && availableDocuments.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-[hsl(var(--color-border)/0.6)]">
                  <span className="text-[11px] font-semibold text-[hsl(var(--color-foreground))] block">
                    {isZh ? '快捷并入工作台中已打开的文档：' : 'Or quick-add other open documents:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {availableDocuments.map((doc) => {
                      const isAdded = appendFiles.some((f) => f.name === doc.name);
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          disabled={isApplying}
                          onClick={() => {
                            if (isAdded) {
                              setAppendFiles((prev) => prev.filter((f) => f.name !== doc.name));
                            } else {
                              const appendFile = new File([doc.currentBlob], doc.name, {
                                type: 'application/pdf',
                              });
                              setAppendFiles((prev) => [...prev, appendFile]);
                            }
                          }}
                          className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                            isAdded
                              ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))] font-semibold'
                              : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:border-[hsl(var(--color-primary)/0.4)]'
                          }`}
                        >
                          <FileText className="w-3 h-3 shrink-0" />
                          <span className="truncate max-w-[120px]">{doc.name}</span>
                          <span className="font-bold">{isAdded ? '✓' : '+'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 20. Export Tools Parameters (OCR / Images / Docx) */}
          {executionType === 'export' && (
            <div className="space-y-3">
              {/* Image Export Tool Options */}
              {['pdf-to-image', 'pdf-to-jpg', 'pdf-to-png', 'pdf-to-webp'].includes(normId) && (
                <div className="space-y-3 p-3 rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))]">
                  <div>
                    <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                      {isZh ? '导出图片格式' : 'Image Format'}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { key: 'jpg', label: 'JPG' },
                        { key: 'png', label: 'PNG' },
                        { key: 'webp', label: 'WebP' },
                      ].map((fmt) => (
                        <button
                          key={fmt.key}
                          type="button"
                          onClick={() => setExportImageFormat(fmt.key as any)}
                          className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                            exportImageFormat === fmt.key
                              ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                              : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                          }`}
                        >
                          {fmt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[hsl(var(--color-foreground))] block mb-1">
                      {isZh ? '渲染分辨率 (DPI)' : 'Rendering DPI'}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { dpi: 72, label: isZh ? '72 (屏幕)' : '72 (Screen)' },
                        { dpi: 150, label: isZh ? '150 (标准)' : '150 (Standard)' },
                        { dpi: 300, label: isZh ? '300 (高清)' : '300 (High-res)' },
                      ].map((item) => (
                        <button
                          key={item.dpi}
                          type="button"
                          onClick={() => setExportDpi(item.dpi)}
                          className={`py-1.5 text-xs rounded-lg border font-medium text-center transition-all ${
                            exportDpi === item.dpi
                              ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-bold'
                              : 'border-[hsl(var(--color-border))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-[hsl(var(--color-foreground))]">{isZh ? '压缩质量' : 'Quality'}</span>
                      <span className="text-[hsl(var(--color-primary))] font-bold">{exportImageQuality}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="100"
                      step="5"
                      value={exportImageQuality}
                      onChange={(e) => setExportImageQuality(parseInt(e.target.value, 10))}
                      className="w-full accent-[hsl(var(--color-primary))]"
                    />
                  </div>
                </div>
              )}

              {/* General Export Notice */}
              <div className="p-3 rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))] space-y-1">
                <span className="text-xs font-semibold text-[hsl(var(--color-foreground))] block">
                  {isZh ? '导出提示' : 'Export Notice'}
                </span>
                <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {isZh
                    ? '处理完成后将自动触发文件下载。当前主文档将保持在工作台中打开，可继续编辑。'
                    : 'Converted output will download directly. Your main PDF remains open for further editing.'}
                </p>
              </div>
            </div>
          )}

          {/* 21. Truly Zero-Config Instant Tools Card */}
          {executionType === 'in-place' &&
            !configuredToolIds.includes(normId) && (
              <div className="p-3.5 rounded-2xl bg-[hsl(var(--color-muted)/0.4)] border border-[hsl(var(--color-border))] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[hsl(var(--color-foreground))]">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>{isZh ? '一键即刻处理' : 'Instant In-Place Action'}</span>
                </div>
                <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {isZh
                    ? '该操作属于确定性批处理（如页面倒序、删除纯空白页、转为标准灰度等），无需繁琐参数，点击下方按钮将在纯内存中直接执行并实时刷新预览。若需还原可随时按 Ctrl+Z 撤销。'
                    : 'This action is deterministic (e.g. reversing page sequence, stripping blank pages). No extra parameters needed.'}
                </p>
              </div>
            )}

          {/* 22. Navigate to Standalone Editor */}
          {executionType === 'navigate' && (
            <div className="p-3.5 rounded-2xl bg-[hsl(var(--color-muted)/0.4)] border border-[hsl(var(--color-border))] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[hsl(var(--color-foreground))]">
                <ExternalLink className="w-4 h-4 text-[hsl(var(--color-primary))]" />
                <span>{isZh ? '大画布专属交互工具' : 'Full Canvas Tool'}</span>
              </div>
              <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                {isZh
                  ? '该工具包含复杂的拖拽网格、矢量画板或多文档对照排版，建议点击下方按钮在专属大视图中操作。'
                  : 'This tool features a rich interactive canvas. We recommend opening the full-screen view.'}
              </p>
            </div>
          )}
        </div>

        {/* Drawer Actions */}
        <div className="pt-4 border-t border-[hsl(var(--color-border))] flex items-center gap-2 flex-shrink-0">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onClose}
            disabled={isApplying}
            className="flex-1 text-xs"
          >
            {isZh ? '取消' : 'Cancel'}
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={isApplying}
            className="flex-1 text-xs shadow-sm"
          >
            {isApplying ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                <span>{isZh ? '处理中...' : 'Processing...'}</span>
              </>
            ) : executionType === 'export' ? (
              <>
                <Download className="w-3.5 h-3.5 mr-1.5" />
                <span>{isZh ? '开始导出' : 'Export & Save'}</span>
              </>
            ) : executionType === 'append' ? (
              <>
                <Files className="w-3.5 h-3.5 mr-1.5" />
                <span>{isZh ? '合并追加' : 'Append'}</span>
              </>
            ) : executionType === 'navigate' ? (
              <>
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                <span>{isZh ? '打开全屏' : 'Open View'}</span>
              </>
            ) : (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5" />
                <span>{isZh ? '应用更改' : 'Apply Changes'}</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
