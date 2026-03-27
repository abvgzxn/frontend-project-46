import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

describe('gendiff for nested structures', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');

  it('should compare nested json files correctly', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.json');
    const file2 = path.join(fixturesDir, 'file2-nested.json');
    const result = genDiff(file1, file2);

    expect(result).toContain('common: {');
    expect(result).toContain('+ follow: false');
    expect(result).toContain('- setting2: 200');
    expect(result).toContain('- setting3: true');
    expect(result).toContain('+ setting3: null');
    expect(result).toContain('+ setting4: blah blah');
    expect(result).toContain('+ setting5: {');
    expect(result).toContain('setting6: {');
    expect(result).toContain('+ ops: vops');
    expect(result).toContain('doge: {');
    expect(result).toContain('- wow: ');
    expect(result).toContain('+ wow: so much');
    expect(result).toContain('group1: {');
    expect(result).toContain('- baz: bas');
    expect(result).toContain('+ baz: bars');
    expect(result).toContain('- nest: {');
    expect(result).toContain('+ nest: str');
    expect(result).toContain('- group2: {');
    expect(result).toContain('+ group3: {');
  });

  it('should compare nested yaml files correctly', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.yml');
    const file2 = path.join(fixturesDir, 'file2-nested.yml');
    const result = genDiff(file1, file2);

    expect(result).toContain('common: {');
    expect(result).toContain('+ follow: false');
    expect(result).toContain('- setting2: 200');
  });
});
