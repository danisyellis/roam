const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');
const posts = require('./posts');
const cities = require('./cities');
const {isLoggedIn} = require('../utils');


router.get('/', (request, response) => {
  if(request.session.user) {
    const id = request.session.user.id;
    response.redirect(`/users/${id}`);
  } else {
    response.render('index');
  }
});

router.use('/', auth);
router.use(isLoggedIn);
router.use('/users', users);
router.use('/posts', posts);
router.use('/cities', cities);






module.exports = router;
