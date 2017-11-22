'use strict';

const axeRobber = require('../../../characters/npc/hostile/axe-robber');

module.exports = {
  desc: 'Az úton hirtelen elédugrik egy jól megtermett ' + '\x1b[31m' + 'haramia' + '\x1b[0m' +
  ', artikulálatlan motyogással követeli a pénzedet, vagy megsuhint a baltájával!',
  deadNpcDesc: 'Az út szélén a porban egy halott bandita fekszik, ő már senki pénzét sem veszi el.',
  shortDesc: 'poros út húzódik. Az útszéli bokrok gyanúsan mozognak, és néha fémes csillogás szikrázik a lavalak közül.',
  npc: axeRobber,
  item: null,
  accessible: true
};
