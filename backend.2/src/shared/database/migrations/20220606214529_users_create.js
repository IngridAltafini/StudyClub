/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.boolean('type').notNullable(),
    table.text('name').notNullable();
    table.integer('age').notNullable();
    table.text('email').notNullable();
    table.text('telephone').notNullable();
    table.text('password').notNullable();
    table.text('formation').notNullable();
    table.text('cep').notNullable();
    table.integer('genre');
    table.text('address');
    table.text('city');
    table.text('neighborhood');
    table.text('avatar');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
