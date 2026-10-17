import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useSelectAllShortcut } from '@/hooks/useSelectAllShortcut';

describe('useSelectAllShortcut Hook', () => {
  let onSelectAll: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onSelectAll = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('triggers onSelectAll on Ctrl + a (Windows/Linux)', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(true);
  });

  it('triggers onSelectAll on Cmd + a (macOS metaKey)', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      metaKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(true);
  });

  it('triggers onSelectAll with uppercase "A" (Shift or CapsLock)', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const event = new KeyboardEvent('keydown', {
      key: 'A',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).toHaveBeenCalledTimes(1);
  });

  it('does NOT trigger when enabled is false', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: false }));

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('does NOT trigger when altKey is pressed (Ctrl + Alt + A)', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      altKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('does NOT trigger when target is an HTMLInputElement', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);

    document.body.removeChild(input);
  });

  it('does NOT trigger when target is an HTMLTextAreaElement', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    textarea.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);

    document.body.removeChild(textarea);
  });

  it('does NOT trigger when target is contenteditable', () => {
    renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));

    const div = document.createElement('div');
    div.contentEditable = 'true';
    document.body.appendChild(div);
    div.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    div.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);

    document.body.removeChild(div);
  });

  it('removes event listener cleanly upon unmount', () => {
    const { unmount } = renderHook(() => useSelectAllShortcut({ onSelectAll, enabled: true }));
    unmount();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(onSelectAll).not.toHaveBeenCalled();
  });
});
