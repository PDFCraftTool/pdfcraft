import { describe, expect, it } from 'vitest';
import { getAllTools } from '@/config/tools';
import { getToolContent, toolContentEn, toolContentPl, toolContentCs, toolContentHi } from '@/config/tool-content';

describe('tool content integrity', () => {
  it('provides fallback content for every configured tool to avoid 404 pages', () => {
    const missingTools = getAllTools()
      .map((tool) => tool.id)
      .filter((toolId) => !getToolContent('en', toolId));

    expect(missingTools).toEqual([]);
  });

  it('provides complete Polish tool content without English fallback', () => {
    const englishToolIds = Object.keys(toolContentEn);
    const configuredToolIds = getAllTools().map((tool) => tool.id);
    const missingTools = englishToolIds.filter((toolId) => !toolContentPl[toolId]);
    const missingConfiguredTools = configuredToolIds.filter((toolId) => !toolContentPl[toolId]);
    const fallbackTools = englishToolIds.filter(
      (toolId) => getToolContent('pl', toolId) !== toolContentPl[toolId]
    );

    expect(missingTools).toEqual([]);
    expect(missingConfiguredTools).toEqual([]);
    expect(Object.keys(toolContentPl).sort()).toEqual(englishToolIds.sort());
    expect(fallbackTools).toEqual([]);
    expect(getToolContent('pl', 'merge-pdf')?.title).toBe('Połącz PDF');
    expect(getToolContent('pl', 'split-pdf')?.title).toBe('Podziel PDF');
    expect(getToolContent('pl', 'compress-pdf')?.title).toBe('Kompresuj PDF');
  });

  it('provides complete Czech tool content without English fallback', () => {
    const englishToolIds = Object.keys(toolContentEn);
    const configuredToolIds = getAllTools().map((tool) => tool.id);
    const missingTools = englishToolIds.filter((toolId) => !toolContentCs[toolId]);
    const missingConfiguredTools = configuredToolIds.filter((toolId) => !toolContentCs[toolId]);
    const fallbackTools = englishToolIds.filter(
      (toolId) => getToolContent('cs', toolId) !== toolContentCs[toolId]
    );

    expect(missingTools).toEqual([]);
    expect(missingConfiguredTools).toEqual([]);
    expect(Object.keys(toolContentCs).sort()).toEqual(englishToolIds.sort());
    expect(fallbackTools).toEqual([]);
    expect(getToolContent('cs', 'merge-pdf')?.title).toBe('Spojit soubory do PDF');
    expect(getToolContent('cs', 'split-pdf')?.title).toBe('Rozdělit PDF');
    expect(getToolContent('cs', 'compress-pdf')?.title).toBe('Komprimovat PDF');
  });

  it('provides complete Hindi tool content without English fallback', () => {
    const englishToolIds = Object.keys(toolContentEn);
    const configuredToolIds = getAllTools().map((tool) => tool.id);
    const missingTools = englishToolIds.filter((toolId) => !toolContentHi[toolId]);
    const missingConfiguredTools = configuredToolIds.filter((toolId) => !toolContentHi[toolId]);
    const fallbackTools = englishToolIds.filter(
      (toolId) => getToolContent('hi', toolId) !== toolContentHi[toolId]
    );

    expect(missingTools).toEqual([]);
    expect(missingConfiguredTools).toEqual([]);
    expect(Object.keys(toolContentHi).sort()).toEqual(englishToolIds.sort());
    expect(fallbackTools).toEqual([]);
    expect(getToolContent('hi', 'merge-pdf')?.title).toBe('PDF मर्ज करें');
    expect(getToolContent('hi', 'split-pdf')?.title).toBe('PDF विभाजित करें');
    expect(getToolContent('hi', 'compress-pdf')?.title).toBe('PDF कंप्रेस करें');
  });

  it('keeps Chinese tool titles localized instead of falling back to English slugs', () => {
    expect(getToolContent('zh', 'merge-pdf')?.title).toContain('合并');
    expect(getToolContent('zh', 'split-pdf')?.title).toBe('拆分PDF');
    expect(getToolContent('zh', 'compress-pdf')?.title).toBe('压缩PDF');
    expect(getToolContent('zh', 'edit-pdf')?.title).toBe('编辑PDF');
    expect(getToolContent('zh', 'organize-pdf')?.title).toBe('整理PDF');
    expect(getToolContent('zh', 'pdf-to-docx')?.title).toBe('PDF转Word');
  });
});
