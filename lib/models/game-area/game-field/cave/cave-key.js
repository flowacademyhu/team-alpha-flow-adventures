'use strict';

const key = require('../../../items/misc/key');

class CaveKey {
  constructor () {
    this.desc = 'A barlang nyirkos hűvös félhomályában botorkálsz. A földön megpillantasz egy csillogó ' +
   ' <span class="useable-items interactables"> kulcs </span> ot.';
    this.deadNpcDesc = null;
    this.shortDesc = ' egy barlang sötétjét látod. A földön valami halványan csillog a távolban.';
    this.npc = null;
    this.item = key;
    this.accessible = true;
  }
}

module.exports = CaveKey;
