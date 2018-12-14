/**
 * @param  {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
    table.string('title').notNull();
    table.string('status').notNull();
    table.string('userUUID').notNull();
    table
      .string('uuid')
      .notNull()
      .unique();
  });
}

/**
 * @param  {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('todos');
}
