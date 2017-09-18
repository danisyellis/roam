const express = require("express");
const bodyParser = require('body-parser');
// const routes = require('./server/routes');
const app = express();
const morgan = require('morgan');

app.use(morgan("dev"));

app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', routes);

app.use((request, response) => {
  response.status(404).send("That page wasn't found");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`I'm listening on port ${port}`));
