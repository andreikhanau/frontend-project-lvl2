import fs from 'fs';
import path from 'path';
import parseTheFile from './parsers.js';
import render from './formatters/index.js';
import makeDiff from './makeDiff.js';

const getExtension = (fileName) => path.extname(fileName);
const extractData = (fileName) => fs.readFileSync(fileName, 'utf-8');
const gendiff = (pathToFile1, pathToFile2, outputFormat = 'stylish') => {
  const getExtensionFile1 = getExtension(pathToFile1);
  const getExtensionFile2 = getExtension(pathToFile2);
  const extractFile1 = extractData(path.resolve(pathToFile1));
  const extractFile2 = extractData(path.resolve(pathToFile2));
  const file1 = parseTheFile(extractFile1, getExtensionFile1);
  const file2 = parseTheFile(extractFile2, getExtensionFile2);
  const diff = makeDiff(file1, file2);
  return render(diff, outputFormat);
};
export default gendiff;
