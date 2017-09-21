const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');
const posts = require('./posts');

router.use('/', auth);
router.use('/users', users);
router.use('/posts', posts);

router.get('/', (request, response) => {
  response.render('index');
});




module.exports = router;
