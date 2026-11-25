/**
 * Email to PDF Processor
 * 
 * Converts email files (.eml, .msg) to PDF.
 * Supports inline images, clickable links, and attachments.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPyMuPDF } from '../pymupdf-loader';

/**
 * Page size options
 */
export type EmailPageSize = 'a4' | 'letter' | 'legal';

/**
 * Email to PDF options
 */
export interface EmailToPDFOptions {
    /** Page size */
    pageSize: EmailPageSize;
    /** Include CC and BCC fields */
    includeCcBcc: boolean;
    /** Embed attachments in PDF */
    includeAttachments: boolean;
    /** Date format */
    dateFormat: 'full' | 'short' | 'iso';
    /** Timezone for date display */
    timezone?: string;
}

/**
 * Default email to PDF options
 */
const DEFAULT_EMAIL_OPTIONS: EmailToPDFOptions = {
    pageSize: 'a4',
    includeCcBcc: true,
    includeAttachments: true,
    dateFormat: 'full',
};

/**
 * Email attachment structure
 */
interface EmailAttachment {
    filename: string;
    contentType: string;
    content?: ArrayBuffer;
    contentId?: string;
    base64Data?: string; // Base64 encoded content for inline images
    isInline?: boolean; // Whether this is an inline image
}

/**
 * Parsed email structure
 */
interface ParsedEmail {
    subject: string;
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    date: Date | null;
    htmlBody?: string;
    textBody?: string;
    attachments: EmailAttachment[];
}

/**
 * Parse an .eml file
 */
async function parseEmlFile(file: File): Promise<ParsedEmail> {
    const text = await file.text();

    // Simple EML parser
    const headers: Record<string, string> = {};
    const lines = text.split(/\r?\n/);
    let i = 0;
    let currentHeader = '';
    let currentValue = '';

    // Parse headers
    while (i < lines.length && lines[i] !== '') {
        const line = lines[i];
        if (line.startsWith(' ') || line.startsWith('\t')) {
            // Continuation of previous header
            currentValue += ' ' + line.trim();
        } else {
            // Save previous header
            if (currentHeader) {
                headers[currentHeader.toLowerCase()] = currentValue;
            }
            // Parse new header
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                currentHeader = line.substring(0, colonIndex).trim();
                currentValue = line.substring(colonIndex + 1).trim();
            }
        }
        i++;
    }
    if (currentHeader) {
        headers[currentHeader.toLowerCase()] = currentValue;
    }

    // Skip blank line
    i++;

    // Get body
    let body = lines.slice(i).join('\n');
    const contentType = headers['content-type'] || 'text/plain';

    // Handle multipart content
    const attachments: EmailAttachment[] = [];
    let htmlBody: string | undefined;
    let textBody: string | undefined;

    if (contentType.includes('multipart')) {
        const boundaryMatch = contentType.match(/boundary="?([^";\s]+)"?/i);
        if (boundaryMatch) {
            const boundary = boundaryMatch[1];
            const parts = body.split('--' + boundary);

            for (const part of parts) {
                if (part.trim() === '' || part.trim() === '--') continue;

                const partLines = part.split(/\r?\n/);
                const partHeaders: Record<string, string> = {};
                let j = 0;

                // Parse part headers
                while (j < partLines.length && partLines[j].trim() !== '') {
                    const colonIndex = partLines[j].indexOf(':');
                    if (colonIndex > 0) {
                        const key = partLines[j].substring(0, colonIndex).trim().toLowerCase();
                        const value = partLines[j].substring(colonIndex + 1).trim();
                        partHeaders[key] = value;
                    }
                    j++;
                }
                j++; // Skip blank line

                const partContent = partLines.slice(j).join('\n');
                const partContentType = partHeaders['content-type'] || 'text/plain';
                const transferEncoding = partHeaders['content-transfer-encoding'];
                const contentDisposition = partHeaders['content-disposition'];
                const contentId = partHeaders['content-id']?.replace(/[<>]/g, '');

                if (partContentType.includes('text/html')) {
                    htmlBody = decodeQuotedPrintable(partContent, transferEncoding);
                } else if (partContentType.includes('text/plain')) {
                    textBody = decodeQuotedPrintable(partContent, transferEncoding);
                } else if (partContentType.includes('image/') || contentDisposition || contentId) {
                    // This is an attachment or inline image
                    const isInline = !!(contentDisposition?.includes('inline') || (contentId && !contentDisposition?.includes('attachment')));
                    const filenameMatch = contentDisposition?.match(/filename="?([^";\s]+)"?/i) || 
                                         partContentType.match(/name="?([^";\s]+)"?/i);
                    
                    const attachment: EmailAttachment = {
                        filename: filenameMatch ? filenameMatch[1] : 'attachment',
                        contentType: partContentType,
                        contentId: contentId,
                        isInline: isInline,
                    };

                    // Extract base64 content for inline images and attachments
                    if (transferEncoding?.toLowerCase().includes('base64')) {
                        const cleanedBase64 = partContent.replace(/\s/g, '');
                        attachment.base64Data = cleanedBase64;
                        
                        // Also store as ArrayBuffer for potential embedding
                        try {
                            attachment.content = decodeBase64ToArrayBuffer(cleanedBase64);
                        } catch (e) {
                            console.warn('Failed to decode base64 content:', e);
                        }
                    }

                    attachments.push(attachment);
                }
            }
        }
    } else if (contentType.includes('text/html')) {
        htmlBody = body;
    } else {
        textBody = body;
    }

    // Parse date
    let date: Date | null = null;
    if (headers['date']) {
        try {
            date = new Date(headers['date']);
        } catch {
            date = null;
        }
    }

    return {
        subject: decodeEncodedWord(headers['subject'] || '(No Subject)'),
        from: decodeEncodedWord(headers['from'] || ''),
        to: decodeEncodedWord(headers['to'] || ''),
        cc: headers['cc'] ? decodeEncodedWord(headers['cc']) : undefined,
        bcc: headers['bcc'] ? decodeEncodedWord(headers['bcc']) : undefined,
        date,
        htmlBody,
        textBody,
        attachments,
    };
}

