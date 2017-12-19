'use strict';

const InnKeeper = require('../../../characters/npc/friendly/innkeeper');

class Hall {
  constructor () {
    this.desc = 'A kocsma ezen része üres, csak a ' +
    '<span class="friendly-npc interactables"> kocsmáros </span> törölget egy poharat a pult mögött.';
    this.deadNpcDesc = 'A kocsma ezen résza üres, a pult mögött sem áll senki, csak a legyek halk zümmögését hallod.';
    this.shortDesc = 'a távolban egy ház körvonalait látod. Egy kocsma.';
    this.npc = new InnKeeper();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = Hall;
