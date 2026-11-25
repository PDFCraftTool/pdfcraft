/**
 * PDF to Markdown Processor
 * 
 * Converts PDF files to Markdown format.
 * Extracts text content and attempts to preserve formatting like headings, lists, etc.
 */

import * as PDFJS from 'pdfjs-dist';
import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { withBasePath } from '@/lib/utils/path';

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
    PDFJS.GlobalWorkerOptions.workerSrc = withBasePath('/workers/pdf.worker.min.js');
}

/**
 * PDF to Markdown options
 */
export interface PDFToMarkdownOptions {
    /** Include page numbers as headers */
    includePageNumbers?: boolean;
    /** Page range to extract (e.g., '1-3, 5, 7') */
    pageRange?: string;
    /** Preserve line breaks */
    preserveLineBreaks?: boolean;
}

/**
 * Text item from PDF.js
 */
interface TextItem {
    str: string;
    transform: number[];
    width: number;
    height: number;
    fontName: string;
    dir: string;
    hasEOL?: boolean;
}

/**
 * Line with text items
 */
interface TextLine {
    y: number;
    x: number;
    items: TextItem[];
    fontSize: number;
    isBold: boolean;
    isItalic: boolean;
}

/**
 * Link annotation
 */
interface LinkAnnotation {
    x: number;
    y: number;
    width: number;
    height: number;
    url: string;
}

/**
 * PDF to Markdown Processor
 */
export class PDFToMarkdownProcessor extends BasePDFProcessor {
    protected reset(): void {
        super.reset();
    }

    /**
     * Parse page range string (e.g., "1-3, 5, 7-9")
     */
    private parsePageRange(rangeStr: string, totalPages: number): number[] {
        const pages = new Set<number>();
        const parts = rangeStr.split(',').map((s) => s.trim());

        for (const part of parts) {
            if (!/^\d+(?:\s*-\s*\d+)?$/.test(part)) return [];
            if (part.includes('-')) {
                const [start, end] = part.split('-').map((s) => parseInt(s.trim(), 10));
                if (!isNaN(start) && !isNaN(end)) {
                    for (let i = Math.max(1, start); i <= Math.min(totalPages, end); i++) {
                        pages.add(i);
                    }
                }
            } else {
                const num = parseInt(part, 10);
                if (!isNaN(num) && num >= 1 && num <= totalPages) {
                    pages.add(num);
                }
            }
        }

        return Array.from(pages).sort((a, b) => a - b);
    }

    /**
     * Group text items by lines based on Y position
     */
    private groupIntoLines(items: TextItem[]): TextLine[] {
        if (items.length === 0) return [];

        const lines: TextLine[] = [];
        const tolerance = 5;

        for (const item of items) {
            const y = item.transform[5];
            const x = item.transform[4];
            // Use height for font size, fallback to transform scale
            const fontSize = item.height > 0 ? item.height : Math.abs(item.transform[0]);
            const fontName = item.fontName.toLowerCase();
            const isBold = fontName.includes('bold') || fontName.includes('heavy') || fontName.includes('black');
            const isItalic = fontName.includes('italic') || fontName.includes('oblique');

            let foundLine = lines.find((line) => Math.abs(line.y - y) < tolerance);

            if (foundLine) {
                foundLine.items.push(item);
                if (fontSize > foundLine.fontSize) {
                    foundLine.fontSize = fontSize;
                }
                if (isBold) foundLine.isBold = true;
                if (isItalic) foundLine.isItalic = true;
            } else {
                lines.push({
                    y,
                    x,
                    items: [item],
                    fontSize,
                    isBold,
                    isItalic,
                });
            }
        }

        lines.sort((a, b) => b.y - a.y);

        for (const line of lines) {
            line.items.sort((a, b) => a.transform[4] - b.transform[4]);
            line.x = line.items[0]?.transform[4] || 0;
        }

        return lines;
    }

