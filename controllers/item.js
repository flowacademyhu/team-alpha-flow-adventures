const Item = require('../models/Item');

module.exports = {
  index: function (request, response) {
    Item.findAll()
      .then((items) => response.render('items/index', {items: items}))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  show: function (request, response) {
    Item.findById(request.params.id)
      .then((item) => response.render('items/show', {item: item}))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  new: function (request, response) {
    response.render('items/new');
  },

  create: function (request, response) {
    Item.create(request.body)
      .then(() => response.redirect('/items'))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  edit: function (request, response) {
    Item.findById(request.params.id)
      .then((item) => response.render('items/edit', {item: item}))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  update: function (request, response) {
    Item.findById(request.params.id)
      .then((item) => item.update(request.body))
      .then(() => response.redirect('/items/' + request.params.id))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  delete: function (request, response) {
    Item.findById(request.params.id)
      .then((item) => item.destroy())
      .then(() => response.redirect('/items'))
      .catch((error) => response.render('errors/500', {error: error}));
  },

  count: function (request, response) {
    Item.count()
      .then((items) => response.json({count: items}))
      .catch((error) => response.render('errors/500', {error: error}));
  }
};
