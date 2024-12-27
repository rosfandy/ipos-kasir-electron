/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('convertions', (table) => {
    table.increments('id').primary()
    table
      .integer('product_id')
      .notNullable()
      .references('id')
      .inTable('products')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.string('name').notNullable()
    table.integer('unit_id').notNullable().references('id').inTable('units')
    table.decimal('price').defaultTo(0).notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('convertions')
}
