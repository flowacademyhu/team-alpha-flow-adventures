'use strict';

const drunkenWizard = require('../../../characters/npc/friendly/drunken-wizard');

module.exports = {
  desc: 'Az úton egy láthatóan illuminált állapotban lévő ' + '\x1b[32m' + 'varázsló' + '\x1b[0m' + ' botorkál. Beszélj vele.',
  deadNpcDesc: 'Az úton egy halott varázsló hever, testét a poros köpenye fedi.',
  shortDesc: 'egy köpenyes alak sziluettjét látod az úton.',
  npc: drunkenWizard,
  item: null,
  accessible: true
};