/**
 * Parse a .msg file (Microsoft Outlook format)
 * MSG files use CFB (Compound File Binary) format
 * This is a simplified parser that extracts basic email content
 */
async function parseMsgFile(file: File): Promise<ParsedEmail> {
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);

    // MSG file magic bytes check
    if (data[0] !== 0xD0 || data[1] !== 0xCF || data[2] !== 0x11 || data[3] !== 0xE0) {
        throw new Error('Invalid MSG file format');
    }

    // Extract text strings from the file (simplified approach)
    // MSG files contain UTF-16LE encoded strings
    const extractStrings = (data: Uint8Array): string[] => {
        const strings: string[] = [];
        let current = '';

        for (let i = 0; i < data.length - 1; i++) {
            // Look for printable UTF-16LE characters
            if (data[i] >= 0x20 && data[i] < 0x7F && data[i + 1] === 0) {
                current += String.fromCharCode(data[i]);
                i++; // Skip the null byte
            } else if (current.length > 3) {
                strings.push(current);
                current = '';
            } else {
                current = '';
            }
        }
        if (current.length > 3) {
            strings.push(current);
        }
        return strings;
    };

    const strings = extractStrings(data);

    // Find email properties by pattern matching
    let subject = '(No Subject)';
    let from = '';
    let to = '';
    let textBody = '';

    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        const nextStr = strings[i + 1] || '';

        // Look for patterns
        if (str.toLowerCase().includes('subject') && nextStr.length > 0 && nextStr.length < 500) {
            subject = nextStr;
        } else if ((str.toLowerCase() === 'from' || str.toLowerCase().includes('sender')) && nextStr.includes('@')) {
            from = nextStr;
        } else if ((str.toLowerCase() === 'to' || str.toLowerCase().includes('recipient')) && nextStr.includes('@')) {
            to = nextStr;
        } else if (str.length > 100 && !str.includes('\\') && !str.includes('/') && !str.includes('=')) {
            // Long text is likely the body
            if (str.length > textBody.length) {
                textBody = str;
            }
        }
    }

    // Also try to find email addresses anywhere
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const emails = strings.join(' ').match(emailRegex) || [];

    if (!from && emails.length > 0) {
        from = emails[0] || '';
    }
    if (!to && emails.length > 1) {
        to = emails[1] || '';
    }

    return {
        subject,
        from,
        to,
        date: null,
        htmlBody: undefined,
        textBody: textBody || 'Unable to extract email body from MSG file.',
        attachments: [],
    };
}

/**
 * Decode base64 content
 */
function decodeBase64(text: string, encoding?: string): string {
    if (!encoding || !encoding.toLowerCase().includes('base64')) {
        return text;
    }
    
    try {
        // Remove whitespace and newlines
        const cleanedBase64 = text.replace(/\s/g, '');
        return atob(cleanedBase64);
    } catch {
        return text;
    }
}

/**
 * Decode base64 to ArrayBuffer
 */
