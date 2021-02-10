import yaml from 'js-yaml';
import path from 'path';

const parseTheFile = (pathToFile) => {
  const format = path.extname(pathToFile);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    default:
      return 'Unsupported file extension';
  }
};

export default parseTheFile;
