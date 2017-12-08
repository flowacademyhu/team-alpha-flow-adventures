'use strict';

const gameArea = require('../../../models/game-area/game-field/index');
const position = require('../../../models/game-area/starter-position');
const hasiTasi = require('../../menu/inventory');
const castle = require('../../../models/game-area/game-field/castle/castle');
const output = require('../../../views/output');

class PickUp {
  pickUp (item, matrix) {
    this._position = gameArea[matrix[position[1]][position[0]]];
    if (this._isItemExisting() && this._isKey()) {
      this._pickUpGameWinItem(item);
    } else {
      this._tryToPickUp(item);
    }
  }

  _isItemExisting () {
    return this._position.item !== null;
  }

  _isKey () {
    return this._position.item.name === 'kulcs';
  }

  _currentNpc () {
    return this._position.npc;
  }

  _pickUpGameWinItem (item) {
    hasiTasi.inventory.inactiveItems.push(this._position.item);
    castle.accessible = true;
    output('A(z) ' + item + ' bekerült a hasiTasiba. Mostmár bejuthatsz a várba. Nosza!');
  }

  _pickUpItem () {
    hasiTasi.inventory.inactiveItems.push(this._currentNpc().items);
  }

  _isValidItem (item) {
    return item === this._currentNpc().items.name;
  }

  _isNpcAlive () {
    return this._currentNpc().hp > 0;
  }

  _findItem (item) {
    if (this._isValidItem(item)) {
      this._pickUpItem();
      output('A(z) ' + item + ' bekerült a hasiTasiba.');
    } else {
      output('Nem találom sehol... Biztos jó tárgynevet írtál be?');
    }
  }

  _tryToPickUp (item) {
    if (this._isNpcAlive() && this._isValidItem(item)) {
      output('A(z) ' + this._currentNpc().name + ' nem hagyja hogy elvedd tőle!');
    } else {
      this._findItem();
    }
  }
}

let pickUpInstance = new PickUp();
module.exports = pickUpInstance.pickUp;
