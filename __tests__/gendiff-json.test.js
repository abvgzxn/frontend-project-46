import { describe, it, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';

describe('gendiff with json formatter', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');

  it('should output json format for nested json files', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.json');
    const file2 = path.join(fixturesDir, 'file2-nested.json');
    const result = genDiff(file1, file2, 'json');

    expect(() => JSON.parse(result)).not.toThrow();

    const parsed = JSON.parse(result);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBeGreaterThan(0);

    const commonNode = parsed.find((node) => node.key === 'common');
    expect(commonNode).toBeDefined();
    expect(commonNode.type).toBe('nested');
    expect(commonNode.children).toBeDefined();
  });

  it('should output json format for flat json files', () => {
    const file1 = path.join(fixturesDir, 'file1.json');
    const file2 = path.join(fixturesDir, 'file2.json');
    const result = genDiff(file1, file2, 'json');

    expect(() => JSON.parse(result)).not.toThrow();

    const parsed = JSON.parse(result);
    expect(Array.isArray(parsed)).toBe(true);

    const keys = parsed.map((node) => node.key);
    expect(keys).toContain('follow');
    expect(keys).toContain('host');
    expect(keys).toContain('proxy');
    expect(keys).toContain('timeout');
    expect(keys).toContain('verbose');
  });

  it('should output json format for nested yaml files', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.yml');
    const file2 = path.join(fixturesDir, 'file2-nested.yml');
    const result = genDiff(file1, file2, 'json');

    expect(() => JSON.parse(result)).not.toThrow();

    const parsed = JSON.parse(result);
    expect(Array.isArray(parsed)).toBe(true);
  });
});
