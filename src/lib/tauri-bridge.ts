/**
 * Tauri Bridge
 * Provides a unified interface for file operations in both Tauri and Browser environments.
 */

export interface FileFilter {
  name: string;
  extensions: string[];
}

const browserFileStore = new Map<string, File>();

export const isTauri = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    ('__TAURI__' in window || '__TAURI_INTERNALS__' in window)
  );
};

/**
 * Dynamically import Tauri invoke to avoid build-time issues in non-Tauri environments
 */
async function getTauriInvoke() {
  const { invoke } = await import('@tauri-apps/api/core');
  return invoke;
}

export async function openFiles(filters: FileFilter[] = []): Promise<string[]> {
  if (isTauri()) {
    const invoke = await getTauriInvoke();
    return invoke<string[]>('open_files', { filters });
  }

  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    if (filters.length > 0) {
      const exts = filters.flatMap(f => f.extensions.map(ext => `.${ext}`));
      input.accept = exts.join(',');
    }

    input.onchange = () => {
      if (input.files) {
        const files = Array.from(input.files).map((file) => {
          const browserPath = `__browser__/${crypto.randomUUID()}/${file.name}`;
          browserFileStore.set(browserPath, file);
          return browserPath;
        });
        resolve(files);
      } else {
        resolve([]);
      }
    };

    input.click();
  });
}

export function getFiltersForFilename(filename: string): FileFilter[] {
  const parts = filename.split('.');
  const ext = parts.length > 1 ? parts.pop()?.toLowerCase() : undefined;
  if (!ext) {
    return [{ name: 'All Files', extensions: ['*'] }];
  }

  const extMap: Record<string, string> = {
    pdf: 'PDF Document',
    xlsx: 'Excel Spreadsheet',
    xls: 'Excel Spreadsheet',
    docx: 'Word Document',
    doc: 'Word Document',
    pptx: 'PowerPoint Presentation',
    ppt: 'PowerPoint Presentation',
    png: 'PNG Image',
    jpg: 'JPEG Image',
    jpeg: 'JPEG Image',
    webp: 'WebP Image',
    svg: 'SVG Image',
    zip: 'ZIP Archive',
    txt: 'Text Document',
    json: 'JSON Document',
    csv: 'CSV Document',
  };

  const label = extMap[ext] || `${ext.toUpperCase()} File`;
  return [
    { name: label, extensions: [ext] },
    { name: 'All Files', extensions: ['*'] },
  ];
}

export async function saveFile(suggestedName: string, filters: FileFilter[] = []): Promise<string | null> {
  if (isTauri()) {
    try {
      const invoke = await getTauriInvoke();
      return await invoke<string>('save_file', { suggestedName, filters });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      if (
        errMsg.includes('No file selected') ||
        errMsg.includes('canceled') ||
        errMsg.includes('cancelled')
      ) {
        return null;
      }
      // Fallback: attempt to use @tauri-apps/plugin-dialog save
      try {
        const { save } = await import('@tauri-apps/plugin-dialog');
        const res = await save({
          defaultPath: suggestedName,
          filters: filters.map((f) => ({ name: f.name, extensions: f.extensions })),
        });
        return res;
      } catch {
        throw err;
      }
    }
  }

  // Browser fallback: no native save path API, use filename as virtual path.
  return suggestedName.replace(/^[/\\]+/, '');
}

export async function readFileBytes(path: string): Promise<Uint8Array> {
  if (isTauri()) {
    const invoke = await getTauriInvoke();
    const data = await invoke<number[]>('read_file', { path });
    return new Uint8Array(data);
  }

  const file = browserFileStore.get(path);
  if (!file) {
    throw new Error(`File not found in browser session: ${path}`);
  }

  const buffer = await file.arrayBuffer();
  return new Uint8Array(buffer);
}

