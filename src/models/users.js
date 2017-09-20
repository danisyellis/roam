const db = require('./db/users.js');

const findByEmail = (email) => {
  return db.findByEmail(email);
};

const create = (email, password) => {
  return db.create(email, password);
};

module.exports = {
  findByEmail,
  create  
};
