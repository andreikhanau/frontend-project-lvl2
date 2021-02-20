import _ from 'lodash';

const makeDiff = (file1, file2) => {
  const getKeys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));
  return getKeys.map((key) => {
    if (!_.has(file1, key)) {
      return { name: key, type: 'Added', value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { name: key, type: 'Deleted', value: file1[key] };
    }
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return { name: key, type: 'Nested', children: makeDiff(file1[key], file2[key]) };
    }
    if (file1[key] !== file2[key]) {
      return {
        name: key, type: 'Changed', previousValue: file1[key], newValue: file2[key],
      };
    }
    return { name: key, type: 'Unchanged', value: file1[key] };
  });
};

export default makeDiff;
