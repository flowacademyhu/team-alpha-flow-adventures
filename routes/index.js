const express = require('express');
const router = express();
const api = require('./api');

router.use('/api', api);
router.set('views', './views/');

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/play', function (req, res) {
  res.render('play');
});

module.exports = router;
