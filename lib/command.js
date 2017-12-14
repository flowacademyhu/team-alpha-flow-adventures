'use strict';

const movement = require('../lib/controllers/actions/movement');
const place = require('../lib/controllers/actions/place');
const rest = require('../lib/controllers/actions/rest');
const talk = require('../lib/controllers/actions/talk');
const attack = require('../lib/controllers/actions/attack/attack');
const context = require('../lib/models/game-state');
const pickUp = require('../lib/controllers/actions/inventory-controll/pick-up');
const itemUsage = require('../lib/controllers/actions/inventory-controll/item-usage');
const inventorySummary = require('../lib/controllers/actions/inventory-controll/inventory-summary');
const help = require('../lib/controllers/actions/help');
const pisti = require('../lib/controllers/actions/pisti');

module.exports = function (splittedText, matrix) {
  switch (splittedText[0]) {
    case 'kilépés':
      context.gameState.quit = false;
      break;
    case 'menj':
      movement(splittedText[1], matrix);
      break;
    case 'beszélj':
      talk(splittedText[1], matrix);
      break;
    case 'támadj':
      attack(splittedText[1], matrix);
      break;
    case 'helyem':
      place(matrix);
      break;
    case 'segíts':
      help();
      break;
    case 'gyógyulj':
      rest(splittedText[1]);
      break;
    case 'felvesz':
      pickUp(splittedText[1], matrix);
      break;
    case 'használj':
      itemUsage(splittedText[1]);
      break;
    case 'hasiTasi':
      inventorySummary();
      break;
    case 'Pisti':
      pisti();
      break;
    default:
      console.log('Tanulj meg magyarul!');
  }
};
