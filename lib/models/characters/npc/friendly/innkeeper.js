'use strict';
// kocsmáros
const coffee = require('../../../items/consumables/coffee');

class Innkeeper {
  constructor () {
    this.name = 'kocsmáros';
    this.hp = 20;
    this.dmg = 7;
    this.def = 4;
    this.items = coffee;
    this.aggro = false;
    this.text = 'Mivel szolgálhatok kalador? Csak nem a királylány kiszabadítására érkeztél? A sárkány tartja fogva a vártoronyban innen északkeletre.';
  }
}

module.exports = Innkeeper;
