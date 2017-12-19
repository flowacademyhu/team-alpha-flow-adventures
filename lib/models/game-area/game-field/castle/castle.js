'use strict';

const Dragon = require('../../../characters/npc/hostile/dragon');

module.exports = {
  desc: 'A várat a <span class="friendly-npc interactables">sárkány </span>' +
  'morgása tölti be! Megpillantod ocsmány fizimiskáját a felhalmozott kincsek között, markában a szegény, enyhén megviselt királylánnyal!',
  deadNpcDesc: null,
  shortDesc: 'az öreg vártorony magasodik kapuja zárva, míg a kulcsot meg nem szerzed hozzá.',
  npc: new Dragon(),
  item: null,
  accessible: false
};
