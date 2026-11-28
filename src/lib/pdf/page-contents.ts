import { PDFName, type PDFPage } from 'pdf-lib';

/**
 * Blank pages are often written without a /Contents entry (pdf-lib does this
 * until something is drawn, as does the Add Blank Page tool). pdf-lib refuses
 * to embed such a page as a form XObject ("Can't embed page with missing
 * Contents"), so give it an empty content stream first. Rendering is unchanged.
 */
export function ensurePageContents(page: PDFPage): PDFPage {
  if (!page.node.Contents()) {
    const { context } = page.doc;
    page.node.set(PDFName.of('Contents'), context.register(context.stream(new Uint8Array(0))));
  }
  return page;
}
