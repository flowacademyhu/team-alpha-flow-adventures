'use strict';

const gameArea = require('../../../models/game-area/game-field/index');
const position = require('../../../models/game-area/starter-position');
const player = require('../../../models/characters/player');
const random = require('./random/random');
const output = require('../../../views/output');

let combatRoundCounter = 1;
let targetNpc;
let playerRandomRoll;
let npcRandomRoll;
let playerDamage;
let npcDamage;

class Combat {
  _isDeadandHasItem () {
    return targetNpc.items !== null && targetNpc.hp <= 0;
  }

  _deadNpcOutput () {
    output('A(z) ' + targetNpc.name + ' meghalt. Elejtette a(z) <span class=useable-items interactables">' +
    targetNpc.items.name + '</span>-t');
    output('--------------------------------------');
  }

  isNonExistentAttackTarget (npc) {
    return npc === undefined || npc !== targetNpc.name;
  }

  _combatDiceRoll () {
    playerRandomRoll = random(1, 6);
    npcRandomRoll = random(1, 6);
  }

  _isDeadNpc () {
    return targetNpc !== null && targetNpc.hp < 1;
  }

  _checkValidTargetName (npc, matrix) {
    return gameArea[matrix[position[1]][position[0]]].npc.name === npc;
  }

  _combatContestantsAlive () {
    return targetNpc.hp > 0 && player.hp > 0;
  }

  _getContestantsDamage () {
    playerDamage = (player.dmg + playerRandomRoll) - targetNpc.def;
    npcDamage = (targetNpc.dmg + npcRandomRoll) - player.def;
  }

  _checkValidDamage (npcDamage, playerDamage) {
    (playerDamage >= 0) ? targetNpc.hp -= playerDamage : targetNpc.hp -= 0;
    (npcDamage >= 0) ? player.hp -= npcDamage : player.hp -= 0;
  }

  _combatTextOutput () {
    output('Megtámadtad a ' + targetNpc.name + '-t ' + (playerDamage) + ' sebzéssel');
    output('Megtámadott a ' + targetNpc.name + ' ' + (npcDamage) + ' sebzéssel');
    output('--------------------------------------');
    output('Jelenlegi életerőd ' + player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp);
  }

  _combatRoundMethodWrapper () {
    this._combatDiceRoll();
    output(combatRoundCounter + '. kör');
    combatRoundCounter++;
    this._getContestantsDamage();
    this._combatTextOutput();
  }
  _NotvalidAttackTarget () {
    if (this._nonExistentAttackTarget()) {
      output('Kit?');
    }
    if (this._isDeadNpc()) {
      output('A(z) ' + targetNpc.name + ' halott, nincs kivel harcolnod.');
    }
  }

  _activeCombat () {
    while (this.combatContestantsAlive()) {
      this.combatRoundMethodWrapper();
    }
  }

  _itemDropHandler () {
    if (this.isDeadandHasItem()) {
      this.deadNpcOutput();
    }
  }

  validOnFieldTarget (npc, matrix) {
    if (!this.isDeadNpc()) {
      this._checkValidTargetName(npc, matrix);
    }
  }

/* --------------------------- */
  run (npc, matrix) {
    this.npc = npc;
    this.matrix = matrix;
    this.targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
    this.NotvalidAttackTarget();
    if (this.validOnFieldTarget(npc, matrix)) {
      this._activeCombat();
      this._itemDropHandler();
    }
  }
}
module.exports = Combat.run;
