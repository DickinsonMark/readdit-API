
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('author').notNullable();
    table.text('image').notNullable();
    table.text('description').notNullable();
    table.integer('votes').defaultsTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
