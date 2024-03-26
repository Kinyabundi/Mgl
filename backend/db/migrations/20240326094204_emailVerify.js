/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('email_verify', function(table) {
       table.increments('id').primary();
       table.string('email').notNullable();
       table.string('verify_code').notNullable();
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('email_verify');
   };
