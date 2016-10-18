
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.text('author').notNullable();
    table.text('comment').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('post_id').references('id').inTable('posts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
