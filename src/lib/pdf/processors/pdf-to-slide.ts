/**
 * AI PDF-to-Slide Reconstructor Processor
 * Extracts outline structures, headers, and bullet points from PDF,
 * and packages them into a fully-editable PowerPoint PPTX presentation (OOXML).
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

export interface PDFToSlideOptions {
  themeColor?: string; // Hex color like '#1a56db' or '#8b5cf6'
  extractCharts?: boolean;
}

interface SlideData {
  title: string;
  bullets: string[];
}

export class PDFToSlideProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const slideOptions: PDFToSlideOptions = {
      themeColor: '#1e3a8a', // Default deep blue
      extractCharts: true,
      ...(options as Partial<PDFToSlideOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly one PDF file is required.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading pdf.js parser engine...');
      const pdfjs = await loadPdfjs();

      this.updateProgress(20, 'Reading PDF layout text layers...');
      const arrayBuffer = await file.arrayBuffer();
      
      // Load PDF using PDFJS
      const loadingTask = pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) });
      const pdfDoc = await loadingTask.promise;
      const totalPages = pdfDoc.numPages;

      this.updateProgress(35, 'Analyzing document hierarchy & outlines...');
      
      const slides: SlideData[] = [];

      // Extract slide outlines page by page
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        this.updateProgress(
          35 + Math.floor((pageNum / totalPages) * 30),
          `Extracting page ${pageNum} text elements...`
        );

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        // Group text items by y coordinates or fonts to extract Title & Bullet points
        const items = (textContent.items as any[]).filter(item => 'str' in item);
        
        if (items.length === 0) {
          slides.push({
            title: `Page ${pageNum}`,
            bullets: ['[Scanned page/No readable text]'],
          });
          continue;
        }

        // Sort items by top-to-bottom (y descending in PDF usually, but transform[5] is y)
        // transform array: [scaleX, skewX, skewY, scaleY, translateX, translateY]
        items.sort((a, b) => b.transform[5] - a.transform[5]);

        let titleText = '';
        const bullets: { text: string; y: number }[] = [];
        let maxFontSize = 0;

        // Pass 1: Find the largest font size to identify the header
        items.forEach(item => {
          const fontSize = Math.abs(item.transform[3] || item.height || 12);
          if (fontSize > maxFontSize && item.str.trim().length > 2) {
            maxFontSize = fontSize;
          }
        });

        // Pass 2: Separate Title and Bullets
        items.forEach(item => {
          const text = item.str.trim();
          if (!text) return;

          const fontSize = Math.abs(item.transform[3] || item.height || 12);
          
          // If font size is close to the max and title is not too long, treat as Title
          if (fontSize >= maxFontSize * 0.85 && titleText.length < 50) {
            titleText += (titleText ? ' ' : '') + text;
          } else {
            // Keep bullets clean and avoid too small footer texts
            if (fontSize > 6 && text.length > 3) {
              // Combine close-by inline elements or treat as separate bullet
              const previous = bullets[bullets.length - 1];
              if (previous && Math.abs(item.transform[5] - previous.y) < 5) {
                previous.text += ' ' + text;
                previous.y = item.transform[5];
              } else {
                bullets.push({ text, y: item.transform[5] });
              }
            }
          }
        });

        // Clean coordinates out of bullet array
        const cleanBullets = bullets.map(b => b.text.trim()).filter(b => b.length > 0);

        slides.push({
          title: titleText.trim() || `Slide ${pageNum}`,
          bullets: cleanBullets.length > 0 ? cleanBullets : ['No bullet points extracted.'],
        });
      }

      this.updateProgress(70, 'Reconstructing Open XML PowerPoint archive...');
      
      const zip = new JSZip();

      // Create base PPTX folder structure
      // 1. [Content_Types].xml
      const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  ${slides.map((_, i) => `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n')}
</Types>`;
      zip.file('[Content_Types].xml', contentTypesXml);

      // 2. _rels/.rels
      const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`;
      zip.file('_rels/.rels', relsXml);

      // 3. ppt/_rels/presentation.xml.rels
      const presentationRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdMaster1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
  <Relationship Id="rIdTheme1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
  ${slides.map((_, i) => `<Relationship Id="rIdSlide${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`).join('\n')}
</Relationships>`;
      zip.folder('ppt')!.folder('_rels')!.file('presentation.xml.rels', presentationRelsXml);

      // 4. ppt/presentation.xml
      const presentationXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst>
    <p:sldMasterId id="2147483648" r:id="rIdMaster1"/>
  </p:sldMasterIdLst>
  <p:sldIdLst>
    ${slides.map((_, i) => `<p:sldId id="${256 + i}" r:id="rIdSlide${i + 1}"/>`).join('\n')}
  </p:sldIdLst>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`;
      zip.folder('ppt')!.file('presentation.xml', presentationXml);

      // 5. ppt/slideMasters/slideMaster1.xml
      const slideMasterXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:bg>
      <p:bgRef idx="1001">
        <a:schemeClr val="bg1"/>
      </p:bgRef>
    </p:bg>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr>
        <a:xfrm>
          <a:off x="0" y="0"/>
          <a:ext cx="0" cy="0"/>
          <a:chOff x="0" y="0"/>
          <a:chExt cx="0" cy="0"/>
        </a:xfrm>
      </p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:txStyles>
    <p:titleStyle/>
    <p:bodyStyle/>
    <p:otherStyle/>
  </p:txStyles>
  <p:sldLayoutIdLst>
    <p:sldLayoutId id="2147483649" r:id="rIdLayout1"/>
  </p:sldLayoutIdLst>
</p:sldMaster>`;
      zip.folder('ppt')!.folder('slideMasters')!.file('slideMaster1.xml', slideMasterXml);

      // 6. ppt/slideMasters/_rels/slideMaster1.xml.rels
      const slideMasterRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rIdLayout1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
</Relationships>`;
      zip.folder('ppt')!.folder('slideMasters')!.folder('_rels')!.file('slideMaster1.xml.rels', slideMasterRelsXml);

      // 7. ppt/slideLayouts/slideLayout1.xml
      const slideLayoutXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="title">
  <p:cSld name="Title Slide">
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr/>
    </p:spTree>
  </p:cSld>
</p:sldLayout>`;
      zip.folder('ppt')!.folder('slideLayouts')!.file('slideLayout1.xml', slideLayoutXml);

      // 8. ppt/theme/theme1.xml (Basic color theme)
      const themeXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
  <a:themeElements>
    <a:clrScheme name="Office">
      <a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>
      <a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1F497D"/></a:dk2>
      <a:lt2><a:srgbClr val="EEECE1"/></a:lt2>
      <a:accent1><a:srgbClr val="${slideOptions.themeColor?.replace('#', '') || '1e3a8a'}"/></a:accent1>
      <a:accent2><a:srgbClr val="C0504D"/></a:accent2>
      <a:accent3><a:srgbClr val="9BBB59"/></a:accent3>
      <a:accent4><a:srgbClr val="8064A2"/></a:accent4>
      <a:accent5><a:srgbClr val="4BACC6"/></a:accent5>
      <a:accent6><a:srgbClr val="F79646"/></a:accent6>
      <a:hlink><a:srgbClr val="0000FF"/></a:hlink>
      <a:folHlink><a:srgbClr val="800080"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Office">
      <a:majorFont><a:latin typeface="Calibri"/><a:ea typeface="微软雅黑"/><a:cs typeface=""/></a:majorFont>
      <a:minorFont><a:latin typeface="Calibri"/><a:ea typeface="微软雅黑"/><a:cs typeface=""/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Office">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>`;
      zip.folder('ppt')!.folder('theme')!.file('theme1.xml', themeXml);

      // 9. Generate individual slides: ppt/slides/slide${i}.xml
      const slidesFolder = zip.folder('ppt')!.folder('slides')!;
      slides.forEach((slide, i) => {
        const slideXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr>
        <a:xfrm>
          <a:off x="0" y="0"/>
          <a:ext cx="0" cy="0"/>
          <a:chOff x="0" y="0"/>
          <a:chExt cx="0" cy="0"/>
        </a:xfrm>
      </p:grpSpPr>
      
      <!-- Title Box -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="${10 + i * 2}" name="Title"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr/>
        </p:nvSpPr>
        <p:spPr>
          <!-- x: 0.5 inches (457200 EMUs), y: 0.8 inches (731520 EMUs) -->
          <!-- width: 9.0 inches (8229600 EMUs), height: 1.2 inches (1097280 EMUs) -->
          <a:xfrm>
            <a:off x="457200" y="731520"/>
            <a:ext cx="8229600" cy="1097280"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr anchor="ctr"/>
          <a:lstStyle/>
          <a:p>
            <a:pPr algn="l"/>
            <a:r>
              <a:rPr sz="3600" bold="1">
                <a:solidFill><a:schemeClr val="accent1"/></a:solidFill>
              </a:rPr>
              <a:t>${escapeXml(slide.title)}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>

      <!-- Body / Bullets Box -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="${11 + i * 2}" name="Body"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr/>
        </p:nvSpPr>
        <p:spPr>
          <!-- x: 0.5 inches, y: 2.2 inches (2011680 EMUs) -->
          <!-- width: 9.0 inches, height: 4.5 inches (4114800 EMUs) -->
          <a:xfrm>
            <a:off x="457200" y="2011680"/>
            <a:ext cx="8229600" cy="4114800"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>
          ${slide.bullets.map(bullet => `
          <a:p>
            <a:pPr lvl="0">
              <a:buChar char="•"/>
            </a:pPr>
            <a:r>
              <a:rPr sz="1800"/>
              <a:t>${escapeXml(bullet)}</a:t>
            </a:r>
          </a:p>
          `).join('\n')}
        </p:txBody>
      </p:sp>
    </p:spTree>
  </p:cSld>
</p:sld>`;
        slidesFolder.file(`slide${i + 1}.xml`, slideXml);
      });

      this.updateProgress(90, 'Building ZIP binary streams...');
      const pptxBytes = await zip.generateAsync({ type: 'blob' });
      const outputFilename = file.name.replace(/\.pdf$/i, '.pptx');

      this.updateProgress(100, 'Slide reconstruction complete!');
      return this.createSuccessOutput(pptxBytes, outputFilename, {
        slides,
        pageCount: totalPages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to reconstruct PDF slides.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

// Simple XML Escape helper
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
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

export function createPDFToSlideProcessor(): PDFToSlideProcessor {
  return new PDFToSlideProcessor();
}

export async function reconstructPDFToSlide(
  file: File,
  options?: Partial<PDFToSlideOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPDFToSlideProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}
