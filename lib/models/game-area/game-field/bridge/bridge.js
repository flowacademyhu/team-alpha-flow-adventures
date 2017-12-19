'use strict';

class Bridge {
  constructor () {
    this.desc = 'Egy omladozó kőhídon állsz, két oldalt egy vad folyó vize folyik.';
    this.deadNpcDesc = null;
    this.shortDesc = 'látsz egy hidat.';
    this.npc = null;
    this.item = null;
    this.accessible = true;
  }
}

module.exports = Bridge;
