'use strict';

const knife = require('../../../items/weapons/knife');

class CoboldThief {
  constructor () {
    this.name = 'kobold';
    this.hp = 15;
    this.dmg = 8;
    this.def = 5;
    this.items = knife;
    this.aggro = true;
    this.text = 'Ugamaga-csumaga! Aggyá péz vagy élet!';
  }
}

module.exports = CoboldThief;
