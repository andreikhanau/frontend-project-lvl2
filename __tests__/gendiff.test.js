/* eslint-disable no-underscore-dangle */
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { gendiff, extractData } from '../src/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFilePath = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);
const correctResult = extractData(getFilePath('flatJsonTestResult'));
test('gendiff flatJSONFile comparison test', () => {
  expect(gendiff(getFilePath('file3.json'), getFilePath('file4.json'))).toBe(correctResult);
});
