require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const sequelize = require('./server/services/sequelize');
const Context = require('./server/models/context');

const router = require('./server/routes');

const app = express();

app.set('views', './server/views/');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.use(express.static('./server/public'));

app.get('/', function (req, res) {
  res.render('index');
});
app.get('/play', function (req, res) {
  /* let cookies = {
    context_id: 35
  };
  let context = Context.findById(cookies.context_id);
  let gameAreaInstance = context.getCurrentGameAreaInstance();
  let gameArea = gameAreaInstance.getGameArea();
  let gameField = gameArea.getGameField();
  let gameFieldDescription = gameField.description;
  res.render('play', {description: gameFieldDescription}); */
  res.render('play');
});
app.use('/', router);

sequelize.init()
.then(() => app.listen(3000))
.catch(console.log);
