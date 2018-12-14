/**
 * Create users table.
 *
 * @param  {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
    table
      .string('uuid')
      .notNull()
      .unique();
    table.string('name').notNull();
    table.string('password').notNull();
    table
      .string('username')
      .notNull()
      .unique();
    table
      .string('email')
      .notNull()
      .unique();
  });
}

/**
 * Drop users table.
 *
 * @param  {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
