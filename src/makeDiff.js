import _ from 'lodash';

const makeDiff = (file1, file2) => {
  const getKeys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));
  const result = getKeys.map((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
        return { name: key, status: 'Nested', children: makeDiff(file1[key], file2[key]) };
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
        name: key, status: 'Changed', previousValue: file1[key], newValue: file2[key],
      };
    }
    return result;
  });
  return result;
};
export default makeDiff;
