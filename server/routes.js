const npcsControllers = require('./controllers/npcs');

const express = require('express');
const router = express.Router();

router.get('/npcs', npcsControllers.index);

router.get('/npcs/new', npcsControllers.new);

router.get('/npcs/:id', npcsControllers.show);

router.post('/npcs', npcsControllers.create);

router.get('/npcs/:id/edit', npcsControllers.edit);

router.put('/npcs/:id', npcsControllers.update);

router.delete('/npcs/:id', npcsControllers.delete);

router.get('/npcs/count', npcsControllers.count);

module.exports = router;
