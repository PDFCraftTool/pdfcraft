import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const messagesDir = join(process.cwd(), 'messages');

type MessageCatalog = Record<string, unknown>;

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object') return undefined;
    return (current as Record<string, unknown>)[key];
  }, obj);
}

function getCatalogShape(value: unknown, path = ''): string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return [`${path}:${Array.isArray(value) ? 'array' : typeof value}`];
  }

  return Object.entries(value as MessageCatalog).flatMap(([key, child]) => {
    const childPath = path ? `${path}.${key}` : key;
    return [`${childPath}:object`, ...getCatalogShape(child, childPath)];
  });
}

function getStringLeaves(value: unknown, path = ''): Array<[string, string]> {
  if (typeof value === 'string') return [[path, value]];
  if (!value || typeof value !== 'object' || Array.isArray(value)) return [];

  return Object.entries(value as MessageCatalog).flatMap(([key, child]) =>
    getStringLeaves(child, path ? `${path}.${key}` : key)
  );
}

function getInterpolationArguments(message: string): string[] {
  return Array.from(message.matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)(?:[,}])/g), match => match[1]).sort();
}

function getRichTextTags(message: string): string[] {
  return Array.from(message.matchAll(/<\/?([A-Za-z][A-Za-z0-9]*)\b[^>]*\/?>/g), match => match[1]).sort();
}

describe('message catalog integrity', () => {
  it('keeps Polish messages structurally and token-compatible with English', () => {
    const english = JSON.parse(readFileSync(join(messagesDir, 'en.json'), 'utf8')) as MessageCatalog;
    const polish = JSON.parse(readFileSync(join(messagesDir, 'pl.json'), 'utf8')) as MessageCatalog;

    expect(getCatalogShape(polish).sort()).toEqual(getCatalogShape(english).sort());

    for (const [path, englishMessage] of getStringLeaves(english)) {
      const polishMessage = getNestedValue(polish, path);

      expect(polishMessage, path).toEqual(expect.any(String));
      expect(getInterpolationArguments(polishMessage as string), path)
        .toEqual(getInterpolationArguments(englishMessage));
      expect(getRichTextTags(polishMessage as string), path)
        .toEqual(getRichTextTags(englishMessage));
    }
  });

  it('defines edit PDF iframe patch labels for every locale', () => {
    const requiredKeys = [
      'common.editPdf.unnamedUser',
      'common.editPdf.undo',
      'common.editPdf.redo',
    ];

    const missing = readdirSync(messagesDir)
      .filter((file) => file.endsWith('.json'))
      .flatMap((file) => {
        const messages = JSON.parse(readFileSync(join(messagesDir, file), 'utf8'));
        return requiredKeys
          .filter((key) => typeof getNestedValue(messages, key) !== 'string')
          .map((key) => `${file}:${key}`);
      });

    expect(missing).toEqual([]);
  });
});
