const {extname} = require('path');
const {readFile} = require('fs').promises;

const parse = data => data
    .split('\n')
    .filter(Boolean)
    .map(str => str.trim())
    .filter(str => !str.startsWith('--'))
    .join(' ')
    .split(';')
    .filter(Boolean)
    .map(str => `${str.trim()};`);

module.exports = async path => {
    const fileExtension = extname(path);

    if (fileExtension !== '.sql') {
        throw new Error(`Unexpected file extension for ${fileExtension}`);
    }

    const sqlData = await readFile(path, 'UTF-8');

    return parse(sqlData);
};
