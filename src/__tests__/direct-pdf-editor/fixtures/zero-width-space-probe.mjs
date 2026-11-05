// Runs in Node so the shipped Emscripten module uses its actual Node loader,
// independently of Vitest's browser globals and UI mocks. No system fonts needed.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import createModule from '../../../../public/direct-pdf-editor/editcore.js';
import { PdfEngine } from '../../../../public/direct-pdf-editor/core.js';

function zeroWidthSpacePdf() {
  const stream = text => `<< /Length ${text.length} >>\nstream\n${text}\nendstream`;
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] ' +
      '/Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica ' +
      '/Encoding /WinAnsiEncoding /ToUnicode 6 0 R >>',
    stream('BT /F1 12 Tf 50 700 Td (Before\\001 after) Tj ET'),
    stream([
      '/CIDInit /ProcSet findresource begin 12 dict begin begincmap',
      '/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def',
      '/CMapName /Test def /CMapType 2 def',
      '1 begincodespacerange <00> <FF> endcodespacerange',
      '1 beginbfchar <01> <200B> endbfchar',
      'endcmap CMapName currentdict /CMap defineresource pop end end',
    ].join('\n')),
  ];
  // All fixture bytes are ASCII, so string offsets are also byte offsets.
  let pdf = '%PDF-1.7\n';
  const offsets = [];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('');
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}

const module = await createModule({
  wasmBinary: readFileSync(fileURLToPath(new URL('../../../../public/direct-pdf-editor/editcore.wasm', import.meta.url))),
});
const config = module._malloc(48);
module.HEAPU8.fill(0, config, config + 48);
module.HEAPU32[config >> 2] = 2;
module._FPDF_InitLibraryWithConfig(config);
module._free(config);

// Helvetica is deliberately not embedded and there are no local font registrations.
// The ToUnicode map associates a real content-stream character with U+200B.
const results = [];
for (const replacement of ['Changed after']) {
  const engine = new PdfEngine(module);
  try {
    engine.open(zeroWidthSpacePdf());
    const textPage = module._FPDFText_LoadPage(engine.page);
    try {
      const codepoints = Array.from(
        { length: module._FPDFText_CountChars(textPage) },
        (_, index) => module._FPDFText_GetUnicode(textPage, index),
      );
      assert.ok(codepoints.includes(0x200b), 'fixture must contain actual U+200B');
    } finally {
      module._FPDFText_ClosePage(textPage);
    }
    const [paragraph] = engine.buildModel();
    assert.equal(paragraph.editable, true);
    assert.equal(paragraph.lockReason, 0);
    assert.equal(paragraph.runs.map(run => run.text).join(''), 'Before after');
    const runs = paragraph.runs.map(run => ({ ...run, text: replacement }));
    const preview = engine.previewParagraph(paragraph.id, runs, paragraph.format);
    assert.ok(preview?.lines.length);
    const committed = engine.commitParagraph(paragraph.id, runs, paragraph.format);
    assert.equal(committed.editable, true);
    assert.equal(committed.lockReason, 0);
    const bytes = engine.save();
    assert.ok(bytes?.length);
    engine.open(bytes);
    const [reopened] = engine.buildModel();
    assert.equal(reopened.editable, true);
    const text = reopened.runs.map(run => run.text).join('');
    assert.equal(text, replacement);
    results.push({ replacement, editable: reopened.editable, text });
  } finally {
    engine.close();
  }
}
console.log(JSON.stringify(results));
