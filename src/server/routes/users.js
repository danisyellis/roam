const router = require('express').Router();
const Users = require('../../models/users');
const Posts = require('../../models/posts');


router.get('/:id', (request, response) => {
  const id = request.params.id;
  Users.findById(id)
  .then(user => {
    Posts.getByUserId(user.id)
    .then(posts => {
      user.date_joined = user.date_joined.toDateString();
      response.render('users/show', {user, posts});
    });
  });
});


module.exports = router;
