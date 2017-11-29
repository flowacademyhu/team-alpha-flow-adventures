const Gamefield = require('../models/Gamefield');

module.exports = {
  index: (request, response) => {
    Gamefield.findAll()
    .then((Gamefields) => response.render('Gamefields/index', {Gamefields: Gamefields}))
    .catch((err) => response.render('errors/500', {error: err}));
  },
  show: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => response.render('Gamefields/show', {Gamefield: Gamefield}))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  new: function (request, response) {
    response.render('Gamefields/create');
  },

  create: (request, response) => {
    Gamefield.create(request.body)
    .then((Gamefield) => response.redirect('/Gamefields/'))
    .catch((err) => response.render('errors/500', {error: err}));
  },

  edit: (request, response) => {
    Gamefield.findOne({id: request.params.id})
    .then((Gamefield) => response.render('Gamefields/update', {Gamefield: Gamefield}))
    .catch((err) => response.render('errors/500', {error: err}));
  },

  update: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => Gamefield.update(request.body))
      .then((Gamefield) => response.redirect('/Gamefields/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  delete: (request, response) => {
    Gamefield.findById(request.params.id)
      .then((Gamefield) => Gamefield.destroy())
      .then(() => response.redirect('/Gamefields/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  count: (request, response) => {
    Gamefield.count()
      .then((Gamefield) => response.json({count: Gamefield}))
      .catch((err) => response.render('errors/500', {error: err}));
  }
};
