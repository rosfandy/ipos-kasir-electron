/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('invoices', (table) => {
    table.uuid('id').primary()
    table.uuid('customer_id').references('id').inTable('customers')
    table.integer('staff_id').references('id').inTable('users')
    table.integer('transaction_id').references('id').inTable('transactions')
    table.decimal('total_price').notNullable()
    table.decimal('total_profit').notNullable()
    table.dateTime('order_date').notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('invoices')
}
