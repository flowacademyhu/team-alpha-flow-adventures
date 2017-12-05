'use strict';

const signTable = require('../../../characters/npc/friendly/sign-table');

module.exports = {
  desc: 'Egy poros úton állsz. Előtted egy kopott ' +
  '<span class="useable-items interactables"> tábla </span>.',
  shortDesc: 'látsz egy utat. Az úton egy távoli tábla áll magányosan.',
  deadNpcDesc: null,
  npc: signTable,
  item: null,
  accessible: true
};
