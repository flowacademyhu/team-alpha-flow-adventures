console.log('halihó');

let newGameButton = document.querySelector('.new-game');
let moveNorthButton = document.querySelector('.move-north');
let moveWestButton = document.querySelector('.move-west');
let moveEastButton = document.querySelector('.move-east');
let moveSouthButton = document.querySelector('.move-south');
let talkButton = document.querySelector('.talk');
let restButton = document.querySelector('.rest-submit');
let restSelect = document.querySelector('.rest-dropdown');
let restForm = document.querySelector('.rest-form');

let otherMessage = document.querySelector('.other-message');
let warningMessage = document.querySelector('.warning');
let playerHealthDisplay = document.querySelector('.player-health-display');
let playerDamageDisplay = document.querySelector('.player-attack-display');
let playerDefenseDisplay = document.querySelector('.player-defense-display');

let playerUsedItemDisplay = document.querySelector('.player-used-item-display');

let currentFieldDescription = document.querySelector('.field-desc');
let northDescription = document.querySelector('.north-desc');
let westDescription = document.querySelector('.west-desc');
let eastDescription = document.querySelector('.east-desc');
let southDescription = document.querySelector('.south-desc');

let northMovement = document.querySelector('.move-north');
let westMovement = document.querySelector('.move-west');
let eastMovement = document.querySelector('.move-east');
let southMovement = document.querySelector('.move-south');

let selectedRestValue;
let talkMessage = document.querySelector('.other-message');
let attackMessage = document.querySelector('.other-message');

let attackButton = document.querySelector('.attack');

function talkWithNpc (gameObject) {
  talkMessage.innerHTML = gameObject;
}

function statRefresh (gameObject) {
  playerHealthDisplay.innerHTML = gameObject.player.hp;
  playerDamageDisplay.innerHTML = gameObject.player.dmg;
  playerDefenseDisplay.innerHTML = gameObject.player.def;
}

function attackNpc (gameObject) {
  attackMessage.innerHTML = gameObject.attackMessage;
  statRefresh(gameObject);
}

function playerRest (gameObject) {
  otherMessage.innerHTML = gameObject.otherMessage;
  statRefresh(gameObject);
}

function currentLocationDisplay (gameObject) {
  console.log(gameObject);
  talkMessage.innerHTML = '';
  otherMessage.innerHTML = '';
  statRefresh(gameObject);
  playerUsedItemDisplay.innerHTML = gameObject.inventory[0].name;
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

function talk () {
  return fetch('/games/talk', {method: 'POST'})
    .then(response => response.json())
    .then(data => talkWithNpc(data))
    .catch(error => console.log(error));
}

function rest () {
  let payload = {restedRoundNumber: selectedRestValue};

  fetch('/games/rest', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: ('json', JSON.stringify(payload))
  })
  .then(function (res) { return res.json(); })
  .then(data => playerRest(data, selectedRestValue))
  .catch(err => console.log(err));
}

function attack () {
  return fetch('/games/attack', {method: 'POST'})
  .then(response => response.json())
  .then(data => attackNpc(data))
  .catch(error => console.log(error));
}

newGameButton.addEventListener('click', newGame);
moveNorthButton.addEventListener('click', moveNorth);
moveWestButton.addEventListener('click', moveWest);
moveEastButton.addEventListener('click', moveEast);
moveSouthButton.addEventListener('click', moveSouth);
talkButton.addEventListener('click', talk);
restSelect.addEventListener('change', function () {
  selectedRestValue = this.value;
});

restForm.addEventListener('submit', function (event) {
  event.preventDefault();
  rest();
});

attackButton.addEventListener('click', attack);
