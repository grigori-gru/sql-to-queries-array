const readFile = require('fs').promises;

const parse = data =>
    data
        .split('\n')
        .filter(str => {
            str.trim()
        });

module.exports = async path => {
    const sqlData = await readFile(path);

    return parseFloat(sqlData);
};
