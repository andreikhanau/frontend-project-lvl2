/* eslint-disable no-underscore-dangle */
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const extractData = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');
const getFilePath = (fileName) => path.join(__dirname, '..', '__tests__', '__fixtures__', fileName);
const getTestResult = (resultFileName) => extractData(getFilePath(resultFileName));
test('gendiff stylish format test for .json file', () => {
  expect(gendiff('file1.json', 'file2.json', 'stylish')).toBe(getTestResult('stylishResult'));
});
test('gendiff plain format test for .json file', () => {
  expect(gendiff('file1.json', 'file2.json', 'plain')).toBe(getTestResult('plainResult'));
});
test('gendiff json format test for .json file', () => {
  expect(gendiff('file1.json', 'file2.json', 'json')).toBe(getTestResult('jsonResult'));
});
test('gendiff stylish format test for .yml file', () => {
  expect(gendiff('file1.yml', 'file2.yml', 'stylish')).toBe(getTestResult('stylishResult'));
});
test('gendiff plain format test for .yml file', () => {
  expect(gendiff('file1.yml', 'file2.yml', 'plain')).toBe(getTestResult('plainResult'));
});
test('gendiff json format test for .yml file', () => {
  expect(gendiff('file1.yml', 'file2.yml', 'json')).toBe(getTestResult('jsonResult'));
});
