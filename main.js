const root = document.querySelector('.root');
const arenas = document.querySelector('.arenas');
const chat = document.querySelector('.chat');
const wallLeft = document.querySelector('.wall-left');
const wallRight = document.querySelector('.wall-right');


const player1 = {
  name: 'SCORPION',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [ 'kunai' ],
  attack: function() {
    console.log('Fight...');
  }
}

const player2 = {
  name: 'SUB-ZERO',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: [ 'sword' ],
  attack: function() {
    console.log('Fight...');
  }
}

function createPlayer(player, character) {
  const playerBox = document.createElement('div');
  const progressBar  = document.createElement('div');
  const characterBox = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  playerBox.classList.add(player);
  progressBar.classList.add('progressbar');
  characterBox.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');

  p.textContent = character.name;
  img.src = character.img;

  arenas.appendChild(playerBox);

  playerBox.appendChild(progressBar);
  playerBox.appendChild(characterBox);

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  characterBox.appendChild(img);
}


createPlayer('player1', player1);
createPlayer('player2', player2);
