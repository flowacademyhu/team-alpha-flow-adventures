console.log('halihó');

let newGameButton = document.querySelector('.new-game');
let moveNorthButton = document.querySelector('.move-north');
let moveWestButton = document.querySelector('.move-west');
let moveEastButton = document.querySelector('.move-east');
let moveSouthButton = document.querySelector('.move-south');

let warningMessage = document.querySelector('.warning');
let playerHealthDisplay = document.querySelector('.player-health-display');
let playerDamageDisplay = document.querySelector('.player-attack-display');
let playerDefenseDisplay = document.querySelector('.player-defense-display');

let currentFieldDescription = document.querySelector('.field-desc');
let northDescription = document.querySelector('.north-desc');
let westDescription = document.querySelector('.west-desc');
let eastDescription = document.querySelector('.east-desc');
let southDescription = document.querySelector('.south-desc');

let northMovement = document.querySelector('.move-north');
let westMovement = document.querySelector('.move-west');
let eastMovement = document.querySelector('.move-east');
let southMovement = document.querySelector('.move-south');

function currentLocationDisplay (gameObject) {
  console.log(gameObject);
  playerHealthDisplay.innerHTML = gameObject.player.hp;
  playerDamageDisplay.innerHTML = gameObject.player.dmg;
  playerDefenseDisplay.innerHTML = gameObject.player.def;
  warningMessage.innerHTML = gameObject.warning;
  currentFieldDescription.innerHTML = gameObject.map.matrixCurrentPosition
    .fieldDesc;
  northDescription.innerHTML = gameObject.map.matrixCurrentPosition
    .northDesc;
  southDescription.innerHTML = gameObject.map.matrixCurrentPosition
    .southDesc;
  eastDescription.innerHTML = gameObject.map.matrixCurrentPosition
    .eastDesc;
  westDescription.innerHTML = gameObject.map.matrixCurrentPosition
    .westDesc;
}

function newGame () {
  return fetch('/games', {method: 'POST'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

function moveNorth () {
  return fetch('/games/movements/north', {method: 'PUT'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

function moveWest () {
  return fetch('/games/movements/west', {method: 'PUT'})
  .then(response => response.json())
  .then(data => currentLocationDisplay(data))
  .catch(error => console.log(error));
}

function moveEast () {
  return fetch('/games/movements/east', {method: 'PUT'})
  .then(response => response.json())
  .then(data => currentLocationDisplay(data))
  .catch(error => console.log(error));
}

function moveSouth () {
  return fetch('/games/movements/south', {method: 'PUT'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

newGameButton.addEventListener('click', newGame);
moveNorthButton.addEventListener('click', moveNorth);
moveWestButton.addEventListener('click', moveWest);
moveEastButton.addEventListener('click', moveEast);
moveSouthButton.addEventListener('click', moveSouth);
