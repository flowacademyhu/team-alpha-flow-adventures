'use strict';
const hasiTasi = require('../../menu/inventory');
function itemDisplay (items) {
  return items.map(function (item) {
    return item.name;
  }).join(', ');
}

module.exports = function () {
  console.log('hasiTasi inaktív tartalma: ' + itemDisplay(hasiTasi.inventory.inactiveItems));
  console.log('hasiTasi aktív tartalma: ' + itemDisplay(hasiTasi.inventory.activeItems));
};
