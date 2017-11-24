const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('views', './views/');
app.set('view engine', 'hbs');
app.engine('hbs', require('hbs').__express);
app.use(express.static('public'));


app.get('/', function(req, res){
  res.render('index');
});
app.get('/play', function(req, res){
  res.render('play');
});


app.listen(3000);