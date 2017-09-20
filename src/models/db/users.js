const db = require("./db");

const findById = (id) => {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE id=$1
    `, id)
    .catch(error => {
      console.error(error.message);
      throw error;
    });
  };

const findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE email=$1
    `, email)
  .catch(error => {
    console.error(error.message);
    throw error;
  });
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
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

const getPostsByUserId = function(userId) {
  return db.any(`
    SELECT * FROM posts
    WHERE user_id = $1
    `, userId)
  .catch(error => {
    console.error(error.message);
    throw error;
  });
};

module.exports = {
  findById,
  create,
  getPostsByUserId,
  findByEmail
};
