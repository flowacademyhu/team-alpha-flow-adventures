'use strict';

const axe = require('../../../items/weapons/axe');

class AxeRobber {
  constructor () {
    this.name = 'haramia';
    this.hp = 15;
    this.dmg = 5;
    this.def = 3;
    this.items = axe;
    this.aggro = true;
    this.text = 'Azottan mani a zsebödben komám? Csengessed ide vagy kapol maflást!';
  }
}

module.exports = AxeRobber;
