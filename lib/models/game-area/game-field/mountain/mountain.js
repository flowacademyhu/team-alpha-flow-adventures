'use strict';

class Mountain {
  constructor () {
    this.desc = 'Felmásztál a magas hegy tetejére.';
    this.deadNpcDesc = null;
    this.shortDesc = ' egy magas hegy meredek sziklafalát látod.';
    this.npc = null;
    this.item = null;
    this.accessible = false;
  }
}

module.exports = Mountain;
