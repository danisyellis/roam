const router = require('express').Router();
const auth = require('./auth');


router.get('/', (request, response) => {
  response.render('index');
});

router.use('/', auth);


module.exports = router;
