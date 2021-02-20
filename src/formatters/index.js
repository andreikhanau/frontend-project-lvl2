import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJson from './json.js';

const render = (ast, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return makeStylish(ast);
    case 'plain':
      return makePlain(ast);
    case 'json':
      return makeJson(ast);
    default:
      throw new Error(`Unsupported format: ${outputFormat}!`);
  }
};
export default render;
