const {resolve} = require('path');
const {extname} = require('path');
const {readFile, lstat, readdir} = require('fs').promises;

const parse = data => data
    .split('\n')
    .filter(Boolean)
    .map(str => str.trim())
    .filter(str => !str.startsWith('--') && !str.startsWith('/*'))
    .join(' ')
    .split(';')
    .filter(Boolean)
    .map(str => `${str.trim()};`);

const isDir = async path => {
    const stat = await lstat(path);

    return stat.isDirectory();
};

const getSortedFilesPath = (arr, releaseName, path) =>
    arr.filter(name => name.includes(releaseName))
        .sort((name1, name2) => {
            const one = name1.replace(/\D+/g, '');
            const second = name2.replace(/\D+/g, '');

            return one - second;
        })
        .map(name => resolve(path, name));

const getArray = async (path, releaseName) => {
    if (await isDir(path)) {
        const filesNames = await readdir(path);

        const sqlFiles = getSortedFilesPath(filesNames, releaseName, path);

        const queriesArr = await Promise.all(sqlFiles.map(getArray));

        return queriesArr.reduce((acc, val) => [...acc, ...val], []);
    }

    const fileExtension = extname(path);

    if (fileExtension !== '.sql') {
        throw new Error(`Unexpected file extension for ${fileExtension}`);
    }

    const sqlData = await readFile(path, 'UTF-8');

    return parse(sqlData);
};

module.exports = getArray;
