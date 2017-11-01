const router = require('express').Router();
const Users = require('../../models/users');
const Posts = require('../../models/posts');


router.get('/:id', (request, response) => {
  const id = request.params.id;
  Users.findById(id)
  .then(user => {
    if(user === null) {
      response.send("Sorry, there's no user with that id.");
    } else {
      Posts.getByUserId(user.id)
      .then(posts => {
        user.date_joined = user.date_joined.toDateString();
        response.render('users/show', {user, posts});
      });
    }
  })
  .catch(err => {
    console.error("Error:", err);
    response.send("Oops. Something went wrong :-(");
  });
});

router.put('/:id', (request, response) => {
  const id = request.params.id;
  const currentCity = request.body.currentCity;
  const name = request.body.name;
  const photo = request.body.content;
  console.log("The variable photo", photo);
  Users.updateProfile(name, currentCity, id, photo)
  .then(() => {
    response.redirect(`/users/${id}`);
  });
});


module.exports = router;
