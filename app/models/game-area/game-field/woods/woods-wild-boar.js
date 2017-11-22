'use strict';

const wildBoar = require('../../../characters/npc/hostile/wild-boar');

module.exports = {
  desc: 'Az árnyas erdő sűrűjében megpillantasz egy ' + '\x1b[31m' + 'vadkan' + '\x1b[0m' +
  ' turkálni hangos röfögések közepette.',
  deadNpcDesc: 'Az árnyas erdő sűrűjében megpillantod egy vadkan tetemét.',
  shortDesc: 'az árnyékos erdőből röfögés hallatszik.',
  npc: wildBoar,
  item: null,
  accessible: true
};
