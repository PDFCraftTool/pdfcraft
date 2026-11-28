/**
 * PDF Processors
 * Requirements: 5.1
 * 
 * Export all PDF processing implementations.
 */

// Merge processor
export {
  MergePDFProcessor,
  createMergeProcessor,
  mergePDFs,
} from './merge';

// Split processor
export {
  SplitPDFProcessor,
  createSplitProcessor,
  splitPDF,
  parsePageRanges,
  createSplitEveryNPages,
  createSplitEveryPage,
  createSplitByEvenOdd,
  createSplitNTimes,
  createSplitByBookmarks,
  type BookmarkInfo,
} from './split';

// Organize processor
export {
  OrganizePDFProcessor,
  createOrganizeProcessor,
  organizePDF,
  type OrganizeOptions,
} from './organize';

// Extract pages processor
export {
  ExtractPagesPDFProcessor,
  createExtractProcessor,
  extractPages,
  parsePageSelection,
  type ExtractOptions,
} from './extract';

// Delete pages processor
export {
  DeletePagesPDFProcessor,
  createDeleteProcessor,
  deletePages,
  parsePageSelection as parseDeletePageSelection,
  type DeleteOptions,
} from './delete';

// Alternate merge processor
export {
  AlternateMergePDFProcessor,
  createAlternateMergeProcessor,
  alternateMergePDFs,
  type AlternateMergeOptions,
} from './alternate-merge';

// Divide pages processor
export {
  DividePagesPDFProcessor,
  createDivideProcessor,
  dividePages,
  type DivideOptions,
  type DivisionType,
} from './divide';

// Attachments processors
export {
  AddAttachmentsPDFProcessor,
  ExtractAttachmentsPDFProcessor,
  EditAttachmentsPDFProcessor,
  createAddAttachmentsProcessor,
  createExtractAttachmentsProcessor,
  createEditAttachmentsProcessor,
  addAttachments,
  extractAttachments,
  editAttachments,
  type AttachmentInfo,
  type AddAttachmentsOptions,
  type EditAttachmentsOptions,
} from './attachments';

// PDF to ZIP processor
export {
  PDFToZipProcessor,
  createPDFToZipProcessor,
  packagePDFsToZip,
  type PDFToZipOptions,
} from './pdf-to-zip';

// Redaction processor
export {
  applyRedactions,
  validateRedactionAreas,
  redactPDF,
  renderRedactionAreaOnCanvas,
  applyPixelate,
  applyBlur,
  applySolidFill,
  type RedactionArea,
  type RedactionOptions,
  type RedactionResult,
  type RedactionStyle,
  type RedactOptions,
} from './redact';

// Rotate processor
export {
  RotatePDFProcessor,
  createRotateProcessor,
  rotatePDF,
  rotateAllPages,
  type RotateOptions,
} from './rotate';

// Add blank page processor
export {
  AddBlankPagePDFProcessor,
  createAddBlankPageProcessor,
  addBlankPages,
  type AddBlankPageOptions,
} from './add-blank-page';

// Reverse pages processor
export {
  ReversePagesPDFProcessor,
  createReverseProcessor,
  reversePages,
} from './reverse';

// N-Up processor
export {
  NUpPDFProcessor,
  createNUpProcessor,
  createNUpPDF,
  type NUpOptions,
} from './n-up';

// Combine single page processor
export {
  CombineSinglePagePDFProcessor,
  createCombineSinglePageProcessor,
  combineSinglePage,
  type CombineSinglePageOptions,
} from './combine-single-page';

// Posterize processor
export {
  PosterizePDFProcessor,
  createPosterizeProcessor,
  posterizePDF,
  type PosterizeOptions,
} from './posterize';

// Edit metadata processor
export {
  EditMetadataPDFProcessor,
  createEditMetadataProcessor,
  editPDFMetadata,
  type EditMetadataOptions,
} from './edit-metadata';

