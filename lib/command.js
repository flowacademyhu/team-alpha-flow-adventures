'use strict';

const movement = require('../app/controllers/actions/movement');
const place = require('../app/controllers/actions/place');
const rest = require('../app/controllers/actions/rest');
const talk = require('../app/controllers/actions/talk');
const attack = require('../app/controllers/actions/attack/attack');
const context = require('../app/models/game-state');
const pickUp = require('../app/controllers/actions/inventory-controll/pick-up');
const itemUsage = require('../app/controllers/actions/inventory-controll/item-usage');
const inventorySummary = require('../app/controllers/actions/inventory-controll/inventory-summary');
const help = require('../app/controllers/actions/help');
const pisti = require('../app/controllers/actions/pisti');

module.exports = function (splittedText, matrix) {
  switch (splittedText[0]) {
    case 'kilépés':
      context.gameState.quit = false;
      break;
    case 'menj':
      return movement(splittedText[1], matrix);
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