    /**
     * Detect if lines form a table structure
     */
    private detectTable(lines: TextLine[], startIdx: number): { isTable: boolean; endIdx: number; rows: string[][] } {
        if (startIdx >= lines.length) return { isTable: false, endIdx: startIdx, rows: [] };
        
        const rows: string[][] = [];
        let endIdx = startIdx;
        
        // Collect items from multiple lines to find column pattern
        const sampleLines = lines.slice(startIdx, Math.min(startIdx + 5, lines.length));
        const allXPositions: number[] = [];
        
        for (const line of sampleLines) {
            for (const item of line.items) {
                allXPositions.push(item.transform[4]);
            }
        }
        
        if (allXPositions.length < 6) return { isTable: false, endIdx: startIdx, rows: [] };
        
        // Cluster X positions to find columns
        allXPositions.sort((a, b) => a - b);
        const columns: number[] = [];
        let currentCluster = [allXPositions[0]];
        
        for (let i = 1; i < allXPositions.length; i++) {
            if (allXPositions[i] - allXPositions[i-1] < 15) {
                currentCluster.push(allXPositions[i]);
            } else {
                if (currentCluster.length >= 2) {
                    columns.push(currentCluster.reduce((a, b) => a + b) / currentCluster.length);
                }
                currentCluster = [allXPositions[i]];
            }
        }
        if (currentCluster.length >= 2) {
            columns.push(currentCluster.reduce((a, b) => a + b) / currentCluster.length);
        }
        
        if (columns.length < 3) return { isTable: false, endIdx: startIdx, rows: [] };
        
        // Extract table rows
        for (let i = startIdx; i < Math.min(startIdx + 100, lines.length); i++) {
            const line = lines[i];
            if (line.items.length === 0) {
                if (rows.length >= 2) break;
                continue;
            }
            
            const row: string[] = new Array(columns.length).fill('');
            
            for (const item of line.items) {
                const x = item.transform[4];
                let closestCol = 0;
                let minDist = Math.abs(x - columns[0]);
                
                for (let c = 1; c < columns.length; c++) {
                    const dist = Math.abs(x - columns[c]);
                    if (dist < minDist) {
                        minDist = dist;
                        closestCol = c;
                    }
                }
                
                if (minDist < 40) {
                    row[closestCol] += (row[closestCol] ? ' ' : '') + item.str;
                }
            }
            
            if (row.some(cell => cell.trim())) {
                rows.push(row.map(c => c.trim()));
                endIdx = i;
            } else if (rows.length >= 2) {
                break;
            }
        }
        
        return {
            isTable: rows.length >= 2,
            endIdx,
            rows
        };
    }

    /**
     * Convert table rows to markdown table
     */
    private tableToMarkdown(rows: string[][]): string {
        if (rows.length === 0) return '';
        
        const maxCols = Math.max(...rows.map(r => r.length));
        const normalizedRows = rows.map(row => {
            const normalized = [...row];
            while (normalized.length < maxCols) normalized.push('');
            return normalized;
        });
        
        const lines: string[] = [];
        
        // Header row
        lines.push('| ' + normalizedRows[0].join(' | ') + ' |');
        
        // Separator
        lines.push('| ' + normalizedRows[0].map(() => '---').join(' | ') + ' |');
        
        // Data rows
        for (let i = 1; i < normalizedRows.length; i++) {
            lines.push('| ' + normalizedRows[i].join(' | ') + ' |');
        }
        
        return lines.join('\n');
    }
    private linesToMarkdown(lines: TextLine[], preserveLineBreaks: boolean, links: LinkAnnotation[] = []): string {
        if (lines.length === 0) return '';

        const result: string[] = [];
        let prevLineY = 0;
        let prevIndent = 0;
        const avgFontSize = lines.reduce((sum, l) => sum + l.fontSize, 0) / lines.length;
        const leftMargin = Math.min(...lines.map(l => l.x));
        let inCodeBlock = false;

        let i = 0;
        while (i < lines.length) {
            // Try table detection
            const tableResult = this.detectTable(lines, i);
            if (tableResult.isTable && tableResult.rows.length >= 2) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                if (result.length > 0 && result[result.length - 1] !== '') {
                    result.push('');
                }
                result.push(this.tableToMarkdown(tableResult.rows));
                result.push('');
                i = tableResult.endIdx + 1;
                prevLineY = 0;
                prevIndent = 0;
                continue;
            }

            const line = lines[i];
            let text = line.items.map((item) => item.str).join(' ').replace(/\s+/g, ' ');
            const trimmedText = text.trim();

            if (!trimmedText) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                if (result.length > 0 && result[result.length - 1] !== '') {
                    result.push('');
                }
                prevLineY = line.y;
                i++;
                continue;
            }

            // Apply links to text
            let formattedLine = this.applyLinks(trimmedText, line, links);

