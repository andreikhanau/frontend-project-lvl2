/* eslint-disable no-underscore-dangle */
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { gendiff, extractData } from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFilePath = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);
const filepath1 = getFilePath('file1.json');
const filepath2 = getFilePath('file2.json');
const correctResult = extractData(getFilePath('flatJsonTestResult'));
test('gendiff flatJSONFile test', () => {
  expect(gendiff(filepath1, filepath2)).toBe(correctResult);
});
