const router = require('express').Router();
const { encryptPassword, comparePasswords, createSession } = require('../utils');
const Users = require('../../models/users');

router.get('/signup', (request, response) => {
  response.render('auth/signup');
});

router.post('/signup', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  encryptPassword(password)
  .then(hashedPassword => {
    Users.create(email, hashedPassword)
    .then(newUser => {
     createSession(request, response, newUser);
     const id = newUser.id;
     response.redirect(`/users/${id}`);
   });
 });
});

router.get('/users/:id', (request, response) => {
  const id = request.params.id;
  Users.findById(id)
  .then(user => {
    Users.getPostsByUserId(user.id)
    .then(posts => {
      response.render('users/show', {user, posts});
    });
  });
});

router.get('/login', (request, response) => {
  response.render('auth/login');
});

router.post('/login', (request, response) => {

  //do things
  response.redirect('/users/:id');
});

module.exports = router;
