import parseFile from './parsers.js';

export default function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  
  console.log('File 1 data:', data1);
  console.log('File 2 data:', data2);
  
  return 'Difference will be here';
}