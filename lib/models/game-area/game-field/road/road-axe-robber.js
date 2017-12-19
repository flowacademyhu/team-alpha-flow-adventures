'use strict';

const AxeRobber = require('../../../characters/npc/hostile/axe-robber');

module.exports = {
  desc: 'Az úton hirtelen elédugrik egy jól megtermett ' +
  '<span class="hostile-npc interactables"> haramia </span>, artikulálatlan motyogással követeli a pénzedet, vagy megsuhint a baltájával!',
  deadNpcDesc: 'Az út szélén a porban egy halott bandita fekszik, ő már senki pénzét sem veszi el.',
  shortDesc: 'poros út húzódik. Az útszéli bokrok gyanúsan mozognak, és néha fémes csillogás szikrázik a lavalak közül.',
  npc: new AxeRobber(),
  item: null,
  accessible: true
};
