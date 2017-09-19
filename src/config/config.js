module.exports = (() => {
  let config = {};

  const getEnv = () => {
    return process.env.NODE_ENV;
  };

  const makeConfig = () => {
    if (getEnv() === 'development') {
      require('dotenv').config({path: __dirname + "/../../.env"});
    }
    config = {
      db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
      }
    };
    return config;
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
