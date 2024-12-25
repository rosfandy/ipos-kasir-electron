const bcrypt = require('bcrypt')
const { now } = require('./utils/utils')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('users').insert([
    {
      role_id: 3,
      name: 'user',
      email: 'user@mail.com',
      password: await bcrypt.hash('user', 10),
      created_at: now(),
      updated_at: now()
    }
  ])
}
