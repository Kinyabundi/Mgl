/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transaction', function(table) {
       table.increments('id').primary();
       table.integer('user_id').notNullable();
       table.string('hash').notNullable();
       table.integer('from_id').notNullable();
       table.integer('to_id').notNullable();
       table.string('token').notNullable();
       table.decimal('amount').notNullable();
       table.string('network').notNullable();
       table.boolean('to_admin').notNullable();
       table.timestamps(true, true);
    });
   };
   

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transaction');
};
