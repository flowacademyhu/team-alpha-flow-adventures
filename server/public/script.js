console.log('halihó');

let newGameButton = document.querySelector('.new-game');

let currentFieldDescription = document.querySelector('.field-desc');
let northDescription = document.querySelector('.north-desc');
let southDescription = document.querySelector('.south-desc');
let eastDescription = document.querySelector('.east-desc');
let westDescription = document.querySelector('.west-desc');

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

newGameButton.addEventListener('click', newGame);