// Bookmark processor
export {
  BookmarkProcessor,
  createBookmarkProcessor,
  processBookmarks,
  type BookmarkItem,
  type BookmarkOptions,
} from './bookmark';

// Table of contents processor
export {
  TableOfContentsProcessor,
  createTableOfContentsProcessor,
  generateTableOfContents,
  type TOCOptions,
} from './table-of-contents';

// Page numbers processor
export {
  PageNumbersProcessor,
  createPageNumbersProcessor,
  addPageNumbers,
  type PageNumberOptions,
} from './page-numbers';

// Watermark processor
export {
  WatermarkProcessor,
  createWatermarkProcessor,
  addWatermark,
  type WatermarkOptions,
} from './watermark';

// Header footer processor
export {
  HeaderFooterProcessor,
  createHeaderFooterProcessor,
  addHeaderFooter,
  type HeaderFooterOptions,
} from './header-footer';

// Invert colors processor
export {
  InvertColorsProcessor,
  createInvertColorsProcessor,
  invertColors,
  type InvertColorsOptions,
} from './invert-colors';

// Background color processor
export {
  BackgroundColorProcessor,
  createBackgroundColorProcessor,
  addBackgroundColor,
  type BackgroundColorOptions,
} from './background-color';

// Text color processor
export {
  TextColorProcessor,
  createTextColorProcessor,
  changeTextColor,
  type TextColorOptions,
} from './text-color';

// Sign processor
export {
  SignProcessor,
  createSignProcessor,
  signPDF,
  type SignatureItem,
  type SignOptions,
} from './sign';

// Stamps processor
export {
  StampsProcessor,
  createStampsProcessor,
  addStamps,
  type StampItem,
  type StampsOptions,
} from './stamps';

// Remove annotations processor
export {
  RemoveAnnotationsProcessor,
  createRemoveAnnotationsProcessor,
  removeAnnotations,
  type RemoveAnnotationsOptions,
} from './remove-annotations';

// Crop processor
export {
  CropProcessor,
  createCropProcessor,
  cropPDF,
  type CropData,
  type CropOptions,
} from './crop';

// Form filler processor
export {
  FormFillerProcessor,
  createFormFillerProcessor,
  fillForm,
  getFormFields,
  type FormFieldValue,
  type FormFillerOptions,
  type FormFieldInfo,
  type FormFieldType,
} from './form-filler';

// Form creator processor
export {
  FormCreatorProcessor,
  createFormCreatorProcessor,
  createForm,
  type FormField,
  type FormCreatorOptions,
} from './form-creator';

// Remove blank pages processor
export {
  RemoveBlankPagesProcessor,
  createRemoveBlankPagesProcessor,
  removeBlankPages,
  type RemoveBlankPagesOptions,
} from './remove-blank-pages';

// Image to PDF processor
export {
  ImageToPDFProcessor,
  createImageToPDFProcessor,
  imagesToPDF,
  PAGE_SIZES,
  type ImageToPDFOptions,
  type PageSizeType,
} from './image-to-pdf';

// Text to PDF processor
export {
  TextToPDFProcessor,
  createTextToPDFProcessor,
  textToPDF,
  TEXT_PAGE_SIZES,
  type TextToPDFOptions,
  type TextPageSizeType,
  type FontId,
} from './text-to-pdf';

// JSON to PDF processor
export {
  JSONToPDFProcessor,
  createJSONToPDFProcessor,
  jsonToPDF,
  JSON_PAGE_SIZES,
  type JSONToPDFOptions,
  type JSONPageSizeType,
} from './json-to-pdf';

// PDF to Image processor
export {
  PDFToImageProcessor,
  createPDFToImageProcessor,
  pdfToImages,
  type PDFToImageOptions,
  type ImageFormat,
} from './pdf-to-image';

// PDF to SVG processor
export {
  PDFToSVGProcessor,
  createPDFToSVGProcessor,
  pdfToSVG,
  type PDFToSVGOptions,
  type SVGResult,
} from './pdf-to-svg';

