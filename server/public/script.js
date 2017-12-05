console.log('halihó');

let newGameButton = document.querySelector('.new-game');
let moveNorthButton = document.querySelector('.move-north');
let moveSouthButton = document.querySelector('.move-south');

let currentFieldDescription = document.querySelector('.field-desc');
let northDescription = document.querySelector('.north-desc');
let southDescription = document.querySelector('.south-desc');
let eastDescription = document.querySelector('.east-desc');
let westDescription = document.querySelector('.west-desc');

let northMovement = document.querySelector('.move-north');
let southMovement = document.querySelector('.move-south');

function currentLocationDisplay (currentGameField) {
  currentFieldDescription.innerHTML = currentGameField.fieldDesc;
  northDescription.innerHTML = currentGameField.northDesc;
  southDescription.innerHTML = currentGameField.southDesc;
  eastDescription.innerHTML = currentGameField.eastDesc;
  westDescription.innerHTML = currentGameField.westDesc;
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

function moveSouth () {
  return fetch('/games/movements/south', {method: 'PUT'})
    .then(response => response.json())
    .then(data => currentLocationDisplay(data))
    .catch(error => console.log(error));
}

newGameButton.addEventListener('click', newGame);
moveNorthButton.addEventListener('click', moveNorth);
moveSouthButton.addEventListener('click', moveSouth);
