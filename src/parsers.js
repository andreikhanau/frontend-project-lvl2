import yaml from 'js-yaml';

const parseTheFile = (file, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
      return yaml.safeLoad(file);
    default:
      return 'Unsupported file extension';
  }
};

export default parseTheFile;
