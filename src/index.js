import fs from 'fs';
import _ from 'lodash';

const extractData = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');
const displayDiff = (file1, file2) => {
  const uniteTheKeys = _.union(_.keys(file1), _.keys(file2));
  const result = [];
  uniteTheKeys.map((key) => {
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
  const sortAlphabetically = `{\n${result.sort((a, b) => a[2].localeCompare(b[2])).join('\n')}\n}`;
  return sortAlphabetically;
};
const gendiff = (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(extractData(pathToFile1));
  const file2 = JSON.parse(extractData(pathToFile2));
  return displayDiff(file1, file2);
};
export { gendiff, extractData };
