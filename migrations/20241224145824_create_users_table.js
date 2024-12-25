/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.uuid('supabase_id').nullable().unique()
    table
      .integer('role_id')
      .nullable()
      .references('id')
      .inTable('roles')
      .onDelete('SET NULL')
      .onUpdate('CASCADE')
    table.string('name').nullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('phone').nullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
