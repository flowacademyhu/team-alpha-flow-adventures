'use strict';
// részeg koldus
const alcohol = require('../../../items/consumables/alcohol');

class DrunkenBeggar {
  constructor () {
    this.name = 'koldus';
    this.hp = 6;
    this.dmg = 6;
    this.def = 2;
    this.items = alcohol;
    this.aggro = false;
    this.text = 'HUKK... vannegykissapród?';
  }
}

module.exports = DrunkenBeggar;