export async function writeFileBytes(path: string, data: Uint8Array): Promise<void> {
  if (isTauri()) {
    try {
      const invoke = await getTauriInvoke();
      await invoke('write_file', { path, data: Array.from(data) });
      return;
    } catch (err) {
      try {
        const { writeFile } = await import('@tauri-apps/plugin-fs');
        await writeFile(path, data);
        return;
      } catch {
        throw err;
      }
    }
  }

  const blobData = new Uint8Array(data.byteLength);
  blobData.set(data);
  const blob = new Blob([blobData.buffer]);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const filename = path.split('/').pop() || path.split('\\').pop() || 'download.bin';
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Saves a Blob or byte array to disk.
 * - In Tauri desktop environment: opens native OS Save File dialog for the user to choose
 *   the destination directory and filename, then writes the file bytes.
 * - In Browser environment: triggers standard browser download via temporary <a> element.
 *
 * @param fileData Blob or Uint8Array containing file content
 * @param suggestedName Suggested filename (e.g., 'converted.pdf')
 * @param filters Optional file dialog filters
 * @returns Promise<boolean> Returns true if file was saved / downloaded, false if cancelled by user.
 */
export async function saveBlobFile(
  fileData: Blob | Uint8Array,
  suggestedName: string,
  filters?: FileFilter[]
): Promise<boolean> {
  const activeFilters =
    filters && filters.length > 0 ? filters : getFiltersForFilename(suggestedName);

  if (isTauri()) {
    const selectedPath = await saveFile(suggestedName, activeFilters);
    if (!selectedPath) {
      // User cancelled dialog
      return false;
    }

    let bytes: Uint8Array;
    if (fileData instanceof Uint8Array) {
      bytes = fileData;
    } else {
      const buffer = await fileData.arrayBuffer();
      bytes = new Uint8Array(buffer);
    }

    await writeFileBytes(selectedPath, bytes);
    return true;
  }

  // Browser fallback: <a> tag download
  let blob: Blob;
  if (fileData instanceof Blob) {
    blob = fileData;
  } else {
    const copy = new Uint8Array(fileData.byteLength);
    copy.set(fileData);
    blob = new Blob([copy.buffer]);
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = suggestedName;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
  return true;
}

/**
 * Opens a URL in the system's default web browser.
 * In a desktop Tauri environment, it invokes the native open_url command.
 * In a standard browser environment, it falls back to window.open or anchor click.
 */
export async function openExternalUrl(url: string): Promise<boolean> {
  if (!url) return false;

  if (isTauri()) {
    try {
      const invoke = await getTauriInvoke();
      await invoke('open_url', { url });
      return true;
    } catch (err) {
      console.warn('Tauri native open_url failed, trying browser fallbacks:', err);
    }
  }

  if (typeof window !== 'undefined') {
    try {
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (win) return true;
    } catch {
      // ignore
    }

    try {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 100);
      return true;
    } catch (e) {
      console.error('Failed to open link via fallback anchor:', e);
    }
  }

  return false;
}

export interface SystemPrinter {
  name: string;
  is_default: boolean;
  port_name?: string | null;
}

/**
 * Fetch installed system printers.
 * In a desktop Tauri environment: queries real OS printers (local, network, USB).
 * In a standard browser environment: returns empty array.
 */
export async function getSystemPrinters(): Promise<SystemPrinter[]> {
  if (isTauri()) {
    try {
      const invoke = await getTauriInvoke();
      return await invoke<SystemPrinter[]>('get_system_printers');
    } catch (err) {
      console.warn('Failed to get system printers via Tauri:', err);
    }
  }
  return [];
}

/**
 * Print a PDF document natively or via browser fallback.
 * In desktop Tauri environment: invokes native print to specific printer or default printer.
 * In browser environment: falls back to window.print().
 */
export async function printPdfFile(
  fileData: Blob | Uint8Array,
  printerName?: string
): Promise<{ success: boolean; error?: string }> {
  if (isTauri()) {
    try {
      const invoke = await getTauriInvoke();
      let bytes: Uint8Array;
      if (fileData instanceof Uint8Array) {
        bytes = fileData;
      } else {
        const buffer = await fileData.arrayBuffer();
        bytes = new Uint8Array(buffer);
      }
      await invoke('print_pdf_file', {
        data: Array.from(bytes),
        printerName: printerName || null,
      });
      return { success: true };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      return { success: false, error: errMsg };
    }
  }

  // Browser fallback
  if (typeof window !== 'undefined') {
    window.print();
    return { success: true };
  }

  return { success: false, error: 'Environment does not support printing' };
}

