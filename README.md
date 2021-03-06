# Gendiff
[![Maintainability](https://api.codeclimate.com/v1/badges/a7f9be878cbda15d6ade/maintainability)](https://codeclimate.com/github/andreikhanau/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a7f9be878cbda15d6ade/test_coverage)](https://codeclimate.com/github/andreikhanau/frontend-project-lvl2/test_coverage)
[![Node CI](https://github.com/andreikhanau/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/andreikhanau/frontend-project-lvl2/actions)
[![Hexlet checks](https://github.com/andreikhanau/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/andreikhanau/frontend-project-lvl2/actions)

## Welcome to the "Gendiff", a console-based program that compares two configurational files (.yml or .json) and returns the result in one of the three different formats of your choosing!

### Installation:
```
make install
make link
```
### Example of usage:
```
gendiff --format <format of your choosing('stylish', 'plain' or 'json', default format is 'stylish')> <path to the first file> <path to the second file>
```
#### 'Stylish' format:
```
gendiff --format stylish file1.json file2.json
```

[Watch asciinema](https://asciinema.org/a/tXqY5TOUuB1RCiIYR47WIe5s8)
#### 'Plain' format:
```
gendiff --format plain file1.json file2.json
```
[Watch asciinema](https://asciinema.org/a/PKOvG5o29AaJBD6zD86Dvc9Df)
#### 'Json' format:
``` 
gendiff --format json file1.json file2.json
```
[Watch asciinema](https://asciinema.org/a/EBbshCw36FP7yMqzvVvsF0cXN)
#### The deafult format is stylish:
```
gendiff file1.json file2.json
```

[Watch asciinema](https://asciinema.org/a/gpHNEteIvWLdllTvRMMyi3bOC)

