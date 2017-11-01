const db = require('./db/users');

const findById = (id) => {
  return db.findById(id);
};

const findByEmail = (email) => {
  return db.findByEmail(email);
};

const create = (email, password) => {
  return db.create(email, password);
};

const getPostsByUserId = function(userId) {
  return db.getPostsByUserId(userId);
};

const updateProfile = function(name, currentCity, id, photo) {
  return db.update(name, currentCity, id, photo);
};

module.exports = {
  findById,
  create,
  getPostsByUserId,
  findByEmail,
  updateProfile
};
