require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const router = require('./server/routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.use(express.static('./server/public'));
app.use('/', router);
app.listen(3000);
