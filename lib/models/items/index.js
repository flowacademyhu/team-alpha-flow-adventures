'use strict';
const item = '../items';
const directory = '../items';
const fs = require('fs');
let directories = fs.readdirSync(directory)
    .filter(dir => dir !== 'index.js');

let vegleges = [];

for (let i = 0; i < directories.length; i++) {
  let items = fs.readdirSync(item + directories[i])
        .map(file => require('./' + directories[i] + '/' + file))
        .map(obj => obj.name);
  vegleges = vegleges.concat.apply(vegleges, items);
}

console.log(vegleges);

module.exports = vegleges;

/* 'use strict';
const Item = require('../../../server/models/Item');

let items = Item.findAll();

module.exports = items; */
