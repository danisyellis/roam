const db = require('./db/posts');

const getByUserId = function(userId) {
  return db.getByUserId(userId);
};

module.exports = {
  getByUserId
};
