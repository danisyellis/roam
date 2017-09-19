const pgp = require("pg-promise")();
const config = require("../../config/config").getConfig();

const connectionObject = {
  host: config.db.host,
  port: config.db.port,
  database: config.db.name
};

const db = pgp(connectionObject);

module.exports = db;
