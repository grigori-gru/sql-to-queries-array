const assert = require('assert');
const path = require('path');
const app = require('..');

describe('Test app', () => {
    const sqlCommand = `SELECT * FROM table_name WHERE name = 'name';`;
    const expected = Array.from({length: 5}, () => sqlCommand);

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
});
