'use strict';

const CoboldThief = require('../../../characters/npc/hostile/cobold-thief');

class RoadCoboldThief {
  constructor () {
    this.desc = 'Egy poros úton állsz, hirtelen eléd ugrik egy csúf ' +
    '<span class="hostile-npc interactables"> kobold </span>.';
    this.shortDesc = 'látsz egy utat. Az út mellett gyanús mozgást látsz a bokrok között.';
    this.deadNpcDesc = 'A poros úton egy halott kobold teteme hever.';
    this.npc = new CoboldThief();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = RoadCoboldThief;
