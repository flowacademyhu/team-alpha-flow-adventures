console.log('halihó');

let newGameButton = document.querySelector('.new-game');
let moveNorthButton = document.querySelector('.move-north');
let moveWestButton = document.querySelector('.move-west');
let moveEastButton = document.querySelector('.move-east');
let moveSouthButton = document.querySelector('.move-south');
let talkButton = document.querySelector('.talk');

let pickupButton = document.querySelector('.pickup');

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
let pickupMessage = document.querySelector('.other-message');
let gameWinMessage = document.querySelector('.other-message');

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

function pickupItem (gameObject) {
  pickupMessage.innerHTML = gameObject.itemMessage;
}

function gameWin (gameObject) {
  pickupMessage.innerHTML = gameObject.gameWinMessage;
}

function currentLocationDisplay (gameObject) {
  console.log(gameObject);
  talkMessage.innerHTML = '';
  playerUsedItemDisplay.innerHTML = gameObject.inventory.activeItems[0].name;
  otherMessage.innerHTML = '';
  statRefresh(gameObject);
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
  return fetch('/api/game', {method: 'POST'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

function moveNorth () {
  return fetch('/api/movements/north', {method: 'PUT'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

function moveWest () {
  return fetch('/api/movements/west', {method: 'PUT'})
  .then(response => response.json())
  .then(data => currentLocationDisplay(data))
  .catch(error => console.log(error));
}

function moveEast () {
  return fetch('/api/movements/east', {method: 'PUT'})
  .then(response => response.json())
  .then(data => currentLocationDisplay(data))
  .catch(error => console.log(error));
}

function moveSouth () {
  return fetch('/api/movements/south', {method: 'PUT'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

function talk () {
  return fetch('/api/actions/talk', {method: 'POST'})
    .then(response => response.json())
    .then(data => talkWithNpc(data))
    .catch(error => console.log(error));
}

function rest () {
  let payload = {restedRoundNumber: selectedRestValue};

  fetch('/api/actions/rest', {
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
  return fetch('/api/actions/attack', {method: 'POST'})
  .then(response => response.json())
  .then(data => attackNpc(data))
  .catch(error => console.log(error));
}

function pickup () {
  return fetch('/api/actions/pickup', {method: 'POST'})
  .then(response => response.json())
  .then(data => pickupItem(data))
  .catch(error => console.log(error));
}

function gamewin () {
  return fetch('/api/actions/pickup', {method: 'POST'})
  .then(response => response.json())
  .then(data => pickupItem(data))
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
pickupButton.addEventListener('click', pickup);
