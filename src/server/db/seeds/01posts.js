
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, title: 'Pretty Kitty', author: 'CrazyCatLady28', image: 'https://placekitten.com/200/300', description: 'This is my new cat(#8)! Her name is muffin!', votes: 2}),
        knex('posts').insert({id: 2, title: 'Nicholas Cage', author: 'NickLover', image: 'http://www.placecage.com/200/300', description: 'My TRUE love and my future husband!', votes: -6}),
        knex('posts').insert({id: 3, title: 'Another Post', author: 'anonymous', image: 'http://www.placehold.it/200x300', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', votes: 54})
      ]);
    });
};