// PDF to Greyscale processor
export {
  PDFToGreyscaleProcessor,
  createPDFToGreyscaleProcessor,
  pdfToGreyscale,
  type PDFToGreyscaleOptions,
} from './pdf-to-greyscale';

// PDF to JSON processor
export {
  PDFToJSONProcessor,
  createPDFToJSONProcessor,
  pdfToJSON,
  type PDFToJSONOptions,
  type PDFJSONOutput,
  type OutlineItem,
  type PageContent,
} from './pdf-to-json';

// OCR processor
export {
  OCRProcessor,
  createOCRProcessor,
  ocrPDF,
  OCR_LANGUAGE_NAMES,
  type OCROptions,
  type OCRLanguage,
} from './ocr';

// Fix page size processor
export {
  FixPageSizeProcessor,
  createFixPageSizeProcessor,
  fixPageSize,
  PAGE_SIZES as FIX_PAGE_SIZES,
  type FixPageSizeOptions,
  type PageSizePreset,
  type ScaleMode,
} from './fix-page-size';

// Linearize processor
export {
  LinearizePDFProcessor,
  createLinearizeProcessor,
  linearizePDF,
  type LinearizePDFOptions,
} from './linearize';

// Page dimensions processor
export {
  PageDimensionsProcessor,
  createPageDimensionsProcessor,
  analyzePageDimensions,
  type PageDimensionsOptions,
  type PageDimension,
} from './page-dimensions';

// Remove restrictions processor
export {
  RemoveRestrictionsProcessor,
  createRemoveRestrictionsProcessor,
  removeRestrictions,
  type RemoveRestrictionsOptions,
} from './remove-restrictions';

// Compress processor
export {
  CompressPDFProcessor,
  createCompressProcessor,
  compressPDF,
  type CompressPDFOptions,
  type CompressionQuality,
} from './compress';

// Repair processor
export {
  RepairPDFProcessor,
  createRepairProcessor,
  repairPDF,
  type RepairPDFOptions,
} from './repair';

// Encrypt processor
export {
  EncryptPDFProcessor,
  createEncryptProcessor,
  encryptPDF,
  type EncryptPDFOptions,
  type PDFPermissions,
} from './encrypt';

// Decrypt processor
export {
  DecryptPDFProcessor,
  createDecryptProcessor,
  decryptPDF,
  type DecryptPDFOptions,
} from './decrypt';

// Sanitize processor
export {
  SanitizePDFProcessor,
  createSanitizeProcessor,
  sanitizePDF,
  type SanitizePDFOptions,
} from './sanitize';

// Flatten processor
export {
  FlattenPDFProcessor,
  createFlattenProcessor,
  flattenPDF,
  type FlattenPDFOptions,
} from './flatten';

// Remove metadata processor
export {
  RemoveMetadataProcessor,
  createRemoveMetadataProcessor,
  removeMetadata,
  type RemoveMetadataOptions,
} from './remove-metadata';

// Change permissions processor
export {
  ChangePermissionsProcessor,
  createChangePermissionsProcessor,
  changePermissions,
  type ChangePermissionsOptions,
  type PDFPermissionSettings,
} from './change-permissions';

// XPS to PDF processor
export {
  XPSToPDFProcessor,
  createXPSToPDFProcessor,
  xpsToPDF,
  type XPSToPDFOptions,
} from './xps-to-pdf';

// RTF to PDF processor
export {
  RTFToPDFProcessor,
  createRTFToPDFProcessor,
  rtfToPDF,
  type RTFToPDFOptions,
} from './rtf-to-pdf';

// Word to PDF processor
export {
  WordToPDFProcessor,
  createWordToPDFProcessor,
  wordToPDF,
  type WordToPDFOptions,
} from './word-to-pdf';

