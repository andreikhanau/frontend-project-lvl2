import fs from 'fs';
import _ from 'lodash';
import parseTheFile from './parsers.js';
import makeStylish from './formatters/stylish.js';

const displayDiff = (file1, file2) => {
  const keys = _.union(_.keys(file1), _.keys(file2));
  const result = keys.map((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
        return { name: key, status: 'Nested', children: displayDiff(file1[key], file2[key]) };
      }
    }
    if (file1[key] === file2[key]) {
      return { name: key, status: 'Unchanged', value: file1[key] };
    }
    if (!_.has(file1, key)) {
      return { name: key, status: 'Added', value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { name: key, status: 'Deleted', value: file1[key] };
    }
    if (file1[key] !== file2[key]) {
      return {
        name: key, status: 'Changed', from: file1[key], to: file2[key],
      };
    }
    return result;
  });
  return result;
};

const extractData = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');
const gendiff = (pathToFile1, pathToFile2) => {
  const extractFile1 = extractData(pathToFile1);
  const extractFile2 = extractData(pathToFile2);
  const file1 = parseTheFile(pathToFile1)(extractFile1);
  const file2 = parseTheFile(pathToFile2)(extractFile2);
  return makeStylish(displayDiff(file1, file2));
};
export { gendiff, extractData };
