import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  FormLogicDesignerProcessor,
  createFormLogicDesignerProcessor,
  injectFormLogic
} from '@/lib/pdf/processors/form-logic-designer';
import { PDFErrorCode } from '@/types/pdf';

// Mock loader
vi.mock('@/lib/pdf/loader', () => {
  const mockPdfName = {
    of: (name: string) => ({ name, isPDFName: true }),
  };

  const mockPdfString = {
    of: (str: string) => ({ value: str, isPDFString: true }),
  };

  const mockFieldDict = {
    set: vi.fn(),
  };

  const mockField = {
    getName: () => 'isStudent',
    acroField: {
      dict: mockFieldDict,
    },
  };

  const mockPdfLib = {
    PDFName: mockPdfName,
    PDFString: mockPdfString,
    PDFHexString: { fromText: (value: string) => ({ value, isPDFString: true }) },
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        return {
          getForm: () => ({
            getFields: () => [mockField],
          }),
          context: {
            obj: (props: any) => props,
            register: (obj: any) => obj,
          },
          save: vi.fn().mockResolvedValue(new Uint8Array([5, 5, 5])),
        };
      }),
    },
  };

  return {
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

describe('FormLogicDesignerProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'interactive_form.pdf',
      size: 200,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(200),
    } as any;
  });

  it('should instantiate form logic designer processor correctly', () => {
    const processor = createFormLogicDesignerProcessor();
    expect(processor).toBeInstanceOf(FormLogicDesignerProcessor);
  });

  it('should validate invalid input files', async () => {
    const processor = createFormLogicDesignerProcessor();
    const result = await processor.process({ files: [], options: {} });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });

  it('should inject AcroJS conditional field bindings into PDF forms successfully', async () => {
    const result = await injectFormLogic(mockFile, {
      rules: [
        {
          source: 'isStudent',
          trigger: 'change',
          condition: 'checked',
          target: 'studentId',
          action: 'enable',
        },
      ],
    });

    expect(result.success).toBe(true);
    expect(result.filename).toBe('interactive_form_smart.pdf');
    expect(result.metadata?.rulesCount).toBe(1);
    expect(result.metadata?.fieldsCount).toBe(1);
  });
});
