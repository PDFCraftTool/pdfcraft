import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFNumber, PDFDict, PDFArray } from 'pdf-lib';
import {
  protectSignatureAnnotations,
  SIGNATURE_LOCKED_FLAGS,
} from '@/lib/pdf/signature-protection';

describe('protectSignatureAnnotations', () => {
  it('has the correct locked flags constant (4 | 64 | 128 | 512 = 708)', () => {
    // Bit 3 (4) = Print
    // Bit 7 (64) = ReadOnly
    // Bit 8 (128) = Locked
    // Bit 10 (512) = LockedContents
    expect(SIGNATURE_LOCKED_FLAGS).toBe(708);
  });

  it('sets Locked, LockedContents, ReadOnly and Print flags on signature annotations', async () => {
    // Create a PDF with signature annotations
    const doc = await PDFDocument.create();
    const page = doc.addPage([400, 600]);

    // Create simulated /Ink and /Stamp annotations as created by PDF.js
    const inkAnnot = doc.context.obj({
      Type: 'Annot',
      Subtype: 'Ink',
      Rect: [50, 50, 150, 100],
      F: 4, // Default Print flag
    });
    const inkAnnotRef = doc.context.register(inkAnnot);

    const stampAnnot = doc.context.obj({
      Type: 'Annot',
      Subtype: 'Stamp',
      Rect: [100, 200, 250, 260],
      F: 4,
    });
    const stampAnnotRef = doc.context.register(stampAnnot);

    const nonSigAnnot = doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [10, 10, 50, 30],
      F: 4,
    });
    const nonSigAnnotRef = doc.context.register(nonSigAnnot);

    const annotsArray = doc.context.obj([inkAnnotRef, stampAnnotRef, nonSigAnnotRef]);
    page.node.set(PDFName.of('Annots'), annotsArray);

    const inputBytes = await doc.save();
    const protectedBytes = await protectSignatureAnnotations(inputBytes);

    expect(protectedBytes).toBeInstanceOf(Uint8Array);
    expect(protectedBytes.length).toBeGreaterThan(0);

    // Verify the saved PDF has the updated flags
    const loadedDoc = await PDFDocument.load(protectedBytes);
    const loadedPage = loadedDoc.getPages()[0];
    const annotsRef = loadedPage.node.get(PDFName.of('Annots'));
    const annots = loadedDoc.context.lookup(annotsRef) as PDFArray;

    expect(annots.size()).toBe(3);

    const loadedInk = loadedDoc.context.lookup(annots.get(0)) as PDFDict;
    const loadedStamp = loadedDoc.context.lookup(annots.get(1)) as PDFDict;
    const loadedLink = loadedDoc.context.lookup(annots.get(2)) as PDFDict;

    expect((loadedInk.get(PDFName.of('F')) as PDFNumber).asNumber()).toBe(708);
    expect((loadedStamp.get(PDFName.of('F')) as PDFNumber).asNumber()).toBe(708);
    // Non-signature annot should retain original flag
    expect((loadedLink.get(PDFName.of('F')) as PDFNumber).asNumber()).toBe(4);
  });

  it('sets ReadOnly field flag (/Ff 1) on /Widget annotations', async () => {
    const doc = await PDFDocument.create();
    const page = doc.addPage([400, 600]);

    const widgetAnnot = doc.context.obj({
      Type: 'Annot',
      Subtype: 'Widget',
      Rect: [50, 50, 150, 100],
      F: 4,
    });
    const widgetAnnotRef = doc.context.register(widgetAnnot);

    const annotsArray = doc.context.obj([widgetAnnotRef]);
    page.node.set(PDFName.of('Annots'), annotsArray);

    const inputBytes = await doc.save();
    const protectedBytes = await protectSignatureAnnotations(inputBytes);

    const loadedDoc = await PDFDocument.load(protectedBytes);
    const loadedPage = loadedDoc.getPages()[0];
    const annotsRef = loadedPage.node.get(PDFName.of('Annots'));
    const annots = loadedDoc.context.lookup(annotsRef) as PDFArray;

    const loadedWidget = loadedDoc.context.lookup(annots.get(0)) as PDFDict;
    expect((loadedWidget.get(PDFName.of('F')) as PDFNumber).asNumber()).toBe(708);
    expect((loadedWidget.get(PDFName.of('Ff')) as PDFNumber).asNumber()).toBe(1);
  });

  it('handles a PDF with no annotations cleanly without throwing', async () => {
    const doc = await PDFDocument.create();
    doc.addPage([400, 600]);
    const inputBytes = await doc.save();

    const result = await protectSignatureAnnotations(inputBytes);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBeGreaterThan(0);
  });
});
