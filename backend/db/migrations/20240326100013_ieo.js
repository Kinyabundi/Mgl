/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ieo', function(table) {
       table.increments('id').primary();
       table.string('token_address').notNullable();
       table.string('token_name').notNullable();
       table.string('token_symbol').notNullable();
       table.text('token_description').notNullable();
       table.string('token_website').notNullable();
       table.string('token_fb').notNullable();
       table.string('token_pic').notNullable();
       table.integer('token_decimals').notNullable();
       table.decimal('total_supply').notNullable();
       table.decimal('presale_supply').notNullable();
       table.decimal('presale_price').notNullable();
       table.decimal('list_price').notNullable();
       table.decimal('min_buy').notNullable();
       table.decimal('max_buy').notNullable();
       table.timestamp('start_time').notNullable();
       table.timestamp('end_time').notNullable();
       table.string('status').notNullable();
       table.decimal('raised_amount').notNullable();
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ieo')
};