// Excel to PDF processor
export {
  ExcelToPDFProcessor,
  createExcelToPDFProcessor,
  excelToPDF,
  type ExcelToPDFOptions,
} from './excel-to-pdf';

// PowerPoint to PDF processor
export {
  PPTXToPDFProcessor,
  createPPTXToPDFProcessor,
  pptxToPDF,
  type PPTXToPDFOptions,
} from './pptx-to-pdf';

// EPUB to PDF processor
export {
  EPUBToPDFProcessor,
  createEPUBToPDFProcessor,
  epubToPDF,
  type EPUBToPDFOptions,
} from './epub-to-pdf';

// FB2 to PDF processor
export {
  FB2ToPDFProcessor,
  createFB2ToPDFProcessor,
  fb2ToPDF,
  type FB2ToPDFOptions,
} from './fb2-to-pdf';

// MOBI to PDF processor
export {
  MOBIToPDFProcessor,
  createMOBIToPDFProcessor,
  mobiToPDF,
  type MOBIToPDFOptions,
} from './mobi-to-pdf';

// PDF Grid Combine processor
export {
  GridCombineProcessor,
  createGridCombineProcessor,
  createGridCombinePDF,
  type GridCombineOptions,
} from './grid-combine';

// Extract Images from PDF processor
export {
  ExtractImagesPDFProcessor,
  createExtractImagesProcessor,
  extractImages,
  type ExtractedImage,
  type ExtractImagesOptions,
} from './extract-images';

// Deskew PDF processor
export {
  DeskewPDFProcessor,
  createDeskewProcessor,
  deskewPDF,
  type DeskewPDFOptions,
  type DeskewResult,
  type PageDeskewResult,
} from './deskew';

// PDF Booklet processor
export {
  BookletPDFProcessor,
  createBookletProcessor,
  createBooklet,
  type BookletPDFOptions,
  type BookletGridMode,
  type BookletPaperSize,
  type BookletOrientation,
  type BookletRotation,
} from './booklet';

// Rasterize PDF processor
export {
  RasterizePDFProcessor,
  createRasterizeProcessor,
  rasterizePDF,
  DPI_PRESETS,
  type RasterizePDFOptions,
  type RasterizeFormat,
} from './rasterize';

// Markdown to PDF processor
export {
  MarkdownToPDFProcessor,
  createMarkdownToPDFProcessor,
  markdownToPDF,
  type MarkdownToPDFOptions,
  type MarkdownPageSize,
  type MarkdownTheme,
} from './markdown-to-pdf';

// CBZ to PDF processor
export {
  CbzToPDFProcessor,
  createCbzToPDFProcessor,
  cbzToPDF,
  type CbzToPDFOptions,
  type CbzPageSize,
} from './cbz-to-pdf';

// PDF to CBZ processor
export {
  PDFToCBZProcessor,
  createPDFToCBZProcessor,
  pdfToCbz,
  type CBZMetadataOptions,
} from './pdf-to-cbz';

// PDF to TIFF processor
export {
  PDFToTIFFProcessor,
  createPDFToTIFFProcessor,
  pdfToTiff,
  type PDFToTIFFOptions,
} from './pdf-to-tiff';

// PDF to PDF/A processor
export {
  PdfToPdfAProcessor,
  createPdfToPdfAProcessor,
  pdfToPdfA,
  PDFA_LEVEL_INFO,
  type PdfToPdfAOptions,
  type PdfALevel,
} from './pdf-to-pdfa';

// Font to Outline processor
export {
  FontToOutlineProcessor,
  createFontToOutlineProcessor,
  fontToOutline,
  type FontToOutlineOptions,
} from './font-to-outline';

// Extract Tables processor
export {
  ExtractTablesProcessor,
  createExtractTablesProcessor,
  extractTables,
  type ExtractTablesOptions,
  type TableExportFormat,
} from './extract-tables';

// Email to PDF processor
export {
  EmailToPDFProcessor,
  createEmailToPDFProcessor,
  emailToPDF,
  type EmailToPDFOptions,
  type EmailPageSize,
} from './email-to-pdf';

