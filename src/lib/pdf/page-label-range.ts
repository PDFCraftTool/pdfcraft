/**
 * Helper to parse a page range string and return matching 0-based page indices
 */
export function parsePageLabelRange(rangeStr: string, totalPages: number): Set<number> {
  const indices = new Set<number>();
  const normalized = rangeStr.trim().toLowerCase();

  // If page range is left empty, apply to all pages in the document
  if (!normalized) {
    for (let i = 0; i < totalPages; i++) {
      indices.add(i);
    }
    return indices;
  }

  // Predefined keyword 'odd'
  if (normalized === 'odd') {
    for (let i = 0; i < totalPages; i += 2) {
      indices.add(i);
    }
    return indices;
  }

  // Predefined keyword 'even'
  if (normalized === 'even') {
    for (let i = 1; i < totalPages; i += 2) {
      indices.add(i);
    }
    return indices;
  }

  // Parse comma-separated items
  const parts = normalized.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        // Clip before iterating: oversized endpoints must not block the UI.
        const from = Math.max(1, Math.min(start, end));
        const to = Math.min(totalPages, Math.max(start, end));
        // Page ranges are 1-based, convert to 0-based index
        for (let i = from; i <= to; i++) {
          indices.add(i - 1);
        }
      }
    } else {
      const val = parseInt(trimmed, 10);
      if (!isNaN(val) && val >= 1 && val <= totalPages) {
        indices.add(val - 1);
      }
    }
  }
  
  return indices;
}

