const Npc = require('../models/Npc');

module.exports = {
  index: (request, response) => {
    Npc.findAll()
      .then((npcs) => response.render('npc/index', {npcs: npcs}))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  show: (request, response) => {
    Npc.findById(request.params.id)
      .then((npc) => response.render('npc/show', {npc: npc}))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  new: (request, response) => {
    response.render('npc/new');
  },

  create: (request, response) => {
    Npc.create(request.body)
      .then(() => response.redirect('/npcs/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  edit: (request, response) => {
    Npc.findById(request.params.id)
      .then((npc) => response.render('npc/edit', {npc: npc}))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  update: (request, response) => {
    Npc.findById(request.params.id)
      .then((npc) => npc.update(request.body))
      .then(() => response.redirect('/npcs/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  delete: (request, response) => {
    console.log({id: request.params.id});
    Npc.findById(request.params.id)
      .then((npc) => npc.destroy())
      .then(() => response.redirect('/npcs/'))
      .catch((err) => response.render('errors/500', {error: err}));
  },

  count: (request, response) => {
    Npc.count()
      .then((npcs) => response.json({count: npcs}))
      .catch((err) => response.render('errors/500', {error: err}));
  }
};
