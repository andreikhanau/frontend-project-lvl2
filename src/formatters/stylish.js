import _ from 'lodash';

const setMargin = (depth, spaceCounter = 4) => ' '.repeat(depth * spaceCounter - 2);
const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }
  const keys = _.keys(value);
  const stringifyObj = keys.map((key) => {
    const margin = setMargin(depth);
    const currentValue = value[key];
    if (_.isPlainObject(value)) {
      return `${margin}  ${key}: ${stringify(currentValue, depth + 1)}`;
    }
    return `${margin}  ${key}: ${currentValue}`;
  });

  return `{\n${stringifyObj.join('\n')}\n${setMargin(depth - 1)}  }`;
};

const makeStylish = (ast) => {
  const displayDiff = (node, depth) => node.map((item) => {
    const {
      name, status, value, previousValue, newValue, children,
    } = item;
    const margin = setMargin(depth);
    switch (status) {
      case 'Nested':
        return `${margin}  ${name}: {\n${displayDiff(children, depth + 1)}\n${margin}  }`.split(',');
      case 'Unchanged':
        return `${margin}  ${name}: ${stringify(value, depth + 1)}`;
      case 'Changed':
        return [`${margin}- ${name}: ${stringify(previousValue, depth + 1)}`, `${margin}+ ${name}: ${stringify(newValue, depth + 1)}`];
      case 'Deleted':
        return `${margin}- ${name}: ${stringify(value, depth + 1)}`;
      case 'Added':
        return `${margin}+ ${name}: ${stringify(value, depth + 1)}`;
      default: throw new Error('Undefined status');
    }
  });
  const initialDepth = 1;
  const result = _.flatten(displayDiff(ast, initialDepth));
  return `{\n${result.join('\n')}\n}`;
};
export default makeStylish;
