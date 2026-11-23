/**
 * PDF to CBZ Comic Converter Processor
 * 
 * Renders PDF pages to images (JPEG, PNG, WebP) and packages them into
 * a standard Comic Book ZIP (.cbz) archive. Automatically compiles and injects:
 * 1. ComicInfo.xml metadata (Komga, Kavita compatible)
 * 2. metadata.opf schema (Calibre compatible)
 * 3. ComicBookInfo JSON as a global ZIP file comment
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';
import JSZip from 'jszip';

export interface CBZMetadataOptions {
  title?: string;
  series?: string;
  number?: string;
  volume?: string;
  writer?: string;
  publisher?: string;
  genre?: string;
  /** 'No' = Left-to-Right, 'YesAndRightToLeft' = Right-to-Left Manga */
  manga?: 'No' | 'YesAndRightToLeft';
  /** Whether to strip color channels for E-ink screens */
  grayscale?: boolean;
  /** Image format: 'jpg' | 'png' | 'webp' */
  format?: 'jpg' | 'png' | 'webp';
  /** Scale factor (e.g. 1.5 = 108 DPI, 2 = 144 DPI) */
  scale?: number;
  /** Image quality for JPG/WebP (0 to 1) */
  quality?: number;
}

const DEFAULT_OPTIONS: CBZMetadataOptions = {
  title: '',
  series: '',
  number: '1',
  volume: '1',
  writer: '',
  publisher: '',
  genre: '',
  manga: 'No',
  grayscale: false,
  format: 'jpg',
  scale: 1.5,
  quality: 0.85,
};

const FORMAT_MIME_TYPES = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

export class PDFToCBZProcessor extends BasePDFProcessor {
  /**
   * Process and pack PDF to CBZ
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const cbzOptions: CBZMetadataOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<CBZMetadataOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file for CBZ conversion.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    try {
      this.updateProgress(5, 'Loading PDF renderer worker...');
      const pdfjs = await loadPdfjs();

      if (this.checkCancelled()) {
        return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
      }

      this.updateProgress(10, 'Reading PDF document structure...');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;

      if (totalPages === 0) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'The document has zero pages.',
          'Please verify the PDF file is valid.'
        );
      }

      this.updateProgress(15, `Initiating render for ${totalPages} pages...`);

      const zip = new JSZip();
      const imgFolder = zip; // Save in root of zip as standard CBZ

      const progressChunk = 75 / totalPages;
      const pageNumberWidth = Math.max(3, String(totalPages).length);
      const format = cbzOptions.format || 'jpg';
      const mimeType = FORMAT_MIME_TYPES[format];
      const scale = cbzOptions.scale || 1.5;
      const quality = cbzOptions.quality || 0.85;

      const baseName = file.name.replace(/\.pdf$/i, '');
      const bookTitle = cbzOptions.title || baseName;

      // Iterate and render every page of the PDF to Canvas
      for (let i = 1; i <= totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageProgress = 15 + ((i - 1) * progressChunk);
        this.updateProgress(
          pageProgress,
          `Rendering comic page ${i} of ${totalPages}...`
        );

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Failed to obtain 2D canvas context.');
        }

        // Draw solid white background underneath in case PDF is transparent
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Native grayscale filter if applicable (highly performant)
        if (cbzOptions.grayscale) {
          ctx.filter = 'grayscale(100%)';
        }

        await page.render({
          canvasContext: ctx,
          viewport: viewport,
        }).promise;

        // Perform canvas conversion to blob
        const pageBlob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            blob => {
              if (blob) resolve(blob);
              else reject(new Error(`Failed to convert page ${i} to image blob.`));
            },
            mimeType,
            format === 'png' ? undefined : quality
          );
        });

        // Add page image file to ZIP with left-padded page index to maintain correct order
        const paddedIndex = String(i).padStart(pageNumberWidth, '0');
        const filename = `page_${paddedIndex}.${format}`;
        const pageBytes = await pageBlob.arrayBuffer();

        imgFolder.file(filename, pageBytes);
      }

      this.updateProgress(90, 'Assembling metadata descriptors...');

      // 1. Compile ComicInfo.xml
      const comicInfoXml = `<?xml version="1.0" encoding="utf-8"?>
<ComicInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Title>${escapeXml(bookTitle)}</Title>
  <Series>${escapeXml(cbzOptions.series || bookTitle)}</Series>
  <Number>${escapeXml(cbzOptions.number || '1')}</Number>
  <Volume>${escapeXml(cbzOptions.volume || '1')}</Volume>
  <Writer>${escapeXml(cbzOptions.writer || '')}</Writer>
  <Publisher>${escapeXml(cbzOptions.publisher || '')}</Publisher>
  <Genre>${escapeXml(cbzOptions.genre || '')}</Genre>
  <Manga>${cbzOptions.manga === 'YesAndRightToLeft' ? 'YesAndRightToLeft' : 'No'}</Manga>
  <PageCount>${totalPages}</PageCount>
</ComicInfo>`;
      zip.file('ComicInfo.xml', comicInfoXml);

      // 2. Compile Calibre metadata.opf
      const opfXml = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="uuid_id" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${escapeXml(bookTitle)}</dc:title>
    <dc:creator opf:role="aut">${escapeXml(cbzOptions.writer || 'Unknown Writer')}</dc:creator>
    <dc:publisher>${escapeXml(cbzOptions.publisher || 'PDFCraft')}</dc:publisher>
    <dc:language>zh</dc:language>
    <meta name="calibre:series" content="${escapeXml(cbzOptions.series || bookTitle)}"/>
    <meta name="calibre:series_index" content="${escapeXml(cbzOptions.number || '1')}"/>
  </metadata>
</package>`;
      zip.file('metadata.opf', opfXml);

      // 3. Compile ComicBookInfo JSON string as ZIP global Comment
      const now = new Date();
      const comicBookInfo = {
        appID: 'PDFCraft/1.0',
        lastModified: now.toISOString(),
        'comicBookInfo/1.0': {
          series: cbzOptions.series || bookTitle,
          title: bookTitle,
          publisher: cbzOptions.publisher || 'PDFCraft',
          publicationMonth: now.getMonth() + 1,
          publicationYear: now.getFullYear(),
          issue: cbzOptions.number || '1',
          numberOfIssues: 1,
          volume: cbzOptions.volume || '1',
          genre: cbzOptions.genre || '',
          writer: cbzOptions.writer || '',
        },
      };

      this.updateProgress(95, 'Compressing into .cbz archive...');
      const commentString = JSON.stringify(comicBookInfo);

      const cbzBlob = await zip.generateAsync({
        type: 'blob',
        comment: commentString,
        compression: 'DEFLATE',
        compressionOptions: {
          level: 6, // Good balance of compression speed and file size
        },
      });

      this.updateProgress(100, 'Complete!');
      const outputFilename = `${baseName}.cbz`;

      return this.createSuccessOutput(cbzBlob, outputFilename, {
        pageCount: totalPages,
        title: bookTitle,
        format,
      });

    } catch (err) {
      console.error('CBZ packing error:', err);
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to compile CBZ comic bundle.',
        err instanceof Error ? err.message : 'Unknown packing exception'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Escapes special XML characters to prevent XML parsing exceptions
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export function createPDFToCBZProcessor(): PDFToCBZProcessor {
  return new PDFToCBZProcessor();
}

export async function pdfToCbz(
  file: File,
  options: CBZMetadataOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPDFToCBZProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}
