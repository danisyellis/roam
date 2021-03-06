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

router.put('/:id', (request, response) => {
  const id = request.params.id;
  console.log(id, "is the id");
  console.log("The body.name is:::", request.body.name);
  const currentCity = request.body.currentCity;
  const name = request.body.name;
  Users.updateProfile(name, currentCity, id)
  .then(() => {
    response.redirect(`/users/${id}`);
  });
});


module.exports = router;
