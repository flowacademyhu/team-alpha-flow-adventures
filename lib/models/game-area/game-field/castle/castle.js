'use strict';

const Dragon = require('../../../characters/npc/hostile/dragon');

class Castle {
  constructor () {
    this.desc = 'A várat a <span class="friendly-npc interactables">sárkány </span>' +
      'morgása tölti be! Megpillantod ocsmány fizimiskáját a felhalmozott kincsek között, markában a szegény, enyhén megviselt királylánnyal!';
    this.deadNpcDesc = null;
    this.shortDesc = 'az öreg vártorony magasodik kapuja zárva, míg a kulcsot meg nem szerzed hozzá.';
    this.npc = new Dragon();
    this.item = null;
    this.accessible = false;
  }
}

module.exports = Castle;
