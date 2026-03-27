import { describe, it, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';

describe('gendiff with plain formatter', () => {
  const fixturesDir = path.join(process.cwd(), '__fixtures__');

  it('should output plain format for nested json files', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.json');
    const file2 = path.join(fixturesDir, 'file2-nested.json');
    const result = genDiff(file1, file2, 'plain');

    expect(result).toContain("Property 'common.follow' was added with value: false");
    expect(result).toContain("Property 'common.setting2' was removed");
    expect(result).toContain("Property 'common.setting3' was updated. From true to null");
    expect(result).toContain("Property 'common.setting4' was added with value: 'blah blah'");
    expect(result).toContain("Property 'common.setting5' was added with value: [complex value]");
    expect(result).toContain("Property 'common.setting6.doge.wow' was updated. From '' to 'so much'");
    expect(result).toContain("Property 'common.setting6.ops' was added with value: 'vops'");
    expect(result).toContain("Property 'group1.baz' was updated. From 'bas' to 'bars'");
    expect(result).toContain("Property 'group1.nest' was updated. From [complex value] to 'str'");
    expect(result).toContain("Property 'group2' was removed");
    expect(result).toContain("Property 'group3' was added with value: [complex value]");
  });

  it('should output plain format for flat json files', () => {
    const file1 = path.join(fixturesDir, 'file1.json');
    const file2 = path.join(fixturesDir, 'file2.json');
    const result = genDiff(file1, file2, 'plain');

    expect(result).toContain("Property 'follow' was removed");
    expect(result).toContain("Property 'proxy' was removed");
    expect(result).toContain("Property 'timeout' was updated. From 50 to 20");
    expect(result).toContain("Property 'verbose' was added with value: true");
  });

  it('should output plain format for nested yaml files', () => {
    const file1 = path.join(fixturesDir, 'file1-nested.yml');
    const file2 = path.join(fixturesDir, 'file2-nested.yml');
    const result = genDiff(file1, file2, 'plain');

    expect(result).toContain("Property 'common.follow' was added with value: false");
    expect(result).toContain("Property 'common.setting2' was removed");
  });
});