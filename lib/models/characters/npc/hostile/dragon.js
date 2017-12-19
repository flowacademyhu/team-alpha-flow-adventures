'use strict';

const kincs = require('../../../items/misc/tresure');

class Dragon {
  constructor () {
    this.name = 'sárkány';
    this.hp = 25;
    this.dmg = 10;
    this.def = 5;
    this.items = kincs;
    this.aggro = true;
    this.text = 'GRAARGGRGRAAARARAGGRRAAAA... KHHM-KHMMM... Bocsánat, csak egy hajszál szaladt a torkomra. De azért most megeszlek!';
  }
}

module.exports = Dragon;
