'use strict';

module.exports = function (gameObject, inValue) {
  let player = gameObject.player;
  let round = gameObject.round;
  const maxPlayerHp = 30;

  let restedRounds = parseInt(inValue);

  if (player.hp === maxPlayerHp) return 'Így is teljesen egészséges vagy.';
  if (player.hp + restedRounds > maxPlayerHp) return `Nem gyógyulhatsz maximális életerő ${maxPlayerHp} fölé.`;
  player.hp += restedRounds;
  for (let i = 0; i < restedRounds; i++) {
    round.counter();
  }
  return `Gyógyultál ${restedRounds} életerőt`;
};
