'use strict';

const WildBoar = require('../../../characters/npc/hostile/wild-boar');

class WoodsWildBoar {
  constructor () {
    this.desc = 'Az árnyas erdő sűrűjében megpillantasz egy ' +
    '<span class="hostile-npc interactables"> vadkan </span> turkálni hangos röfögések közepette.';
    this.deadNpcDesc = 'Az árnyas erdő sűrűjében megpillantod egy vadkan tetemét.';
    this.shortDesc = 'az árnyékos erdőből röfögés hallatszik.';
    this.npc = new WildBoar();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = WoodsWildBoar;
