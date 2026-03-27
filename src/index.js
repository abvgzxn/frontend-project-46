import fs from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import buildAst from './buildAst.js';
import stylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const ast = buildAst(data1, data2);

  if (format === 'stylish') {
    return stylish(ast);
  }

  throw new Error(`Unknown format: ${format}`);
};

export default genDiff;