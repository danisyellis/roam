const db = require("./db");

const getByUserId = function(userId) {
  return db.any(`
    SELECT * FROM posts
    WHERE user_id = $1
    `, userId)
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

const getById = function(id) {
  return db.one(`
    SELECT * FROM posts
    WHERE id = $1
    `, id)
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

module.exports = {
  getByUserId,
  getById
};
