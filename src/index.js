import parseFile from './parsers.js';
import buildAst from './buildAst.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const ast = buildAst(data1, data2);

  return format(ast, formatName);
};

export default genDiff;
