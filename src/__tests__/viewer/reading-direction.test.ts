import { beforeEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';

const html = readFileSync('public/pdfjs-viewer/viewer.html', 'utf8');

describe('spread reading direction', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = html;
  });

  function start() {
    const script = readFileSync('public/pdfjs-viewer/reading-direction.js', 'utf8');
    window.eval(script);
    return document.getElementById('spreadRtl')!;
  }

  it('offers a keyboard-accessible toggle and persists the choice', () => {
    const button = start();
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('aria-pressed')).toBe('false');
    button.click();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.getElementById('viewer')!.classList.contains('spreadRtl')).toBe(true);
    expect(localStorage.getItem('pdfcraft.spreadRtl')).toBe('true');
    button.click();
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(document.getElementById('viewer')!.classList.contains('spreadRtl')).toBe(false);
  });

  it('keeps horizontal mode unavailable and restores the saved choice in vertical mode', async () => {
    const button = start() as HTMLButtonElement;
    button.click();
    const viewer = document.getElementById('viewer')!;
    viewer.classList.add('scrollHorizontal');
    await Promise.resolve();
    expect(button.disabled).toBe(true);
    viewer.classList.remove('scrollHorizontal');
    await Promise.resolve();
    expect(button.disabled).toBe(false);
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });

  it('still toggles when browser storage is unavailable', () => {
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
    try {
      const button = start();
      button.click();
      expect(button.getAttribute('aria-pressed')).toBe('true');
    } finally { get.mockRestore(); set.mockRestore(); }
  });

  it('restores preference without changing the toolbar or document language', () => {
    localStorage.setItem('pdfcraft.spreadRtl', 'true');
    const originalDir = document.documentElement.dir;
    const button = start();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.dir).toBe(originalDir);
    expect(document.getElementById('viewerContainer')!.hasAttribute('dir')).toBe(false);
  });
});
