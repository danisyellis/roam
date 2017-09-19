const Immutable = require('immutable');

module.exports = (() => {
  let config;

  const getEnv = () => {
    return process.env.NODE_ENV;
  };

  const makeConfig = () => {
    if (getEnv() === 'development') {
      require('dotenv').config({path: __dirname + "/../../.env"});
    }
    config = Immutable.Map({
      db: Immutable.Map({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
      }),
      server: Immutable.Map({
        port: process.env.PORT
      })
    });
  };

  makeConfig();

  const getConfig = () => {
    return config;
  };

  return {
    getConfig,
    getEnv
  };

})();
