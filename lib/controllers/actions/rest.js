'use strict';

module.exports = function (gameObject, inValue) {
  let player = gameObject.player;
  let round = gameObject.round;
  const maxPlayerHp = 30;

  let restedRounds = parseInt(inValue);

  if (player.hp === maxPlayerHp) {
    gameObject.otherMessage = 'Így is teljesen egészséges vagy.';
    return gameObject;
  }
  if (player.hp + restedRounds > maxPlayerHp) {
    gameObject.otherMessage = `Nem gyógyulhatsz maximális életerő ${maxPlayerHp} fölé.`;
    return gameObject;
  }
  player.hp += restedRounds;
  for (let i = 0; i < restedRounds; i++) {
    gameObject.round++;
  }
  gameObject.otherMessage = `Gyógyultál ${restedRounds} életerőt`;
  return gameObject;
};
