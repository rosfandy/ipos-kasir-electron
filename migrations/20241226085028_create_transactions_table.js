/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.integer('product_id').references('id').inTable('products')
    table.integer('discount_id').references('id').inTable('disocunts')
    table.integer('tax_id').references('id').inTable('taxes')
    table.integer('product_qty').notNullable()
    table.decimal('total_price').notNullable()
    table.dateTime('order_date').notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('transactions')
}
