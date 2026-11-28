/**
 * Workflow Executor Tests
 * Tests for node execution and file handling
 */

import { describe, it, expect } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { collectInputFiles, executeNode } from '@/lib/workflow/executor';
import type { WorkflowNode, WorkflowEdge, WorkflowOutputFile } from '@/types/workflow';

async function createRealPDFFile(name: string): Promise<File> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]);
    page.drawText('Dummy contents for testing workflow executor', { x: 50, y: 50, size: 10 });
    const pdfBytes = await pdfDoc.save();
    const arrayBuffer = pdfBytes.buffer.slice(
        pdfBytes.byteOffset,
        pdfBytes.byteOffset + pdfBytes.byteLength
    ) as ArrayBuffer;
    const file = new File([arrayBuffer], name, { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', {
        value: async () => arrayBuffer,
        writable: false,
    });
    return file;
}

describe('Workflow Executor', () => {
    describe('collectInputFiles', () => {
        const nodes: WorkflowNode[] = [
            {
                id: 'node1',
                type: 'toolNode',
                position: { x: 0, y: 0 },
                data: {
                    toolId: 'merge-pdf',
                    label: 'Merge PDF',
                    icon: 'file-plus',
                    category: 'organize',
                    acceptedFormats: ['.pdf'],
                    outputFormat: '.pdf',
                    status: 'idle',
                    progress: 0,
                    inputFiles: [
                        new File([new Blob(['test1'])], 'input1.pdf', { type: 'application/pdf' }),
                        new File([new Blob(['test2'])], 'input2.pdf', { type: 'application/pdf' }),
                    ],
                },
            },
            {
                id: 'node2',
                type: 'toolNode',
                position: { x: 200, y: 0 },
                data: {
                    toolId: 'compress-pdf',
                    label: 'Compress PDF',
                    icon: 'minimize',
                    category: 'optimize',
                    acceptedFormats: ['.pdf'],
                    outputFormat: '.pdf',
                    status: 'idle',
                    progress: 0,
                },
            },
        ];

        const edges: WorkflowEdge[] = [
            { id: 'e1-2', source: 'node1', target: 'node2' },
        ];

        it('should return input files for nodes without parents', () => {
            const inputs = collectInputFiles('node1', nodes, [], new Map());
            expect(inputs).toHaveLength(2);
            expect(inputs[0]).toBeInstanceOf(File);
        });

        it('should return empty array for nodes without parents or input files', () => {
            const nodesWithoutInput = nodes.map(n => ({
                ...n,
                data: { ...n.data, inputFiles: undefined },
            }));
            const inputs = collectInputFiles('node1', nodesWithoutInput, [], new Map());
            expect(inputs).toHaveLength(0);
        });

        it('should prefer inputAssignments over stale node.data.inputFiles', () => {
            const assigned = new File([new Blob(['png'])], 'only.png', { type: 'image/png' });
            const assignments = new Map<string, File[]>([['node1', [assigned]]]);
            const inputs = collectInputFiles('node1', nodes, [], new Map(), assignments);
            expect(inputs).toHaveLength(1);
            expect((inputs[0] as File).name).toBe('only.png');
        });

        it('should collect outputs from parent nodes', () => {
            const nodeOutputs = new Map<string, (Blob | WorkflowOutputFile)[]>();
            const output1: WorkflowOutputFile = {
                blob: new Blob(['output1'], { type: 'application/pdf' }),
                filename: 'merged.pdf',
            };
            nodeOutputs.set('node1', [output1]);

            const inputs = collectInputFiles('node2', nodes, edges, nodeOutputs);
            expect(inputs).toHaveLength(1);
            expect(inputs[0]).toEqual(output1);
        });

        it('should collect outputs from multiple parent nodes', () => {
            const multiParentEdges: WorkflowEdge[] = [
                { id: 'e1-2', source: 'node1', target: 'node2' },
                { id: 'e3-2', source: 'node3', target: 'node2' },
            ];

            const node3: WorkflowNode = {
                id: 'node3',
                type: 'toolNode',
                position: { x: 0, y: 100 },
                data: {
                    toolId: 'rotate-pdf',
                    label: 'Rotate PDF',
                    icon: 'rotate-cw',
                    category: 'organize',
                    acceptedFormats: ['.pdf'],
                    outputFormat: '.pdf',
                    status: 'idle',
                    progress: 0,
                },
            };

            const nodeOutputs = new Map<string, (Blob | WorkflowOutputFile)[]>();
            nodeOutputs.set('node1', [{
                blob: new Blob(['output1'], { type: 'application/pdf' }),
                filename: 'out1.pdf',
            }]);
            nodeOutputs.set('node3', [{
                blob: new Blob(['output3'], { type: 'application/pdf' }),
                filename: 'out3.pdf',
            }]);

            const inputs = collectInputFiles('node2', [...nodes, node3], multiParentEdges, nodeOutputs);
            expect(inputs).toHaveLength(2);
        });

        it('should handle Blob outputs without metadata', () => {
            const nodeOutputs = new Map<string, (Blob | WorkflowOutputFile)[]>();
            const plainBlob = new Blob(['plain output'], { type: 'application/pdf' });
            nodeOutputs.set('node1', [plainBlob]);

            const inputs = collectInputFiles('node2', nodes, edges, nodeOutputs);
            expect(inputs).toHaveLength(1);
            expect(inputs[0]).toBeInstanceOf(Blob);
        });
    });

    describe('executeNode - ocr-pdf', () => {
        it('throws error if files array is empty', async () => {
            const { executeNode } = await import('@/lib/workflow/executor');
            const ocrNode: WorkflowNode = {
                id: 'ocr-node',
                type: 'toolNode',
                position: { x: 0, y: 0 },
                data: {
                    toolId: 'ocr-pdf',
                    label: 'OCR PDF',
                    icon: 'scan-text',
                    category: 'organize-manage',
                    acceptedFormats: ['.pdf', '.png', '.jpg', '.jpeg', '.webp'],
                    outputFormat: 'pdf',
                    status: 'idle',
                    progress: 0,
                    settings: {
                        language: 'chi_sim',
                    },
                },
            };

            const result = await executeNode(ocrNode, []);
            expect(result.success).toBe(false);
            expect(result.error?.message).toContain('No input file');
        });
    });

    describe('executeNode - output nodes', () => {
        it('handles download-pdf with custom filename', async () => {
            const { executeNode } = await import('@/lib/workflow/executor');
            const file = new File(['dummy pdf content'], 'test.pdf', { type: 'application/pdf' });
            const downloadNode: WorkflowNode = {
                id: 'dl-node',
                type: 'toolNode',
                position: { x: 0, y: 0 },
                data: {
                    toolId: 'download-pdf',
                    label: 'Download PDF',
                    icon: 'file-down',
                    category: 'output',
                    acceptedFormats: ['application/pdf'],
                    outputFormat: 'application/pdf',
                    status: 'idle',
                    progress: 0,
                    settings: {
                        filename: 'custom_report.pdf',
                    },
                },
            };

            const result = await executeNode(downloadNode, [file]);
            expect(result.success).toBe(true);
            expect(result.filename).toBe('custom_report.pdf');
        });

        it('preserves literal dollar signs and token-like text in download filenames', async () => {
            const file = await createRealPDFFile('budget_$&_{date}.pdf');
            const node: WorkflowNode = {
                id: 'literal-name', type: 'toolNode', position: { x: 0, y: 0 },
                data: {
                    toolId: 'download-pdf', label: 'Download PDF', icon: 'file-down',
                    category: 'output', acceptedFormats: ['application/pdf'],
                    outputFormat: 'application/pdf', status: 'idle', progress: 0,
                    settings: { filename: '{filename}_processed.{ext}' },
                },
            };
            const result = await executeNode(node, [file]);
            expect(result.success).toBe(true);
            expect(result.filename).toBe('budget_$&_{date}_processed.pdf');
            expect(result.result).toBeInstanceOf(Blob);
        });

        it('handles download-zip by bundling multiple files', async () => {
            const { executeNode } = await import('@/lib/workflow/executor');
            const file1 = new File(['file 1 content'], 'page1.pdf', { type: 'application/pdf' });
            const file2 = new File(['file 2 content'], 'page2.pdf', { type: 'application/pdf' });
            const zipNode: WorkflowNode = {
                id: 'zip-node',
                type: 'toolNode',
                position: { x: 0, y: 0 },
                data: {
                    toolId: 'download-zip',
                    label: 'Download ZIP',
                    icon: 'archive',
                    category: 'output',
                    acceptedFormats: ['*'],
                    outputFormat: 'application/zip',
                    status: 'idle',
                    progress: 0,
                    settings: {
                        filename: 'archive_bundle.zip',
                    },
                },
            };

            const result = await executeNode(zipNode, [file1, file2]);
            expect(result.success).toBe(true);
            expect(result.filename).toBe('archive_bundle.zip');
            expect(result.result).toBeInstanceOf(Blob);
            expect(result.metadata?.fileCount).toBe(2);
        });

        it('maps fix-page-size targetSize settings to processor page size presets', async () => {
            const file = await createRealPDFFile('letter.pdf');
            const fixPageSizeNode: WorkflowNode = {
                id: 'fix-page-size-node',
                type: 'toolNode',
                position: { x: 0, y: 0 },
                data: {
                    toolId: 'fix-page-size',
                    label: 'Fix Page Size',
                    icon: 'scaling',
                    category: 'organize',
                    acceptedFormats: ['.pdf'],
                    outputFormat: '.pdf',
                    status: 'idle',
                    progress: 0,
                    settings: {
                        targetSize: 'ENVELOPE-10',
                    },
                },
            };

            const result = await executeNode(fixPageSizeNode, [file]);
            expect(result.success).toBe(true);
            expect(result.metadata?.sizePreset).toBe('envelope-10');

            const { width, height } = await loadOutputPageSize(result.result as Blob);
            expect(width).toBeCloseTo(297);
            expect(height).toBeCloseTo(684);
        });

        it('falls back safely for unknown, inherited, and lower-priority fix-page-size settings', async () => {
            const cases: {
                settings: Record<string, unknown>;
                expectedPreset: string;
                expectedWidth: number;
                expectedHeight: number;
            }[] = [
                // Unknown size falls back to A4 instead of failing.
                { settings: { targetSize: 'not-a-size' }, expectedPreset: 'a4', expectedWidth: 595.28, expectedHeight: 841.89 },
                // Mixed case and surrounding whitespace are normalized.
                { settings: { targetSize: ' Letter ' }, expectedPreset: 'letter', expectedWidth: 612, expectedHeight: 792 },
                // sizePreset wins over targetSize when both are valid.
                { settings: { sizePreset: 'a5', targetSize: 'A3' }, expectedPreset: 'a5', expectedWidth: 419.53, expectedHeight: 595.28 },
                // An inherited Object key is not a preset; the valid targetSize is used instead.
                { settings: { sizePreset: 'constructor', targetSize: 'LEGAL' }, expectedPreset: 'legal', expectedWidth: 612, expectedHeight: 1008 },
                // Custom sizes pass their dimensions through.
                { settings: { targetSize: 'CUSTOM', customWidth: 300, customHeight: 400 }, expectedPreset: 'custom', expectedWidth: 300, expectedHeight: 400 },
            ];

            for (const { settings, expectedPreset, expectedWidth, expectedHeight } of cases) {
                const file = await createRealPDFFile('letter.pdf');
                const node: WorkflowNode = {
                    id: 'fix-page-size-node',
                    type: 'toolNode',
                    position: { x: 0, y: 0 },
                    data: {
                        toolId: 'fix-page-size',
                        label: 'Fix Page Size',
                        icon: 'scaling',
                        category: 'organize',
                        acceptedFormats: ['.pdf'],
                        outputFormat: '.pdf',
                        status: 'idle',
                        progress: 0,
                        settings,
                    },
                };

                const result = await executeNode(node, [file]);
                expect(result.success).toBe(true);
                expect(result.metadata?.sizePreset).toBe(expectedPreset);
                const { width, height } = await loadOutputPageSize(result.result as Blob);
                expect(width).toBeCloseTo(expectedWidth);
                expect(height).toBeCloseTo(expectedHeight);
            }
        });
    });
});

async function loadOutputPageSize(result: Blob): Promise<{ width: number; height: number }> {
    // jsdom's Blob lacks arrayBuffer(), so read the output via FileReader.
    const outputBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(result);
    });
    const outputDoc = await PDFDocument.load(new Uint8Array(outputBuffer));
    return outputDoc.getPage(0).getSize();
}

