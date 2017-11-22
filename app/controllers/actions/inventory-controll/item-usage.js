'use strict';
const inventory = require('../../menu/inventory');

module.exports = function (targetItem) {
  for (let i = 0; i < inventory.inventory.inactiveItems.length; i++) {
    if (inventory.inventory.inactiveItems[i].name === targetItem) {
      inventory.inventory.activeItems[0] = inventory.inventory.inactiveItems[i];
      inventory.statIncrease();
      console.log('Mostantól használod a(z) ' + targetItem + '-t.');
    }
  }
  if (inventory.inventory.activeItems[0].name !== targetItem) {
    console.log('A hasiTasiban nincs ilyen tárgy. :(');
  }
};
  