import { describe, it, expect, vi } from 'vitest';

// `next/font` only works inside the Next.js compiler, so mock the Google font
// loaders and capture the options we pass to them.
const state = vi.hoisted(() => ({
  arabicOptions: null as Record<string, unknown> | null,
}));

vi.mock('next/font/google', () => ({
  Inter: () => ({
    variable: '--font-inter',
    className: 'inter',
    style: { fontFamily: 'Inter' },
  }),
  JetBrains_Mono: () => ({
    variable: '--font-jetbrains-mono',
    className: 'jetbrains-mono',
    style: { fontFamily: 'JetBrains Mono' },
  }),
  Noto_Sans_Arabic: (options: Record<string, unknown>) => {
    state.arabicOptions = options;
    return {
      variable: '--font-arabic',
      className: 'noto-sans-arabic',
      style: { fontFamily: 'Noto Sans Arabic' },
    };
  },
}));

import { fontVariables, fontVariablesFor, notoSansArabic } from '@/lib/fonts';

describe('Arabic font configuration', () => {
  it('loads the Arabic font for the Arabic subset only', () => {
    expect(state.arabicOptions).not.toBeNull();
    expect(state.arabicOptions?.subsets).toEqual(['arabic']);
    expect(state.arabicOptions?.display).toBe('swap');
  });

  it('exposes the font through the --font-arabic CSS variable', () => {
    expect(notoSansArabic.variable).toBe('--font-arabic');
    expect(state.arabicOptions?.variable).toBe('--font-arabic');
  });

  it('does not preload the Arabic font on every page', () => {
    expect(state.arabicOptions?.preload).toBe(false);
  });

  it('keeps native Arabic system fonts as fallbacks', () => {
    const fallback = state.arabicOptions?.fallback as string[];
    expect(fallback).toContain('Segoe UI');
    expect(fallback).toContain('Noto Naskh Arabic');
  });
});

describe('fontVariablesFor', () => {
  it('adds the Arabic font variable for RTL locales', () => {
    const variables = fontVariablesFor('rtl');

    expect(variables).toBe(`${fontVariables} ${notoSansArabic.variable}`);
    expect(variables).toContain('--font-arabic');
  });

  it('leaves LTR locales unchanged', () => {
    const variables = fontVariablesFor('ltr');

    expect(variables).toBe(fontVariables);
    expect(variables).not.toContain('--font-arabic');
  });
});
