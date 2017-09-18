const router = require('express').Router();
const auth = require('./auth');

router.use('/auth', auth);

router.get('/', (request, response) => {
  response.render('index');
});

module.exports = router;
