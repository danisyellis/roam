const db = require("./db");

const getAll = () => {
  return db.any(`
    SELECT * FROM cities;
    `)
    .catch(error => {
      console.error(error.message);
      throw error;
    });
};

const findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM cities
    WHERE id = $1
    `, id)
    .catch(error => {
      console.error(error.message, "The argument is:::", id);
      throw error;
    });
};

const getPostsByCityId = (id) => {
  return db.any(`
    SELECT * FROM posts
    JOIN cities
    ON posts.city_id = $1
    ORDER BY posts.title
    `, id)
    .catch(error => {
      console.error(error.message, "The argument is:::", id);
      throw error;
    });
};

module.exports = {
  getAll,
  findById,
  getPostsByCityId
};
