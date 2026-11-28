import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFHexString } from 'pdf-lib';
import { DeadLinkDebuggerProcessor } from '@/lib/pdf/processors/dead-link-debugger';

async function inputFile(pdf: PDFDocument): Promise<File> {
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}
async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('link extraction and replacement', () => {
  it.each([false, true])('reads link objects with indirect containers = %s', async indirect => {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage();
    const uri = 'https://example.com/old';
    const action = pdf.context.obj({ S: 'URI', URI: PDFHexString.fromText(uri) });
    const annotation = pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [10, 10, 80, 30], A: indirect ? pdf.context.register(action) : action });
    const annotations = pdf.context.obj([pdf.context.register(annotation)]);
    page.node.set(PDFName.of('Annots'), indirect ? pdf.context.register(annotations) : annotations);
    const result = await new DeadLinkDebuggerProcessor().process({ files: [await inputFile(pdf)], options: { replacements: { [uri]: 'https://example.com/new' } } });
    expect(result.success).toBe(true);
    expect(result.metadata?.linksScanned).toBe(1);
    expect(result.metadata?.linksReplaced).toBe(1);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    const savedAnnotation = saved.getPage(0).node.Annots()!.lookup(0, PDFDict);
    const savedAction = savedAnnotation.lookup(PDFName.of('A'), PDFDict);
    expect(savedAction.lookup(PDFName.of('URI'))!.toString()).toContain('https://example.com/new');
  });
});
