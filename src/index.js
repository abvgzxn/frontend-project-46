import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const allKeys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(allKeys);

  const lines = ['{'];

  sortedKeys.forEach((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data2, key)) {
      lines.push(`  - ${key}: ${value1}`);
    } else if (!_.has(data1, key)) {
      lines.push(`  + ${key}: ${value2}`);
    } else if (!_.isEqual(value1, value2)) {
      lines.push(`  - ${key}: ${value1}`);
      lines.push(`  + ${key}: ${value2}`);
    } else {
      lines.push(`    ${key}: ${value1}`);
    }
  });

  lines.push('}');
  return lines.join('\n');
};

export default genDiff;
