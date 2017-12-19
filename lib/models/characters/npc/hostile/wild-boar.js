'use strict';

const sharpTusk = require('../../../items/weapons/sharp-tusk');

class WildBoar {
  constructor () {
    this.name = 'vadkan';
    this.hp = 15;
    this.dmg = 4;
    this.def = 2;
    this.items = sharpTusk;
    this.aggro = true;
    this.text = 'Röff-röff uííí-uííí... RÖFF!';
  }
}

module.exports = WildBoar;
