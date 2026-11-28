# Arabic Character Display Fix for PDFCraft

## Problem

Arabic text was not rendering reliably in PDFCraft:

1. **Editing Arabic text inside a PDF** produced missing-glyph boxes (□) on any
   device without an Arabic system font installed — including Linux, some
   Android devices, and browsers that do not expose the Local Font Access API
   (Firefox, Safari).
2. **The Arabic UI** relied on whatever Arabic font the operating system
   happened to provide. `globals.css` hard-coded a Latin-first stack
   (`'Segoe UI', -apple-system, ...`), so rendering differed between platforms
   and could fall back to a font without Arabic coverage.

## Root Cause

The direct PDF editor resolves fonts through `PdfEngine.localFonts`
(`public/direct-pdf-editor/core.js`). That map is populated from two sources:

- `window.queryLocalFonts()` — **locally installed** fonts only, and only in
  browsers that implement the Local Font Access API;
- fonts registered explicitly by the host page.

`scriptFallbackFamilies()` already lists Arabic families (`Geeza Pro`,
`Al Nile`, `Damascus`, `Baghdad`, `Noto Naskh Arabic`, `Noto Sans Arabic`,
`Arial Unicode MS`, `Arial`), but none of them were guaranteed to exist on the
user's machine. When every candidate was missing, the engine had no font with
Arabic glyphs and drew boxes instead.

The same class of problem was already solved for Chinese by bundling
`NotoSansSC-Regular.ttf` and registering it at startup
(`loadBundledChineseFont()` in `public/direct-pdf-editor/main.js`).

## Solution

### 1. Self-hosted Arabic webfont for the UI

`src/lib/fonts.ts` now registers **Noto Sans Arabic** through `next/font/google`
(`subsets: ['arabic']`, `variable: '--font-arabic'`, `preload: false`).
`fontVariablesFor(direction)` appends that variable class **only for RTL
locales**, so LTR pages load exactly the same fonts as before. The font is
self-hosted by `next/font` at build time — no request is made to Google at
runtime.

`src/app/[locale]/layout.tsx` uses `fontVariablesFor(direction)` instead of the
static `fontVariables`.

`src/app/globals.css` uses the webfont first and keeps native system fonts as
fallbacks:

```css
[lang="he"], [lang="ar"] {
  font-family: var(--font-arabic, 'Noto Sans Arabic'), 'Segoe UI', 'Geeza Pro',
    'Al Nile', 'Damascus', 'Noto Naskh Arabic', 'Arial Unicode MS', Arial,
    Helvetica, sans-serif;
  direction: rtl;
}
```

The PDF text layer rule uses the same stack so selected text in RTL documents
still renders when the embedded PDF font is unavailable.

### 2. Bundled OFL font for the PDF editor

`public/fonts/NotoNaskhArabic-Regular.ttf` (SIL OFL 1.1, license text in
`public/fonts/OFL-NotoNaskhArabic.txt`) is loaded at editor startup by
`loadBundledArabicFont()` and registered in `PdfEngine.localFonts` under
`Noto Naskh Arabic` for every style key.

No change to `core.js` was needed: `Noto Naskh Arabic` is already part of
`scriptFallbackFamilies()`, so the engine picks the bundled font automatically
whenever the requested font cannot render Arabic text. Existing system fonts are
never overwritten — the loader only fills keys that are still missing
(`if (!PE.localFonts.has(fam + sk))`).

### 3. Why no shaping library is required

Arabic shaping (contextual letter forms) and bidirectional reordering are
performed by the PDF viewer when it displays the document. The editor only has
to write the logical characters with an embedded font that contains the Arabic
glyphs. The missing piece was the font, not the shaping engine.

## Files Changed

| File | Change |
| --- | --- |
| `src/lib/fonts.ts` | Noto Sans Arabic + `fontVariablesFor(direction)` |
| `src/app/[locale]/layout.tsx` | Direction-aware font variables |
| `src/app/globals.css` | Arabic-first font stack for `[lang="ar"]`/`[lang="he"]` and RTL text layers |
| `public/fonts/NotoNaskhArabic-Regular.ttf` | Bundled OFL Arabic font for the PDF editor |
| `public/fonts/OFL-NotoNaskhArabic.txt` | SIL OFL 1.1 license text |
| `public/direct-pdf-editor/main.js` | `loadBundledArabicFont()` + startup call |
| `src/__tests__/lib/fonts.test.ts` | Font configuration tests |
| `ARABIC_FIX.md` | This document |

## Testing

1. `npm run lint`, `npm test`, `npm run build`.
2. Open `/ar`:
   - the Arabic UI renders with Noto Sans Arabic;
   - DevTools → Network shows the font served from the app origin (no Google
     request);
   - `/en` does not request the Arabic font.
3. Open the direct PDF editor, add Arabic text, export, and reopen the file:
   - no boxes;
   - letters are joined correctly (shaping is performed by the viewer);
   - the embedded font is Noto Naskh Arabic.
4. Repeat step 3 in Firefox (no `queryLocalFonts()` support) — the bundled font
   is the only source and must be sufficient.

## Adding Another Script

The pattern is reusable:

1. Add the script's family names to `scriptFallbackFamilies()` in
   `public/direct-pdf-editor/core.js` (skip this if they are already listed).
2. Put an OFL-licensed font in `public/fonts/` together with its license text.
3. Add a `loadBundled<Script>Font()` function in `main.js` that fetches the file
   and registers it under those family names, then call it from `init()`.

## References

- [Noto Naskh Arabic](https://notofonts.github.io/arabic/) — SIL OFL 1.1
- [Noto Sans Arabic](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Local Font Access API](https://developer.mozilla.org/en-US/docs/Web/API/Local_Font_Access_API)
- [W3C: Bidi Text in HTML](https://www.w3.org/International/questions/qa-html-dir)
