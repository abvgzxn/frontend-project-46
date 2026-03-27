import { describe, it, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';

describe('gendiff with YAML files', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');

  it('should compare two yaml files with differences', () => {
    const file1 = path.join(fixturesDir, 'file1.yml');
    const file2 = path.join(fixturesDir, 'file2.yml');
    const result = genDiff(file1, file2);

    expect(result).toContain('- follow: false');
    expect(result).toContain('  host: hexlet.io');
    expect(result).toContain('- proxy: 123.234.53.22');
    expect(result).toContain('- timeout: 50');
    expect(result).toContain('+ timeout: 20');
    expect(result).toContain('+ verbose: true');
  });

  it('should handle identical yaml files', () => {
    const file1 = path.join(fixturesDir, 'file1.yml');
    const result = genDiff(file1, file1);

    expect(result).not.toContain('+');
    expect(result).not.toContain('-');
    expect(result).toContain('host: hexlet.io');
    expect(result).toContain('timeout: 50');
  });
});
