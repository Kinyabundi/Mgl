/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('subscriber', function(table) {
       table.increments('id').primary();
       table.string('email').notNullable();
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('subscriber')  
};
