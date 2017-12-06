'use strict';

const player = require('../../models/characters/player');
const gameRound = require('../../../lib/game-round');
const output = require('../../views/output');
const playerMaxHealth = 30;

class Rest {
  wrongValue () {
    if (isNaN(this.value)) {
      output('Add meg egy számmal, hogy mennyit szeretnél gyógyulni.');
      return true;
    } else {
      this.valueIsNegative();
    }
  }

  valueIsNegative () {
    if (this.value < 0) {
      output('Naaaa, nem bánthatod magad csak úgy.');
      return true;
    } else {
      this.valueIsNull();
    }
  }

  valueIsNull () {
    if (this.value === 0) {
      output('Ennek te sem látod értelmét remélem.');
      return true;
    }
  }

  playerIsHealthy () {
    if (player.hp === playerMaxHealth) {
      output('Teljesen egészséges vagy.');
    } else {
      output(`Ahhoz, hogy teljesen egészséges legyél (${playerMaxHealth - player.hp})-t kell gyógyulnod.`);
    }
  }

  isRestable () {
    return player.hp <= playerMaxHealth && !this.wrongValue();
  }

  isOverHealed () {
    return player.hp + this.value > playerMaxHealth;
  }

  tryToHeal () {
    if (this.isOverHealed()) {
      output(`Nem tudsz a maximális életerő (${playerMaxHealth}) fölé gyógyulni.`);
      this.playerIsHealthy();
    } else {
      this.healing();
    }
  }

  healing () {
    player.hp += this.value;
    output(this.value + '-t gyógyultál. A jelenlegi életerőd: ', player.hp);
    for (let i = 1; i < this.value; i++) {
      gameRound.counter();
    }
  }

  run (inValue) {
    this.value = parseInt(inValue);
    if (this.isRestable()) {
      this.tryToHeal();
    }
  }
}

let restInstance = new Rest();
module.exports = restInstance.run;
