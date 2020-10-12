#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const extractData = (pathToFile) => fs.readFileSync(path.resolve(pathToFile), 'utf-8');
const displayDiff = (file1, file2) => {
  const uniteKeys = _.union(_.keys(file1), _.keys(file2));
  const result = [];
  uniteKeys.map((key) => {
    if (file1[key] === file2[key]) {
      return result.push(`  ${key}: ${file1[key]}`);
    }
    if (!_.has(file1, key)) {
      return result.push(`+ ${key}: ${file2[key]}`);
    }
    if (!_.has(file2, key)) {
      return result.push(`- ${key}: ${file1[key]}`);
    }

    if (file1[key] !== file2[key]) {
      result.push(`+ ${key}: ${file2[key]}\n- ${key}: ${file1[key]}`);
    }
    return result;
  });
  console.log(`{\n${result.sort((a, b) => a[2].localeCompare(b[2])).join('\n')}\n}`);
};
const gendiff = (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(extractData(pathToFile1));
  const file2 = JSON.parse(extractData(pathToFile2));
  return displayDiff(file1, file2);
};
export default gendiff;
