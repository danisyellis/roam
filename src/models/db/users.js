const db = require("./db");

const findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT
      email
    FROM
      users
    WHERE email=$1
    `, email)
    .catch(error => console.log(error.message));
};


const create = (email, password) => {
  return db.query(`
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

module.exports = {
  findByEmail,
  create
}
