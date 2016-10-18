
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({author: 'CatsRLame', comment: 'That cat is ugly, only losers like cats!', post_id: 1}),
        knex('comments').insert({author: 'CrazyCatLady28', comment: 'My cats are beautiful, and I am not a loser!', post_id: 1}),
        knex('comments').insert({author: 'CageTheBeast', comment: 'Call me!', post_id: 2})
      ]);
    });
};
