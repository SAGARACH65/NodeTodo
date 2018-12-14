// exports.up = function (knex, Promise) {
//   return knex.schema.table('users', function (t) {
//     t.string('refreshToken').notNull().defaultTo('');
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.table('users', function(t) {
//       t.dropColumn('refreshToken');
//   });
// }

/**
 * Create tokens table.
 *
 * @param  {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('tokens', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
    table.string('userUUID').notNull();
    table.string('deviceId').notNull().unique;
    table.string('token').notNull();
    table.string('expiry').notNull();
  });
}

/**
 * Drop tokens table.
 *
 * @param  {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('tokens');
}
