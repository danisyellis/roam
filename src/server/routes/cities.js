const router = require('express').Router();
const Cities = require('../../models/cities');

router.get('/', (request, response) => {
  Cities.getAll()
  .then(cities => {
    console.log('cities:::', cities);
    response.render('cities/index', {cities});
  });
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  console.log("id:::::", id);
  Cities.findById(id)
  .then(city => {
    console.log("city::::", city);
    Cities.getPostsByCityId(`${city.id}`)
    .then(posts => {
      console.log("posts:::::", posts);
      response.render('cities/show', {city, posts});
      });
    });
});

module.exports = router;