// OCG Manager processor
export {
  OCGManagerProcessor,
  createOCGManagerProcessor,
  manageOCGLayers,
  listOCGLayers,
  type OCGManagerOptions,
  type OCGLayer,
  type OCGAction,
} from './ocg-manager';

// PDF to Markdown processor
export {
  PDFToMarkdownProcessor,
  createPDFToMarkdownProcessor,
  pdfToMarkdown,
  type PDFToMarkdownOptions,
} from './pdf-to-markdown';

// PDF Overlay & Underlay processor
export {
  OverlayPDFProcessor,
  createOverlayProcessor,
  overlayPDF,
  type OverlayOptions,
} from './overlay';

// PDF Trusted Timestamp processor
export {
  TimestampPDFProcessor,
  createTimestampProcessor,
  timestampPDF,
  type TimestampOptions,
} from './timestamp';

// PDF Page Labels processor
export {
  PageLabelsProcessor,
  createPageLabelsProcessor,
  addPageLabels,
  type PageLabelRule,
  type PageLabelsOptions,
} from './page-labels';

// AI PDF Layout Reflower processor
export {
  AIPDFReflowerProcessor,
  createAIPDFReflowerProcessor,
  reflowPDF,
  type AIPDFReflowerOptions,
} from './ai-pdf-reflower';

// Citation Linker processor
export {
  CitationLinkerProcessor,
  createCitationLinkerProcessor,
  linkCitations,
  type CitationLinkerOptions,
} from './citation-linker';

// Vector Asset Extractor processor
export {
  VectorExtractorProcessor,
  createVectorExtractorProcessor,
  extractVectors,
  type VectorExtractorOptions,
} from './vector-extractor';

// Deep Metadata Sanitizer processor
export {
  DeepSanitizeProcessor,
  createDeepSanitizeProcessor,
  deepSanitizePDF,
  type DeepSanitizeOptions,
} from './deep-sanitize';

// Booklet Folding Simulator processor
export {
  BookletFoldingSimulatorProcessor,
  createBookletFoldingSimulatorProcessor,
  imposeBookletFolding,
  type BookletFoldingOptions,
} from './booklet-folding-simulator';

// PDF To Slide processor
export {
  PDFToSlideProcessor,
  createPDFToSlideProcessor,
  reconstructPDFToSlide,
  type PDFToSlideOptions,
} from './pdf-to-slide';

// Form Logic Designer processor
export {
  FormLogicDesignerProcessor,
  createFormLogicDesignerProcessor,
  injectFormLogic,
  type FormLogicOptions,
} from './form-logic-designer';

// Eink Optimizer processor
export {
  EinkOptimizerProcessor,
  createEinkOptimizerProcessor,
  optimizeEink,
  type EinkOptimizerOptions,
} from './eink-optimizer';

// Cert Cryptor processor
export {
  CertCryptorProcessor,
  createCertCryptorProcessor,
  encryptAndSignCert,
  type CertCryptorOptions,
} from './cert-cryptor';

// Passport ID Composer processor
export {
  PassportIdComposerProcessor,
  createPassportIdComposerProcessor,
  composePassportId,
  type PassportIdOptions,
} from './passport-id-composer';

// Annotation Exporter processor
export {
  AnnotationExporterProcessor,
  createAnnotationExporterProcessor,
  exportAnnotations,
  type AnnotationExportOptions,
} from './annotation-exporter';

// Batch Watermark Remover processor
export {
  BatchWatermarkRemoverProcessor,
  createBatchWatermarkRemoverProcessor,
  removeBatchWatermarks,
  type BatchWatermarkOptions,
} from './batch-watermark-remover';

// Smart Data Redactor processor
export {
  SmartDataRedactorProcessor,
  createSmartDataRedactorProcessor,
  redactSmartData,
  type SmartRedactOptions,
} from './smart-data-redactor';

