/**
 * Delete all existing entries and seed users table.
 *
 * @param  {Object} knex
 * @return {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([

      ]);
    });
}
