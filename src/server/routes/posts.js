const router = require('express').Router();
const Posts = require('../../models/posts');

router.get('/:id', (request, response) => {
  const id = request.params.id;
  Posts.getById(id)
  .then(post => {
    console.log(post);
    response.render("posts/show", {post});
  });
});

module.exports = router;
