const db = require("./db");

const createUser = function(email, password){
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

createUser("d@d.com", "sosecret");
