const db = require('./db/users.js');

const findById = (id) => {
  return db.findById(id);
};

const create = (email, password) => {
  return db.create(email, password);
};

const getPostsByUserId = function(userId) {
  return db.getPostsByUserId(userId);
};

module.exports = {
  findById,
  create,
  getPostsByUserId
};
