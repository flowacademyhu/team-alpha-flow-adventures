'use strict';

const coboldThief = require('../../../characters/npc/hostile/cobold-thief');

module.exports = {
  desc: 'Egy poros úton állsz, hirtelen eléd ugrik egy csúf ' + '\x1b[31m' + 'kobold' + '\x1b[0m' + '.',
  shortDesc: 'látsz egy utat. Az út mellett gyanús mozgást látsz a bokrok között.',
  deadNpcDesc: 'A poros úton egy halott kobold teteme hever.',
  npc: coboldThief,
  item: null,
  accessible: true
};
