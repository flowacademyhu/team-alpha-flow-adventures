'use strict';

const gameArea = require('../../models/game-area/game-field/index');
const position = require('../../models/game-area/starter-position');
const output = require('../../views/output');

class Talk {
  run (npc, matrix) {
    this._npc = gameArea[matrix[position[1]][position[0]]].npc;
    this._npcName = npc;
    if (this._noOneIsHere()) return output('Nincs itt senki.');
    if (this._wrongTarget()) return output('Kihez beszélsz?');
    if (this._targetIsDead()) return output('A halottak nem beszélnek... Ebben a játékban.');
    output(this._npc.text);
  }

  _noOneIsHere () {
    return this._npc == null;
  }

  _wrongTarget () {
    return this._npc.name !== this._npcName;
  }

  _targetIsDead () {
    return this._npc.hp <= 0;
  }
}

let talkInstance = new Talk();
module.exports = talkInstance.run;
