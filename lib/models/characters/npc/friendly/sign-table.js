'use strict';

class SignTable {
  constructor () {
    this.name = 'tábla';
    this.hp = 1;
    this.dmg = 0;
    this.def = 20;
    this.items = null;
    this.aggro = false;
    this.text = 'A poros viseletes táblán a következő olvasható: VIGYÁZAT! Ne mennyé északra, mert szörnyű kobold barlanghoz fogsz érni!';
  }
}

module.exports = SignTable;
