'use strict';

const DrunkenBeggar = require('../../../characters/npc/friendly/drunken-beggar');

module.exports = {
  desc: 'A kocsma ezen részében csak egy láthatóan részeg ' +
  '<span class="friendly-npc interactables"> koldus </span>' +
  ' gubbaszt az egyik asztalnál.',
  deadNpcDesc: 'A kocsma ezen része üres, az asztalok között csak a legyek halk zümmögését hallod.',
  shortDesc: 'a távolban egy ház körvonalait látod. Egy kocsma.',
  npc: new DrunkenBeggar(),
  item: null,
  accessible: true
};
