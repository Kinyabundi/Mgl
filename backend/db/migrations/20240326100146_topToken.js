/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('top_tokens', function(table) {
       table.increments('id').primary();
       table.string('name').notNullable();
       table.string('symbol').notNullable();
       table.decimal('price').notNullable();
       table.decimal('daily_percent').notNullable();
       table.timestamps(true, true);
    });
   };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('top_tokens')
};
