'use strict';
const player = require('../../models/characters/player');
const testItem = require('../../models/items/weapons/axe');

let inventory = {
  activeItems: [testItem],
  inactiveItems: []
};
function statIncrease () {
  if (inventory.activeItems[0] !== undefined) {
    player.hp += inventory.activeItems[0].hp;
    player.str = 10 + inventory.activeItems[0].str;
    player.int = 10 + inventory.activeItems[0].int;
    player.agi = 10 + inventory.activeItems[0].agi;
  }
}

module.exports = {
  inventory: inventory,
  statIncrease: statIncrease
};
