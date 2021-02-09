import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import parseTheFile from './parsers.js';
import render from './formatters/index.js';
import makeDiff from './makeDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFilePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const extractData = (file) => fs.readFileSync(file, 'utf-8');
const gendiff = (pathToFile1, pathToFile2, outputFormat = 'stylish') => {
  const extractFile1 = extractData(pathToFile1);
  const extractFile2 = extractData(pathToFile2);
  const file1 = parseTheFile(pathToFile1)(extractFile1);
  const file2 = parseTheFile(pathToFile2)(extractFile2);
  const diff = makeDiff(file1, file2);
  return render(diff, outputFormat);
};
export default gendiff;
