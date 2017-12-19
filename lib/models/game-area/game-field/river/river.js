'use strict';

class River {
  constructor () {
    this.desc = 'A környék legszebb, legtisztább vizű folyója, nem közelítheted meg.';
    this.deadNpcDesc = null;
    this.shortDesc = 'egy folyó zúgása hallik.';
    this.npc = null;
    this.item = null;
    this.accessible = false;
  }
}

module.exports = River;
