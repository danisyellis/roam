const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');

router.use('/', auth);
router.use('/users', users);

router.get('/', (request, response) => {
  response.render('index');
});




module.exports = router;
