const db = require('./db/cities');

const getAll = () => {
  return db.getAll();
};

const findById = (id) => {
  return db.findById(id);
};

const getPostsByCityId = (id) => {
  return db.getPostsByCityId(id);
};

module.exports = {
  getAll,
  findById,
  getPostsByCityId
};
