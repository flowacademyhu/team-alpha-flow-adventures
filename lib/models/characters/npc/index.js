'use strict';
const folder = './data/characters/npc/';
const fs = require('fs');
let npcs = fs.readdirSync(folder)
    .filter(file => file !== 'index.js')
    .map(file => require('./' + file));

module.exports = npcs;
