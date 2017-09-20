const router = require('express').Router();
const Users = require('../../models/users');


router.get('/:id', (request, response) => {
  const id = request.params.id;
  Users.findById(id)
  .then(user => {
    Users.getPostsByUserId(user.id)
    .then(posts => {
      user.date_joined = user.date_joined.toDateString();
      response.render('users/show', {user, posts});
    });
  });
});


module.exports = router;
