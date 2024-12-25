/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('customers', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable().unique()
    table.string('phone').notNullable().unique()
    table.string('address').nullable()
    table.integer('points').defaultTo(0)
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('customers')
}
