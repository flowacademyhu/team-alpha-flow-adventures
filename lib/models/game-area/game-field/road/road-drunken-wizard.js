'use strict';

const DrunkenWizard = require('../../../characters/npc/friendly/drunken-wizard');

class RoadDrunkenWizard {
  constructor () {
    this.desc = 'Az úton egy láthatóan illuminált állapotban lévő ' +
    '<span class="friendly-npc interactables"> varázsló </span> botorkál. Beszélj vele.';
    this.deadNpcDesc = 'Az úton egy halott varázsló hever, testét a poros köpenye fedi.';
    this.shortDesc = 'egy köpenyes alak sziluettjét látod az úton.';
    this.npc = new DrunkenWizard();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = RoadDrunkenWizard;
