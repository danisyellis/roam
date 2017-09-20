const db = require("./db");

const findById = (id) => {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE id=$1
    `, id)
    .catch(error => console.log(error.message));
};


const create = (email, password) => {
  return db.oneOrNone(`
    INSERT INTO
      users (email, password)
    VALUES
      ($1, $2)
    RETURNING
      *
    `,
    [
      email,
      password,
    ])
    .catch(error => { console.log(error.message);
    });
};

const getPostsByUserId = function(userId) {
  return db.any(`
    SELECT * FROM posts
    WHERE user_id = $1
    `, userId);
};

module.exports = {
  findById,
  create,
  getPostsByUserId
};
