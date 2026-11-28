import { describe, it, expect, beforeEach } from 'vitest';
import {
  getSavedSignatures,
  saveSignature,
  deleteSignature,
  dataUrlToBlob,
} from '@/lib/pdf/signature-storage';

describe('Signature Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return empty array when no signatures saved', () => {
    expect(getSavedSignatures()).toEqual([]);
  });

  it('should save a signature and assign an ID and timestamp', () => {
    const dummyDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const saved = saveSignature({
      name: 'Test Signature',
      dataUrl: dummyDataUrl,
      width: 100,
      height: 50,
      sourceDoc: 'sample.pdf',
    });

    expect(saved.id).toBeDefined();
    expect(saved.createdAt).toBeGreaterThan(0);
    expect(saved.name).toBe('Test Signature');

    const list = getSavedSignatures();
    expect(list.length).toBe(1);
    expect(list[0].id).toBe(saved.id);
  });

  it('should delete a signature by id', () => {
    const dummyDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const s1 = saveSignature({
      name: 'Sig 1',
      dataUrl: dummyDataUrl,
      width: 100,
      height: 50,
    });
    const s2 = saveSignature({
      name: 'Sig 2',
      dataUrl: dummyDataUrl,
      width: 100,
      height: 50,
    });

    expect(getSavedSignatures().length).toBe(2);

    deleteSignature(s1.id);
    const updated = getSavedSignatures();
    expect(updated.length).toBe(1);
    expect(updated[0].id).toBe(s2.id);
  });

  it('should convert dataUrl to Blob correctly', () => {
    const dummyDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const blob = dataUrlToBlob(dummyDataUrl);
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('image/png');
    expect(blob.size).toBeGreaterThan(0);
  });
});
