'use strict';

const coboldThief = require('../../../characters/npc/hostile/cobold-thief');

module.exports = {
  desc: 'Egy poros úton állsz, hirtelen eléd ugrik egy csúf ' +
  '<span class="hostile-npc interactables"> kobold </span>.',
  shortDesc: 'látsz egy utat. Az út mellett gyanús mozgást látsz a bokrok között.',
  deadNpcDesc: 'A poros úton egy halott kobold teteme hever.',
  npc: coboldThief,
  item: null,
  accessible: true
};
