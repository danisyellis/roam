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
   })
   .catch(error => {
     response.render('auth/signup', {warning: 'That username already exists. Please choose another.'});
   });
 });
});

router.get('/login', (request, response) => {
  response.render('auth/login');
});

router.post('/login', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  Users.findByEmail(email)
  .then(user => {
    comparePasswords(password, user.password)
    .then(passwordsMatch => {
      if(passwordsMatch) {
        createSession(request, response, user);
        response.redirect(`/users/${user.id}`);
      } else {
        response.render('auth/login', {warning: 'Incorrect username or password'});
      }
    });
  })
  .catch(error => {
    response.render('auth/login', {warning: 'Incorrect username or password'});
  });
});

module.exports = router;
