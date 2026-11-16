import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { rotateCustom } from '@/lib/pdf/processors/rotate-custom-processor';

describe('custom rotation by an arbitrary angle', () => {
  it('handles a blank page that has no content stream', async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage([200, 300]);
    const bytes = new Uint8Array(await pdf.save());
    const file = new File([bytes as BlobPart], 'blank.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });

    const result = await rotateCustom(file, { rotations: { 0: 45 } });

    expect(result.error?.details ?? result.error?.message).toBeUndefined();
    expect(result.success).toBe(true);
  });
});
