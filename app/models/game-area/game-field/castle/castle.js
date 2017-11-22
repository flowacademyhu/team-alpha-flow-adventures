'use strict';

const dragon = require('../../../characters/npc/hostile/dragon');

module.exports = {
  desc: 'A várat a ' + '\x1b[31m' + 'sárkány' + '\x1b[0m' + ' morgása tölti be! Megpillantod ocsmány fizimiskáját a felhalmozott kincsek között, markában a szegény, enyhén megviselt királylánnyal!',
  deadNpcDesc: null,
  shortDesc: 'az öreg vártorony magasodik kapuja zárva, míg a kulcsot meg nem szerzed hozzá.',
  npc: dragon,
  item: null,
  accessible: false
};