function decodeBase64ToArrayBuffer(base64: string): ArrayBuffer {
    // Remove whitespace and newlines
    const cleanedBase64 = base64.replace(/\s/g, '');
    const binaryString = atob(cleanedBase64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * Decode quoted-printable content
 */
function decodeQuotedPrintable(text: string, encoding?: string): string {
    if (!encoding || !encoding.toLowerCase().includes('quoted-printable')) {
        return text;
    }

    return text
        .replace(/=\r?\n/g, '')
        .replace(/=([0-9A-Fa-f]{2})/g, (_, hex) =>
            String.fromCharCode(parseInt(hex, 16))
        );
}

/**
 * Decode RFC 2047 encoded words
 */
function decodeEncodedWord(text: string): string {
    // RFC 2047 ignores whitespace between adjacent encoded words.
    return text.replace(/(\?=)\s+(?==\?)/g, '$1').replace(
        /=\?([^?]+)\?([BQ])\?([^?]+)\?=/gi,
        (word, charset, encoding, content) => {
            try {
                const binary = encoding.toUpperCase() === 'B'
                    ? atob(content)
                    : content.replace(/_/g, ' ').replace(/=([0-9A-Fa-f]{2})/g,
                        (_match: string, hex: string) => String.fromCharCode(parseInt(hex, 16)));
                const bytes = Uint8Array.from(binary, (char: string) => char.charCodeAt(0));
                return new TextDecoder(charset).decode(bytes);
            } catch {
                return word;
            }
        }
    );
}

/**
 * Format date for display
 */
function formatDate(date: Date | null, format: string, timezone?: string): string {
    if (!date) return '';

    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
    };

    switch (format) {
        case 'iso':
            return date.toISOString();
        case 'short':
            return date.toLocaleDateString(undefined, { ...options, dateStyle: 'short' });
        case 'full':
        default:
            return date.toLocaleString(undefined, {
                ...options,
                dateStyle: 'full',
                timeStyle: 'long',
            });
    }
}

/**
 * Replace CID references with base64 data URIs in HTML content
 */
function replaceCidReferences(htmlContent: string, attachments: EmailAttachment[]): string {
    let processedHtml = htmlContent;

    // Build a map of contentId -> base64 data
    const cidMap = new Map<string, string>();
    for (const att of attachments) {
        if (att.contentId && att.base64Data && att.isInline) {
            cidMap.set(att.contentId, `data:${att.contentType};base64,${att.base64Data}`);
        }
    }

    // Replace cid: references in src attributes
    // Matches: src="cid:xxxxx" or src='cid:xxxxx'
    processedHtml = processedHtml.replace(
        /src=["']cid:([^"']+)["']/gi,
        (match, cid) => {
            const dataUri = cidMap.get(cid);
            if (dataUri) {
                return `src="${dataUri}"`;
            }
            return match; // Keep original if not found
        }
    );

    // Also replace in background-image CSS
    processedHtml = processedHtml.replace(
        /url\(["']?cid:([^"')]+)["']?\)/gi,
        (match, cid) => {
            const dataUri = cidMap.get(cid);
            if (dataUri) {
                return `url("${dataUri}")`;
            }
            return match;
        }
    );

    return processedHtml;
}

/**
 * Extract and make links clickable in text content
 */
function makeLinksClickable(text: string): string {
    // URL regex pattern
    const urlPattern = /(https?:\/\/[^\s<>"]+)/gi;
    return text.replace(urlPattern, '<a href="$1">$1</a>');
}

/**
 * Render email to HTML
 */
function renderEmailToHtml(
    email: ParsedEmail,
    options: EmailToPDFOptions
): string {
    const dateStr = formatDate(email.date, options.dateFormat, options.timezone);

    // Process HTML body to replace CID references with base64 data URIs
    let processedHtmlBody = email.htmlBody;
    if (processedHtmlBody) {
        processedHtmlBody = replaceCidReferences(processedHtmlBody, email.attachments);
    }

    let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .email-header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    .email-subject {
      font-size: 1.5em;
      font-weight: bold;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
    .email-meta {
      font-size: 13px;
      color: #666;
    }
    .email-meta-row {
      margin: 5px 0;
    }
    .email-meta-label {
      font-weight: 600;
      display: inline-block;
      width: 60px;
    }
    .email-body {
      margin-top: 20px;
    }
    .attachments {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #ddd;
    }
    .attachment-item {
      display: flex;
      align-items: center;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 4px;
      margin: 5px 0;
    }
    a { color: #0066cc; }
  </style>
</head>
<body>
  <div class="email-header">
    <div class="email-subject">${escapeHtml(email.subject)}</div>
    <div class="email-meta">
      <div class="email-meta-row">
        <span class="email-meta-label">From:</span>
        <span>${escapeHtml(email.from)}</span>
      </div>
      <div class="email-meta-row">
        <span class="email-meta-label">To:</span>
        <span>${escapeHtml(email.to)}</span>
      </div>`;

    if (options.includeCcBcc && email.cc) {
        html += `
      <div class="email-meta-row">
        <span class="email-meta-label">CC:</span>
        <span>${escapeHtml(email.cc)}</span>
      </div>`;
    }

    if (options.includeCcBcc && email.bcc) {
        html += `
      <div class="email-meta-row">
        <span class="email-meta-label">BCC:</span>
        <span>${escapeHtml(email.bcc)}</span>
      </div>`;
    }

    html += `
      <div class="email-meta-row">
        <span class="email-meta-label">Date:</span>
        <span>${escapeHtml(dateStr)}</span>
      </div>
    </div>
  </div>
  
  <div class="email-body">
    ${processedHtmlBody || makeLinksClickable(escapeHtml(email.textBody || '')).replace(/\n/g, '<br>')}
  </div>`;

    // Show non-inline attachments in the list
    const nonInlineAttachments = email.attachments.filter(att => !att.isInline);
    if (options.includeAttachments && nonInlineAttachments.length > 0) {
        html += `
  <div class="attachments">
    <strong>Attachments (${nonInlineAttachments.length}):</strong>`;

        for (const att of nonInlineAttachments) {
            const fileSize = att.content ? ` (${(att.content.byteLength / 1024).toFixed(1)} KB)` : '';
            html += `
    <div class="attachment-item">
      📎 ${escapeHtml(att.filename)}${fileSize}
    </div>`;
        }

        html += `
  </div>`;
    }

    html += `
</body>
</html>`;

    return html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Email to PDF Processor
 */
export class EmailToPDFProcessor extends BasePDFProcessor {
    /**
     * Process email file and convert to PDF
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const emailOptions: EmailToPDFOptions = {
            ...DEFAULT_EMAIL_OPTIONS,
            ...(options as Partial<EmailToPDFOptions>),
        };

        // Validate single file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one email file.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];
        const fileName = file.name.toLowerCase();

        // Validate file type
        if (!fileName.endsWith('.eml') && !fileName.endsWith('.msg')) {
            return this.createErrorOutput(
                PDFErrorCode.FILE_TYPE_INVALID,
                'Invalid file type.',
                'Please provide an .eml or .msg file.'
            );
        }

        try {
            this.updateProgress(10, 'Parsing email file...');

            // Parse email
            let email: ParsedEmail;

            if (fileName.endsWith('.eml')) {
                email = await parseEmlFile(file);
            } else {
                email = await parseMsgFile(file);
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(30, 'Rendering email...');

            // Render to HTML
            const htmlContent = renderEmailToHtml(email, emailOptions);

            this.updateProgress(50, 'Loading PDF engine...');

            // Load PyMuPDF
            const pymupdf = await loadPyMuPDF();

            this.updateProgress(70, 'Converting to PDF...');

            // Prepare attachments for embedding (only non-inline attachments)
            const attachmentsToEmbed = email.attachments
                .filter(att => !att.isInline && att.content)
                .map(att => ({
                    filename: att.filename,
                    contentType: att.contentType,
                    content: att.content,
                }));

            // Convert HTML to PDF with embedded attachments
            const pdfBlob = await pymupdf.htmlToPdf(htmlContent, {
                pageSize: emailOptions.pageSize,
                margins: { top: 50, right: 50, bottom: 50, left: 50 },
                attachments: emailOptions.includeAttachments ? attachmentsToEmbed : [],
            });

            this.updateProgress(100, 'Complete!');

            // Generate output filename
            const baseName = file.name.replace(/\.[^.]+$/, '');
            const outputFilename = `${baseName}.pdf`;

            return this.createSuccessOutput(pdfBlob, outputFilename, {
                subject: email.subject,
                from: email.from,
                attachmentsCount: email.attachments.length,
            });

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert email to PDF.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['message/rfc822', 'application/vnd.ms-outlook'];
    }
}

/**
 * Create a new instance of the email to PDF processor
 */
export function createEmailToPDFProcessor(): EmailToPDFProcessor {
    return new EmailToPDFProcessor();
}

/**
 * Convert email to PDF (convenience function)
 */
export async function emailToPDF(
    file: File,
    options?: Partial<EmailToPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createEmailToPDFProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
