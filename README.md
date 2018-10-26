# sql-to-queries-array

![NO dependency](https://img.shields.io/badge/no-dependency-brightgreen.svg)

[![Build Status](https://travis-ci.org/grigori-gru/sql-to-queries-array.svg?branch=master)](https://travis-ci.org/grigori-gru/sql-to-queries-array)

Convert sql file to array of queries

## Install

```
npm i sql-to-queries-array
```

## How to use

You can use it with either with one SQL file or directory.

### With file

```javascript
const arr = await sqlToArray(pathToFile);
```

### With file


If you need to include only some names of files you shold add that base name, for example `release` as second param.

```javascript
const arr = await sqlToArray(pathToDirectory, nameOfExpectedFiles);
```

## Test

npm run test

