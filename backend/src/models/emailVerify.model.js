/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/

const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');
const HttpException = require('../utils/HttpException.utils');
class EmailVerifyModel {
    tableName = 'email_verify';

    findOne = async (params) => {
        try {
            const { columnSet, values } = multipleColumnSet(params)
            
            // Ensure all values are either valid or null
        const safeValues = values.map(value => value === undefined ? null : value);

        const sql = `SELECT * FROM ${this.tableName} WHERE ${columnSet}`;
        const result = await query(sql, safeValues);
            // return back the first row (user)
            return result[0];
        } catch(error) {
            return {error:error.sqlMessage}
        }
    }

    create = async ({ email, verify_code }) => {
        try {
            console.log(email, verify_code)
    // Check for undefined and replace with null
        const safeEmail = email === undefined ? null : email;
        const safeVerifyCode = verify_code === undefined ? null : verify_code;


            const sql = `INSERT INTO ${this.tableName}
            (email, verify_code) VALUES (?,?)`;

            const result = await query(sql, [safeEmail, safeVerifyCode]);
            const affectedRows = result ? result.affectedRows : 0;

            return affectedRows;
        } catch (error) {
            return {error:error.sqlMessage}
        }
    }

    update = async (params, id) => {
        try {
            const { columnSet, values } = multipleColumnSet(params)
            
            const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id = ?`;
            
            const result = await query(sql, [...values, id]);

            return result;
        } catch(error) {
            return {error:error.sqlMessage}
        }
    }

    delete = async (params) => {
        try {
            const { columnSet, values } = multipleColumnSet(params)
            
            const sql = `DELETE * FROM ${this.tableName}
            WHERE ${columnSet}`;

            const result = await query(sql, [...values]);
            const affectedRows = result ? result.affectedRows : 0;

            return affectedRows;
        } catch (error) {
            return {error:error.sqlMessage}
        }
    }
}

module.exports = new EmailVerifyModel();