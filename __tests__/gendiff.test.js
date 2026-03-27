import {
  describe, it, expect, beforeEach, afterEach,
} from '@jest/globals';
import fs from 'fs';
import path from 'path';
import os from 'os';
import genDiff from '../src/index.js';

describe('gendiff', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');
  let tempDir;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gendiff-'));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should compare two json files with differences', () => {
    const file1 = path.join(fixturesDir, 'file1.json');
    const file2 = path.join(fixturesDir, 'file2.json');
    const result = genDiff(file1, file2);

    expect(result).toContain('- follow: false');
    expect(result).toContain('  host: hexlet.io');
    expect(result).toContain('- proxy: 123.234.53.22');
    expect(result).toContain('- timeout: 50');
    expect(result).toContain('+ timeout: 20');
    expect(result).toContain('+ verbose: true');
  });

  it('should handle identical files', () => {
    const file1 = path.join(fixturesDir, 'file1.json');
    const result = genDiff(file1, file1);

    expect(result).not.toContain('+');
    expect(result).not.toContain('-');
    expect(result).toContain('host: hexlet.io');
    expect(result).toContain('timeout: 50');
  });

  it('should handle empty objects', () => {
    const empty1 = path.join(tempDir, 'empty1.json');
    const empty2 = path.join(tempDir, 'empty2.json');

    fs.writeFileSync(empty1, '{}');
    fs.writeFileSync(empty2, '{}');

    const result = genDiff(empty1, empty2);
    // Форматер возвращает {} для пустых объектов
    expect(result).toBe('{}');
  });

  it('should handle file with added keys', () => {
    const file1 = path.join(tempDir, 'file1.json');
    const file2 = path.join(tempDir, 'file2.json');

    fs.writeFileSync(file1, '{"key1": "value1"}');
    fs.writeFileSync(file2, '{"key1": "value1", "key2": "value2"}');

    const result = genDiff(file1, file2);
    expect(result).toContain('+ key2: value2');
  });

  it('should handle file with removed keys', () => {
    const file1 = path.join(tempDir, 'file1.json');
    const file2 = path.join(tempDir, 'file2.json');

    fs.writeFileSync(file1, '{"key1": "value1", "key2": "value2"}');
    fs.writeFileSync(file2, '{"key1": "value1"}');

    const result = genDiff(file1, file2);
    expect(result).toContain('- key2: value2');
  });
});
