const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const app = express();
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const config = require('./config/config.js').getConfig();

app.use(morgan("dev"));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//pug needs a basedir or else it won't work
app.locals.basedir = path.join(__dirname, '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use((request, response, next) => {
  response.locals.query = '';
  response.locals.isLoggedIn = false;
  next()
});

app.use(session({
  store: new pgSession({
    conString: `postgres://${config.getIn(["db", "host"])}:${config.getIn(["db", "port"])}/${config.getIn(["db", "name"])}`
  }),
  secret: config.get("server").get("secret"),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1 * 24 * 60 * 60 * 1000}
}));

app.use('/', routes);

app.use((request, response) => {
  response.status(404).send("That page wasn't found");
});

const port = config.get("server").get("port");
app.listen(port, console.log(`I'm listening on port${port}`));
