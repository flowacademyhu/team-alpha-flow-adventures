require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.use(express.static('./public'));
app.use('/', router);
app.on('error', (err) => {
  console.log(err);
});
app.listen(3000);
