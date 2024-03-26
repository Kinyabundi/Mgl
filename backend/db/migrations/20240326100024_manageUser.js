/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('manage_user', function(table) {
       table.increments('id').primary();
       table.string('email').notNullable();
       table.boolean('have_wallet').notNullable();
       table.string('wallet_address').notNullable();
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('manage_user')
};
