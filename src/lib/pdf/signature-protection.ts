/**
 * Signature Protection & Finalization
 *
 * Ensures placed signatures are locked and uneditable across external PDF readers
 * (such as Adobe Acrobat Reader, Apple Preview, Google Chrome, Microsoft Edge).
 *
 * Implements ISO 32000-2 Table 167 Annotation Flags:
 * - Bit 3 (4): Print
 * - Bit 7 (64): ReadOnly (do not interact with user)
 * - Bit 8 (128): Locked (cannot be moved, resized, or deleted)
 * - Bit 10 (512): LockedContents (appearance contents cannot be modified)
 * Sum = 4 | 64 | 128 | 512 = 708
 */

import { loadPdfLib } from './loader';

export const SIGNATURE_LOCKED_FLAGS = 4 | 64 | 128 | 512;

/**
 * Locks and protects signature annotations in the PDF so they cannot be moved,
 * resized, edited, or copied in external viewers.
 */
export async function protectSignatureAnnotations(pdfBytes: Uint8Array): Promise<Uint8Array> {
  const pdfLib = await loadPdfLib();
  const pdfDoc = await pdfLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const { PDFName, PDFNumber, PDFArray, PDFDict } = pdfLib;

  const pages = pdfDoc.getPages();

  for (const page of pages) {
    const annotsRef = page.node.get(PDFName.of('Annots'));
    if (!annotsRef) continue;

    const annots = pdfDoc.context.lookup(annotsRef);
    if (!(annots instanceof PDFArray)) continue;

    for (let i = 0; i < annots.size(); i++) {
      const annotRef = annots.get(i);
      const annot = pdfDoc.context.lookup(annotRef);
      if (!(annot instanceof PDFDict)) continue;

      const subtype = annot.get(PDFName.of('Subtype'));
      const subtypeName = subtype instanceof PDFName ? subtype.asString() : '';

      // Match signature annotations created by PDF.js or digital signatures:
      // - /Stamp: Image signatures, stamps
      // - /Ink: Freehand/drawn signatures
      // - /FreeText: Typed signatures/dates
      // - /Widget: Signature form field widgets
      if (['/Stamp', '/Ink', '/FreeText', '/Widget'].includes(subtypeName)) {
        annot.set(PDFName.of('F'), PDFNumber.of(SIGNATURE_LOCKED_FLAGS));

        // If it's a widget/form field, also set ReadOnly field flag (/Ff 1)
        if (subtypeName === '/Widget') {
          annot.set(PDFName.of('Ff'), PDFNumber.of(1));
        }
      }
    }
  }

  // Best-effort form flattening if any AcroForm fields exist
  try {
    const form = pdfDoc.getForm();
    if (form.getFields().length > 0) {
      form.flatten();
    }
  } catch {
    // Form might not exist or be malformed, which is normal for plain signed PDFs
  }

  const savedBytes = await pdfDoc.save({ useObjectStreams: true });
  return savedBytes instanceof Uint8Array ? savedBytes : new Uint8Array(savedBytes);
}
