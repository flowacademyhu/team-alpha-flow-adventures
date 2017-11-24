require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const sequelize = require('./server/services/sequelize');

const app = express();

app.set('views', './server/views/');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.use(express.static('./server/public'));

app.get('/', function (req, res) {
  res.render('index');
});
app.get('/play', function (req, res) {
  res.render('play');
});

sequelize.init()
.then(() => app.listen(3000))
.catch(console.log);
