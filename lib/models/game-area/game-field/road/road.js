'use strict';

class Road {
  constructor () {
    this.desc = 'Egy poros úton állsz.';
    this.shortDesc = 'látsz egy utat.';
    this.deadNpcDesc = null;
    this.npc = null;
    this.item = null;
    this.accessible = true;
  }
}

module.exports = Road;
