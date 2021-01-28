import yaml from 'js-yaml';
import path from 'path';

const parseTheFile = (pathToFile) => {
  let parse;
  const format = path.extname(pathToFile);
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  } else if (format === '.ini') {
    parse = ini.parse;
  }
  return parse;
};
export default parseTheFile;
