/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('wallet', function(table) {
       table.increments('id').primary();
       table.integer('user_id').notNullable();
       table.string('publickey').notNullable();
       table.string('privatekey').notNullable();
       table.string('keyphrase').notNullable();
       table.string('polygon_tokensymbol').notNullable();
       table.string('polygonmain_assets').notNullable();
       table.string('polygontest_assets').notNullable();
       table.string('network').notNullable();
       table.string('bsc_tokensymbol').notNullable();
       table.string('bscmain_assets').notNullable();
       table.string('bsctest_assets').notNullable();
       table.timestamps(true, true);
    });
   };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('wallet');
   };
