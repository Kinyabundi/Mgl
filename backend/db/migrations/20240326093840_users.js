/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
       table.increments('id').primary();
       table.string('email').notNullable();
       table.string('password').notNullable();
       table.string('country').notNullable();
       table.string('invite_code').notNullable();
       table.enum('role', ['General', 'Admin']).defaultTo('General');
       table.boolean('get_bnb').defaultTo(false);
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
   };
