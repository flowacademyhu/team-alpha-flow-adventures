'use strict';

class Cave {
  constructor () {
    this.desc = 'A barlang nyirkos, hűvös félhomályában botorkálsz. Csak a cseppkövek ritmusos csepegése töri meg a csendet.';
    this.deadNpcDesc = null;
    this.shortDesc = ' egy barlang sötétjét látod.';
    this.npc = null;
    this.item = null;
    this.accessible = true;
  }
}

module.exports = Cave;
