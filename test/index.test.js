const assert = require('assert');
const path = require('path');
const app = require('..');

const createArr = item => Array.from({length: 5}, () => item);

describe('Test app', () => {
    const sqlCommand = `SELECT * FROM table_name WHERE name = 'name';`;

    // it's query from release10.sql
    const sqlCommand2 = `SELECT * FROM table_name1 WHERE name = 'name';`;

    const expected = createArr(sqlCommand);
    const expected2 = createArr(sqlCommand2);

    it('Expect parser works well if path and file is correct', async () => {
        const pathToFile = path.resolve(__dirname, 'fixtures', '1.sql');
        const result = await app(pathToFile);

        assert.deepEqual(result, expected);
    });

    it('Expect parser works well if path and file is correct', async () => {
        const pathToFile = path.resolve(__dirname, 'fixtures', '2.sql');
        const result = await app(pathToFile);

        assert.deepEqual(result, expected);
    });

    it('Expect parser will not work  and throws error if file has incorrect extension', () => {
        const pathToFile = path.resolve(__dirname, 'fixtures', '1.notsql');

        assert.rejects(app(pathToFile));
    });

    it('Expect parser will not work  and throws error if file is not found', () => {
        const pathToFile = path.resolve(__dirname, 'fixtures', '3.sql');

        assert.rejects(app(pathToFile));
    });

    it('Expect parser works with directory of files and do correct order', async () => {
        const pathToFile = path.resolve(__dirname, 'fixtures', 'sql-files');
        const result = await app(pathToFile, 'release');

        assert.deepEqual(result, [...expected, ...expected2]);
    });
});
