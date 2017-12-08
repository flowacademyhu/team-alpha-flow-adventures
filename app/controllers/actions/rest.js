'use strict';

const player = require('../../models/characters/player');
const gameRound = require('../../../lib/game-round');
const output = require('../../views/output');
const playerMaxHealth = 30;

class Rest {
  run (inValue) {
    this.value = parseInt(inValue);
    if (this._isRestable()) {
      this._tryToHeal();
    }
  }

  _wrongValue () {
    if (isNaN(this.value)) {
      output('Add meg egy számmal, hogy mennyit szeretnél gyógyulni.');
      return true;
    } else {
      this._valueIsNegative();
    }
  }

  _valueIsNegative () {
    if (this.value < 0) {
      output('Naaaa, nem bánthatod magad csak úgy.');
      return true;
    } else {
      this._valueIsNull();
    }
  }

  _valueIsNull () {
    if (this.value === 0) {
      output('Ennek te sem látod értelmét remélem.');
      return true;
    }
  }

  _playerIsHealthy () {
    if (player.hp === playerMaxHealth) {
      output('Teljesen egészséges vagy.');
    } else {
      output(`Ahhoz, hogy teljesen egészséges legyél (${playerMaxHealth - player.hp})-t kell gyógyulnod.`);
    }
  }

  _isRestable () {
    return player.hp <= playerMaxHealth && !this._wrongValue();
  }

  _isOverHealed () {
    return player.hp + this.value > playerMaxHealth;
  }

  _tryToHeal () {
    if (this._isOverHealed()) {
      output(`Nem tudsz a maximális életerő (${playerMaxHealth}) fölé gyógyulni.`);
      this._playerIsHealthy();
    } else {
      this._healing();
    }
  }

  _healing () {
    player.hp += this.value;
    output(this.value + '-t gyógyultál. A jelenlegi életerőd: ', player.hp);
    for (let i = 1; i < this.value; i++) {
      gameRound.counter();
    }
  }
}

let restInstance = new Rest();
module.exports = restInstance.run;
