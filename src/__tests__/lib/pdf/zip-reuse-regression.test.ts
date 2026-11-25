import { it, expect } from 'vitest';
import JSZip from 'jszip';
import { PDFToZipProcessor } from '@/lib/pdf/processors/pdf-to-zip';

it('can create a new archive after an earlier run is cancelled', async () => {
  const processor = new PDFToZipProcessor();
  const file = { name: 'first.pdf', arrayBuffer: async () => new Uint8Array([1, 2, 3]).buffer } as File;
  const cancelled = await processor.process({ files: [file, file], options: {} }, () => processor.cancel());
  expect(cancelled.success).toBe(false);
  expect(cancelled.error?.code).toBe('PROCESSING_CANCELLED');
  const next = await processor.process({ files: [file], options: {} });
  expect(next.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(next.result as Blob);
  });
  const zip = await JSZip.loadAsync(bytes);
  expect(await zip.file('first.pdf')!.async('uint8array')).toEqual(new Uint8Array([1, 2, 3]));
  expect(processor.getProgress()).toBe(100);
});