            const fontSize = line.fontSize;
            const sizeRatio = fontSize / avgFontSize;
            const indent = Math.round((line.x - leftMargin) / avgFontSize);
            const isMonospace = line.items[0]?.fontName.toLowerCase().includes('mono') || 
                               line.items[0]?.fontName.toLowerCase().includes('courier');

            // Detect headings based on font size ratio and text characteristics
            let headingLevel = 0;
            const isShortLine = trimmedText.length < 80;
            const endsWithPunctuation = /[.!?:;,]$/.test(trimmedText);
            
            // H1: very large font or large + bold
            if (sizeRatio >= 1.8 || (sizeRatio >= 1.4 && line.isBold && isShortLine)) {
                headingLevel = 1;
            } 
            // H2: large font or medium + bold
            else if (sizeRatio >= 1.4 || (sizeRatio >= 1.2 && line.isBold && isShortLine && !endsWithPunctuation)) {
                headingLevel = 2;
            } 
            // H3: slightly larger font + short line + no ending punctuation
            else if (sizeRatio >= 1.15 && isShortLine && !endsWithPunctuation) {
                headingLevel = 3;
            }
            // Bold short line without punctuation could be H3
            else if (line.isBold && isShortLine && !endsWithPunctuation && trimmedText.length < 50) {
                headingLevel = 3;
            }

