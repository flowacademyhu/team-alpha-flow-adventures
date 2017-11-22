'use strict';

const drunkenBeggar = require('../../../characters/npc/friendly/drunken-beggar');

module.exports = {
  desc: 'A kocsma ezen részében csak egy láthatóan részeg ' + '\x1b[32m' + 'koldus' + '\x1b[0m' +
  ' gubbaszt az egyik asztalnál.',
  deadNpcDesc: 'A kocsma ezen része üres, az asztalok között csak a legyek halk zümmögését hallod.',
  shortDesc: 'a távolban egy ház körvonalait látod. Egy kocsma.',
  npc: drunkenBeggar,
  item: null,
  accessible: true
};
