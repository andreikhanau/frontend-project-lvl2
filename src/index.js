import fs from 'fs';
import path from 'path';
import parseTheFile from './parsers.js';
import render from './formatters/index.js';
import makeDiff from './makeDiff.js';

const extractData = (file) => fs.readFileSync(file, 'utf-8');
const gendiff = (pathToFile1, pathToFile2, outputFormat = 'stylish') => {
  const extractFile1 = extractData(path.resolve(pathToFile1));
  const extractFile2 = extractData(path.resolve(pathToFile2));
  const file1 = parseTheFile(pathToFile1)(extractFile1);
  const file2 = parseTheFile(pathToFile2)(extractFile2);
  const diff = makeDiff(file1, file2);
  return render(diff, outputFormat);
};
export default gendiff;
