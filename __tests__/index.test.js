import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const extractData = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');
const getFilePath = (fileName) => path.join(__dirname, '..', '__tests__', '__fixtures__', fileName);
const getTestResult = (resultFileName) => extractData(getFilePath(resultFileName));

const resultFiles = ['stylishResult', 'plainResult', 'jsonResult'];
const formatters = ['stylish', 'plain', 'json'];
const jsonFile1 = getFilePath('file1.json');
const jsonFile2 = getFilePath('file2.json');
const ymlFile1 = getFilePath('file1.yml');
const ymlFile2 = getFilePath('file2.yml');

test('gendiff tests for "json" files', () => {
  expect(formatters.forEach((format) => gendiff(jsonFile1, jsonFile2, format))).toBe(
    resultFiles.forEach((result) => getTestResult(result)),
  );
});
test('gendiff tests for "yml" files', () => {
  expect(formatters.forEach((format) => gendiff(ymlFile1, ymlFile2, format))).toBe(
    resultFiles.forEach((result) => getTestResult(result)),
  );
});
test('gendiff tests for default format', () => {
  expect(gendiff(ymlFile1, ymlFile2)).toBe(getTestResult('stylishResult'));
  expect(gendiff(jsonFile1, jsonFile2)).toBe(getTestResult('stylishResult'));
});
