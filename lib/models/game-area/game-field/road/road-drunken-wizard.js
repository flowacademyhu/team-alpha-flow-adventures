'use strict';

const DrunkenWizard = require('../../../characters/npc/friendly/drunken-wizard');

module.exports = {
  desc: 'Az úton egy láthatóan illuminált állapotban lévő ' +
  '<span class="friendly-npc interactables"> varázsló </span> botorkál. Beszélj vele.',
  deadNpcDesc: 'Az úton egy halott varázsló hever, testét a poros köpenye fedi.',
  shortDesc: 'egy köpenyes alak sziluettjét látod az úton.',
  npc: new DrunkenWizard(),
  item: null,
  accessible: true
};
