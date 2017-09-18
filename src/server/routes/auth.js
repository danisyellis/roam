const router = require('express').Router();




router.get('/signup', (request, response) => {
  response.render('auth/signup');
});

router.post('/signup', (request, response) => {
  //do things
  response.redirect('/login');
});

router.get('/login', (request, response) => {
  response.render('auth/login');
});

router.post('/login', (request, response) => {

  //do things
  response.redirect('/users/:id');
});

module.exports = router;
