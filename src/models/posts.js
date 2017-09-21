const db = require('./db/posts');

const getByUserId = function(userId) {
  return db.getByUserId(userId);
};

const getById = function(Id) {
  return db.getById(Id);
};

module.exports = {
  getByUserId,
  getById
};
