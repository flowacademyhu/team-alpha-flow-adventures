const Gamefield = require('../models/gamefields');

module.exports = {
  index: (request, response) => {
    Gamefield.findAll()
    .then((gamefields) => response.render('gamefields/index', {Gamefield: Gamefield}))
    .catch((err) => response.render('errors/500', {error: err}));
  },
  show: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => response.render('gamefields/show', {Gamefield: Gamefield}))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  new: function (request, response) {
    response.render('gamefields/create');
  },

  create: (request, response) => {
    Gamefield.create(request.body)
    .then((Gamefield) => response.redirect('/gamefields/'))
    .catch((err) => response.render('errors/500', {error: err}));
  },

  edit: (request, response) => {
    Gamefield.findOne({id: request.params.id})
    .then((Gamefield) => response.render('gamefields/update', {Gamefield: Gamefield}))
    .catch((err) => response.render('errors/500', {error: err}));
  },

  update: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => Gamefield.update(request.body))
      .then((Gamefield) => response.redirect('/gamefields/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  delete: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => Gamefield.destroy())
      .then(() => response.redirect('/gamefields/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  count: (request, response) => {
    Gamefield.count()
      .then((Gamefield) => response.json({count: Gamefield}))
      .catch((err) => response.render('errors/500', {error: err}));
  }
};
