/**
 * Dynamic Template Token Interpolation Tests
 */

import { describe, it, expect } from 'vitest';
import { interpolateTokens } from '@/lib/workflow/executor';

describe('interpolateTokens', () => {
    it('returns empty string when template is empty', () => {
        expect(interpolateTokens('', {})).toBe('');
    });

    it('interpolates {filename} and {basename} correctly', () => {
        const result = interpolateTokens('{filename}_processed_{basename}', {
            filename: 'annual_report_2025.pdf',
        });
        expect(result).toBe('annual_report_2025_processed_annual_report_2025');
    });

    it('handles files with multiple dots correctly', () => {
        const result = interpolateTokens('{filename}.backup.{ext}', {
            filename: 'data.v1.0.final.pdf',
            outputExt: 'pdf',
        });
        expect(result).toBe('data.v1.0.final.backup.pdf');
    });

    it('interpolates {date}, {time}, and {timestamp}', () => {
        const result = interpolateTokens('archive_{date}_{time}', {});
        // YYYY-MM-DD format
        expect(result).toMatch(/^archive_\d{4}-\d{2}-\d{2}_\d{6}$/);

        const tsResult = interpolateTokens('backup_{timestamp}', {});
        expect(tsResult).toMatch(/^backup_\d{4}-\d{2}-\d{2}_\d{6}$/);
    });

    it('interpolates {index} and {total} with 1-based index', () => {
        const result = interpolateTokens('doc_{index}_of_{total}', {
            index: 2,
            total: 10,
        });
        expect(result).toBe('doc_3_of_10');
    });

    it('interpolates {tool} by stripping pdf suffixes', () => {
        expect(interpolateTokens('{tool}_output', { toolId: 'rotate-pdf' })).toBe('rotate_output');
        expect(interpolateTokens('{tool}_result', { toolId: 'jpg-to-pdf' })).toBe('jpg_result');
        expect(interpolateTokens('{tool}_archive', { toolId: 'download-zip' })).toBe('download-zip_archive');
    });

    it('is case-insensitive for token placeholders', () => {
        const result = interpolateTokens('{FileName}_{DATE}_{Index}', {
            filename: 'test.pdf',
            index: 0,
        });
        expect(result).toMatch(/^test_\d{4}-\d{2}-\d{2}_1$/);
    });

    it('uses fallback values when context is partially empty', () => {
        const result = interpolateTokens('{filename}_{index}_{total}', {});
        expect(result).toBe('document_1_1');
    });
    it.each(['$&', "$$", "$`", "$'", '{date}', '{index}', '{ext}'])(
        'preserves literal %s in input filenames', (literal) => {
            expect(interpolateTokens('prefix_{filename}_{basename}.{ext}', {
                filename: `report_${literal}.pdf`, outputExt: 'pdf',
            })).toBe(`prefix_report_${literal}_report_${literal}.pdf`);
        }
    );

    it('does not recursively expand tokens introduced by context values', () => {
        expect(interpolateTokens('{filename}_{tool}.{ext}', {
            filename: 'report_{tool}.pdf', toolId: 'custom-{ext}', outputExt: 'pdf',
        })).toBe('report_{tool}_custom-{ext}.pdf');
    });

    it('leaves unknown template tokens unchanged', () => {
        expect(interpolateTokens('{unknown}_{INDEX}_{index}', { index: 2 }))
            .toBe('{unknown}_3_3');
    });

});