            if (headingLevel > 0) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                if (result.length > 0 && result[result.length - 1] !== '') {
                    result.push('');
                }
                formattedLine = '#'.repeat(headingLevel) + ' ' + formattedLine;
            }
            // Code blocks (monospace font)
            else if (isMonospace) {
                if (!inCodeBlock) {
                    if (result.length > 0 && result[result.length - 1] !== '') {
                        result.push('');
                    }
                    result.push('```');
                    inCodeBlock = true;
                }
                result.push(trimmedText);
                prevLineY = line.y;
                prevIndent = indent;
                i++;
                continue;
            }
            // Bullet lists
            else if (/^[•●○◦▪▸►\-\*]\s+/.test(trimmedText)) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                const indentStr = '  '.repeat(Math.min(indent, 3));
                formattedLine = indentStr + '- ' + formattedLine.replace(/^[•●○◦▪▸►\-\*]\s+/, '');
            }
            // Numbered lists
            else if (/^\d+[.\)]\s+/.test(trimmedText)) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                const match = trimmedText.match(/^(\d+)[.\)]\s+(.*)$/);
                if (match) {
                    const indentStr = '  '.repeat(Math.min(indent, 3));
                    formattedLine = indentStr + `${match[1]}. ${match[2]}`;
                }
            }
            // Bold text
            else if (line.isBold && !headingLevel) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                formattedLine = `**${formattedLine}**`;
            }
            // Italic text
            else if (line.isItalic && !line.isBold) {
                if (inCodeBlock) {
                    result.push('```');
                    inCodeBlock = false;
                }
                formattedLine = `*${formattedLine}*`;
            }
            // Paragraph continuation
            else if (!preserveLineBreaks && i > 0 && !inCodeBlock) {
                const lineGap = Math.abs(prevLineY - line.y);
                const avgLineHeight = avgFontSize * 1.2;
                const lastLine = result[result.length - 1];
                
                if (lastLine && lineGap < avgLineHeight * 1.5 && 
                    !lastLine.startsWith('#') &&
                    !lastLine.trim().startsWith('-') &&
                    !/^\d+\./.test(lastLine.trim()) &&
                    !lastLine.startsWith('|') &&
                    Math.abs(indent - prevIndent) <= 1) {
                    result[result.length - 1] += ' ' + formattedLine;
                    prevLineY = line.y;
                    prevIndent = indent;
                    i++;
                    continue;
                }
            }

            // Close code block if we're not in monospace anymore
            if (inCodeBlock && !isMonospace) {
                result.push('```');
                result.push('');
                inCodeBlock = false;
            }

            result.push(formattedLine);
            
            if (headingLevel > 0) {
                result.push('');
            }

            prevLineY = line.y;
            prevIndent = indent;
            i++;
        }

        // Close any open code block
        if (inCodeBlock) {
            result.push('```');
        }

        let markdown = result.join('\n');
        markdown = markdown.replace(/\n{4,}/g, '\n\n\n');
        markdown = markdown.replace(/ +\n/g, '\n');
        
        return markdown.trim();
    }

    /**
     * Apply link annotations to text
     */
    private applyLinks(text: string, line: TextLine, links: LinkAnnotation[]): string {
        if (links.length === 0) return text;
        
        // Find links that overlap with this line
        const lineLinks = links.filter(link => {
            const lineY = line.y;
            const lineHeight = line.fontSize;
            return Math.abs(link.y - lineY) < lineHeight * 2;
        });
        
        if (lineLinks.length === 0) return text;
        
        // Simple URL detection and replacement
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (match) => `[${match}](${match})`);
    }

    /**
     * Process PDF and convert to Markdown
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options = {} } = input;
        const {
            includePageNumbers = false,
            pageRange = '',
            preserveLineBreaks = true,
        } = options as PDFToMarkdownOptions;

        // Validate input
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];

        // Validate file type
        if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
            return this.createErrorOutput(
                PDFErrorCode.FILE_TYPE_INVALID,
                'Invalid file type. Please upload a PDF file.',
                `Received: ${file.type || 'unknown'}`
            );
        }

        try {
            this.updateProgress(5, 'Loading PDF...');

            // Load PDF
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await PDFJS.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;

            this.updateProgress(15, `PDF loaded. Total pages: ${totalPages}`);

            // Determine pages to process
            let pagesToProcess: number[];
            if (pageRange.trim()) {
                pagesToProcess = this.parsePageRange(pageRange, totalPages);
                if (pagesToProcess.length === 0) {
                    return this.createErrorOutput(
                        PDFErrorCode.INVALID_PAGE_RANGE,
                        'The page selection is invalid or contains no pages in this document.'
                    );
                }
            } else {
                pagesToProcess = Array.from({ length: totalPages }, (_, i) => i + 1);
            }

            const markdownParts: string[] = [];

            // Process each page
            for (let i = 0; i < pagesToProcess.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(
                        PDFErrorCode.PROCESSING_CANCELLED,
                        'Processing was cancelled.'
                    );
                }

                const pageNum = pagesToProcess[i];
                const progress = 15 + Math.floor((i / pagesToProcess.length) * 80);
                this.updateProgress(progress, `Processing page ${pageNum}/${totalPages}...`);

                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                // Extract link annotations
                const annotations = await page.getAnnotations();
                const links: LinkAnnotation[] = [];
                for (const annot of annotations) {
                    if (annot.subtype === 'Link' && annot.url) {
                        links.push({
                            x: annot.rect[0],
                            y: annot.rect[1],
                            width: annot.rect[2] - annot.rect[0],
                            height: annot.rect[3] - annot.rect[1],
                            url: annot.url,
                        });
                    }
                }

                // Extract text items
                const items: TextItem[] = [];
                for (const item of textContent.items) {
                    if ('str' in item) {
                        items.push(item as TextItem);
                    }
                }

                // Group into lines and convert to markdown
                const lines = this.groupIntoLines(items);
                const pageMarkdown = this.linesToMarkdown(lines, preserveLineBreaks, links);

                if (pageMarkdown.trim()) {
                    if (includePageNumbers) {
                        markdownParts.push(`## Page ${pageNum}\n\n${pageMarkdown}`);
                    } else {
                        markdownParts.push(pageMarkdown);
                    }
                }
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(95, 'Creating Markdown file...');

            // Combine all parts
            const finalMarkdown = markdownParts.join('\n\n---\n\n');

            // Create blob
            const blob = new Blob([finalMarkdown], { type: 'text/markdown;charset=utf-8' });

            const baseName = file.name.replace(/\.pdf$/i, '');
            const outputName = `${baseName}.md`;

            this.updateProgress(100, 'Conversion complete!');

            return this.createSuccessOutput(blob, outputName, {
                format: 'markdown',
                pageCount: pagesToProcess.length,
                characterCount: finalMarkdown.length,
            });
        } catch (error) {
            console.error('PDF to Markdown error:', error);

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert PDF to Markdown.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }
}

/**
 * Create a new instance of the PDF to Markdown processor
 */
export function createPDFToMarkdownProcessor(): PDFToMarkdownProcessor {
    return new PDFToMarkdownProcessor();
}

/**
 * Convert PDF to Markdown (convenience function)
 */
export async function pdfToMarkdown(
    file: File,
    options?: Partial<PDFToMarkdownOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createPDFToMarkdownProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
