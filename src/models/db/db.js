const pgp = require("pg-promise")();
const { Map } = require('immutable');
const config = require("../../config/config").getConfig();

const connectionObject = {
  host: config.get("db").get("host"),
  port: config.get("db").get("port"),
  database: config.get("db").get("name")
};

//where I got the error-checking code https://stackoverflow.com/questions/36120435/verify-database-connection-with-pg-promise-when-starting-an-app

const db = pgp(connectionObject);
//const db = pgp('postgresql://userName:password@host:port/database');


//check to see if we can connect to the db. If not, catch an error
db.connect()
    .then(obj => {
        console.log("db is connected");
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });

module.exports = db;
