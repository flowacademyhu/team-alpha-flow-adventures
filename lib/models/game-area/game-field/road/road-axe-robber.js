'use strict';

const AxeRobber = require('../../../characters/npc/hostile/axe-robber');

class RoadAxeRobber {
  constructor () {
    this.desc = 'Az úton hirtelen elédugrik egy jól megtermett ' +
    '<span class="hostile-npc interactables"> haramia </span>, artikulálatlan motyogással követeli a pénzedet, vagy megsuhint a baltájával!';
    this.deadNpcDesc = 'Az út szélén a porban egy halott bandita fekszik, ő már senki pénzét sem veszi el.';
    this.shortDesc = 'poros út húzódik. Az útszéli bokrok gyanúsan mozognak, és néha fémes csillogás szikrázik a lavalak közül.';
    this.npc = new AxeRobber();
    this.item = null;
    this.accessible = true;
  }
}

module.exports = RoadAxeRobber;
