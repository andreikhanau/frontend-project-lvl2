import _ from 'lodash';

const stringify = (value, marginCounter = 0) => {
  if (!_.isPlainObject(value)) {
    return value;
  }
  const margin = '   '.repeat(marginCounter + 1);
  const keys = _.keys(value);
  const editValue = keys.map((key) => {
    const currentValue = value[key];
    if (_.isPlainObject(value)) {
      return `${margin}${key}: ${stringify(currentValue, marginCounter + 1)}`;
    }
    return `${margin}${key}: ${currentValue}`;
  });

  return `{\n${editValue.join('\n')}\n${margin}}`;
};

const makeStylish = (ast, marginCounter = 0) => {
  const displayDiff = ast.map((item) => {
    const {
      name, status, value, from, to, children,
    } = item;
    switch (status) {
      case 'Nested':
        return `   ${name}: ${makeStylish(children, marginCounter + 1)}`;
      case 'Unchanged':
        return `   ${name}: ${stringify(value, marginCounter + 1)}`;
      case 'Changed':
        return [` - ${name}: ${stringify(from, marginCounter + 1)}`, ` + ${name}: ${stringify(to, marginCounter + 1)}`];
      case 'Deleted':
        return ` - ${name}: ${stringify(value, marginCounter + 1)}`;
      case 'Added':
        return ` + ${name}: ${stringify(value, marginCounter + 1)}`;
      default: throw new Error('Undefined status');
    }
  });
  const margin = '  '.repeat(marginCounter + 1);
  const result = _.flatten(displayDiff).join(`\n${margin}`);
  return `{\n${margin}${result}\n${margin}}`;
};
export default makeStylish;
