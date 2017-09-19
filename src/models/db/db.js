const pgp = require("pg-promise")();
const { Map } = require('immutable');
const config = require("../../config/config").getConfig();

const connectionObject = {
  host: config.get("db").host,
  port: config.get("db").port,
  database: config.get("db").name
};

const db = pgp(connectionObject);

module.exports = db;
