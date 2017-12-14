'use strict';

module.exports = function (gameObject) {
  let currentNpc = gameObject.map.matrixCurrentPosition.currentNpc;
  if (currentNpc !== null) {
    if (currentNpc.hp > 0) {
      return currentNpc.text;
    } else {
      return 'A halottak nem beszélnek... Ebben a játékban.';
    }
  } else {
    return 'Nincs itt senki.';
  }
};
