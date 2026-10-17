import { useEffect, useRef } from 'react';

export interface UseSelectAllShortcutOptions {
  onSelectAll: () => void;
  enabled?: boolean;
}

export function isEditableElement(element: EventTarget | null): boolean {
  if (!element || !(element instanceof HTMLElement)) {
    return false;
  }
  const tagName = element.tagName.toUpperCase();
  if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') {
    return true;
  }
  return element.isContentEditable || element.getAttribute('contenteditable') === 'true' || (element as { contentEditable?: string }).contentEditable === 'true';
}

export function useSelectAllShortcut({
  onSelectAll,
  enabled = true,
}: UseSelectAllShortcutOptions): void {
  const onSelectAllRef = useRef(onSelectAll);
  onSelectAllRef.current = onSelectAll;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'a') {
        const target = event.target;
        const activeElement = document.activeElement;

        if (isEditableElement(target) || isEditableElement(activeElement)) {
          return;
        }

        event.preventDefault();
        onSelectAllRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);
}
