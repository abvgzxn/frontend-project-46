import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

describe('gendiff', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');

  it('should compare two json files', () => {
    const file1 = path.join(fixturesDir, 'file1.json');
    const file2 = path.join(fixturesDir, 'file2.json');

    // Проверяем, что файлы существуют
    expect(fs.existsSync(file1)).toBe(true);
    expect(fs.existsSync(file2)).toBe(true);

    const result = genDiff(file1, file2);

    // Проверяем результат
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('host');
  });
});
