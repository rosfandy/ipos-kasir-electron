/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.integer('staff_id').references('id').inTable('users')
    table.uuid('customer_id').references('id').inTable('customers')
    table.integer('product_id').references('id').inTable('products')
    table.integer('total_product').notNullable()
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