// Bookmarks Auto Generator processor
export {
  BookmarksAutoGeneratorProcessor,
  createBookmarksAutoGeneratorProcessor,
  autoGenerateBookmarks,
  type BookmarksAutoOptions,
} from './bookmarks-auto-generator';

// Batch Barcode Injector processor
export {
  BatchBarcodeInjectorProcessor,
  createBatchBarcodeInjectorProcessor,
  injectBatchBarcodes,
  type BatchBarcodeOptions,
} from './batch-barcode-injector';

// Signature Ink Optimizer processor
export {
  SignatureInkOptimizerProcessor,
  createSignatureInkOptimizerProcessor,
  optimizeSignatureInk,
  type SignatureInkOptions,
} from './signature-ink-optimizer';

// Dead Link Debugger processor
export {
  DeadLinkDebuggerProcessor,
  createDeadLinkDebuggerProcessor,
  debugDeadLinks,
  type DeadLinkOptions,
} from './dead-link-debugger';

// Interactive TOC Generator processor
export {
  InteractiveTocGeneratorProcessor,
  createInteractiveTocGeneratorProcessor,
  generateInteractiveToc,
  type InteractiveTocOptions,
} from './interactive-toc-generator';

// Global Invoice Parser processor
export {
  GlobalInvoiceParserProcessor,
  createGlobalInvoiceParserProcessor,
  parseGlobalInvoice,
  type GlobalInvoiceOptions,
} from './global-invoice-parser';

// PDF Deskew Aligner processor
export {
  PdfDeskewAlignerProcessor,
  createPdfDeskewAlignerProcessor,
  deskewPDFAligner,
  type PdfDeskewAlignerOptions,
} from './pdf-deskew-aligner';

// PDF Two Column Reflower processor
export {
  PdfTwoColumnReflowerProcessor,
  createPdfTwoColumnReflowerProcessor,
  reflowTwoColumnPDF,
  type PdfTwoColumnReflowerOptions,
} from './pdf-two-column-reflower';

// PDF Page Resizer Uniform processor
export {
  PdfPageResizerUniformProcessor,
  createPdfPageResizerUniformProcessor,
  resizePDFPagesUniform,
  type PdfPageResizerUniformOptions,
} from './pdf-page-resizer-uniform';

// Handwriting Ink Contrast Booster processor
export {
  HandwritingInkContrastBoosterProcessor,
  createHandwritingInkContrastBoosterProcessor,
  boostHandwritingInkContrast,
  type HandwritingInkContrastBoosterOptions,
} from './handwriting-ink-contrast-booster';

// PDF Spine Bookbinder processor
export {
  PdfSpineBookbinderProcessor,
  createPdfSpineBookbinderProcessor,
  designPDFSpine,
  type PdfSpineBookbinderOptions,
} from './pdf-spine-bookbinder';

// PDF Signature Anchor Helper processor
export {
  PdfSignatureAnchorHelperProcessor,
  createPdfSignatureAnchorHelperProcessor,
  injectSignatureAnchors,
  type PdfSignatureAnchorHelperOptions,
} from './pdf-signature-anchor-helper';

// PDF Lossless Slicer processor
export {
  PdfLosslessSlicerProcessor,
  createPdfLosslessSlicerProcessor,
  slicePDFLossless,
  type PdfLosslessSlicerOptions,
} from './pdf-lossless-slicer';

// PDF Scratchpad Canvas processor
export {
  PdfScratchpadCanvasProcessor,
  createPdfScratchpadCanvasProcessor,
  stitchScratchpadCanvas,
  type PdfScratchpadCanvasOptions,
} from './pdf-scratchpad-canvas';

// Photo Tiling Prepress processor
export {
  PhotoTilingPrepressProcessor,
  createPhotoTilingPrepressProcessor,
  prepressPhotoTiling,
  type PhotoTilingPrepressOptions,
} from './photo-tiling-prepress';



