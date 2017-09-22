const db = require('./db/posts');

const getByUserId = function(userId) {
  return db.getByUserId(userId);
};

const getById = function(Id) {
  return db.getById(Id);
};

const getAuthor = function(userId) {
  return db.getNameFromUser(userId);
};

module.exports = {
  getByUserId,
  getById,
  getAuthor
};
