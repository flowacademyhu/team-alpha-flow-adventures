'use strict';

const SignTable = require('../../../characters/npc/friendly/sign-table');

class RoadSignTable {
  constructor () {
    this.desc = 'Egy poros úton állsz. Előtted egy kopott ' +
    '<span class="useable-items interactables"> tábla </span>.';
    this.shortDesc = 'látsz egy utat. Az úton egy távoli tábla áll magányosan.';
    this.deadNpcDesc = null;
    this.npc = new SignTable();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = RoadSignTable;
