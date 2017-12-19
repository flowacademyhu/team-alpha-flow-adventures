'use strict';

const DrunkenBeggar = require('../../../characters/npc/friendly/drunken-beggar');

class Borthel {
  constructor () {
    this.desc = 'A kocsma ezen részében csak egy láthatóan részeg ' +
      '<span class="friendly-npc interactables"> koldus </span>' +
      ' gubbaszt az egyik asztalnál.';
    this.deadNpcDesc = 'A kocsma ezen része üres, az asztalok között csak a legyek halk zümmögését hallod.';
    this.shortDesc = 'a távolban egy ház körvonalait látod. Egy kocsma.';
    this.npc = new DrunkenBeggar();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = Borthel;
