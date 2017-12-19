'use strict';

const WildBoar = require('../../../characters/npc/hostile/wild-boar');

module.exports = {
  desc: 'Az árnyas erdő sűrűjében megpillantasz egy ' +
  '<span class="hostile-npc interactables"> vadkan </span> turkálni hangos röfögések közepette.',
  deadNpcDesc: 'Az árnyas erdő sűrűjében megpillantod egy vadkan tetemét.',
  shortDesc: 'az árnyékos erdőből röfögés hallatszik.',
  npc: new WildBoar(),
  item: null,
  accessible: true
};
