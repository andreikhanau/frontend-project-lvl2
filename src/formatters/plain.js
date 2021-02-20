import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const makePlain = (ast, path = []) => {
  const displayDiff = ast.flatMap((item) => {
    const {
      name, type, value, previousValue, newValue, children,
    } = item;
    const currentPath = [...path, name];
    const startString = `Property '${currentPath.join('.')}' was`;
    switch (type) {
      case 'Nested':
        return makePlain(children, currentPath);
      case 'Added':
        return `${startString} added with value: ${stringify(value)}`;
      case 'Deleted':
        return `${startString} removed`;
      case 'Changed':
        return `${startString} updated. From ${stringify(previousValue)} to ${stringify(newValue)}`;
      case 'Unchanged':
        return null;
      default:
        throw new Error(`Undefined type: ${type}!`);
    }
  });
  return displayDiff.filter((string) => string !== null).join('\n');
};

export default makePlain;
