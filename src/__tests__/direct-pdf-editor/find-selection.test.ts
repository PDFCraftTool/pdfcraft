import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { runInNewContext } from 'node:vm';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Execute the editor's production event wiring without starting its WASM engine.
const source = readFileSync(resolve('public/direct-pdf-editor/app.js'), 'utf8');
const start = source.indexOf("  $('find').addEventListener('click'");
const end = source.indexOf("  window.addEventListener('beforeunload'", start);
if (start < 0 || end < 0) throw new Error('Editor find event wiring not found');
const wiring = source.slice(start, end);

describe('direct PDF editor find selection', () => {
  let targetWindow: Window;
  let input: HTMLInputElement;
  let bar: HTMLElement;

  beforeEach(() => {
    const frame = document.createElement('iframe');
    document.body.append(frame);
    targetWindow = frame.contentWindow!;
    const doc = frame.contentDocument!;
    doc.body.innerHTML = `<button id="find">Find</button>
      <div id="findbar" hidden><input id="findText"><input id="replText">
      <button id="findDone">Done</button><button id="findNext">Next</button>
      <button id="findPrev">Previous</button><button id="replOne">Replace</button>
      <button id="replAll">Replace all</button><span id="findStatus"></span></div>
      <button id="document">Document</button>`;
    input = doc.getElementById('findText') as HTMLInputElement;
    bar = doc.getElementById('findbar')!;
    runInNewContext(wiring, {
      $: (id: string) => doc.getElementById(id),
      document: doc,
      window: targetWindow,
      state: {},
      stagePointHandlers: vi.fn(),
    });
    input.value = 'previous query';
    input.setSelectionRange(input.value.length, input.value.length);
    doc.getElementById('document')!.focus();
  });

  afterEach(() => { document.body.innerHTML = ''; });

  it.each(['ctrlKey', 'metaKey'])('selects the existing query with %s+F', (modifier) => {
    for (const alreadyOpen of [false, true]) {
      bar.hidden = !alreadyOpen;
      input.setSelectionRange(input.value.length, input.value.length);
      input.ownerDocument.getElementById('document')!.focus();
      const event = new KeyboardEvent('keydown', { key: 'f', [modifier]: true, cancelable: true });
      targetWindow.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
      expect(bar.hidden).toBe(false);
      expect(input.ownerDocument.activeElement).toBe(input);
      expect([input.selectionStart, input.selectionEnd]).toEqual([0, input.value.length]);
    }
  });

  it('selects the query when the toolbar opens search and still toggles closed', () => {
    const button = input.ownerDocument.getElementById('find')!;
    button.click();
    expect(bar.hidden).toBe(false);
    expect([input.selectionStart, input.selectionEnd]).toEqual([0, input.value.length]);
    button.click();
    expect(bar.hidden).toBe(true);
  });

  it('leaves selection alone for ordinary typing', () => {
    input.focus();
    input.setSelectionRange(3, 3);
    targetWindow.dispatchEvent(new KeyboardEvent('keydown', { key: 'f' }));
    expect([input.selectionStart, input.selectionEnd]).toEqual([3, 3]);
  });
});
