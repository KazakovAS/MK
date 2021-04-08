const root = document.querySelector('.root');
const arenas = document.querySelector('.arenas');
const chat = document.querySelector('.chat');
const wallLeft = document.querySelector('.wall-left');
const wallRight = document.querySelector('.wall-right');


//
// const player1 = {
//   name: 'SCORPION',
//   hp: 50,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//   weapon: [ 'kunai' ],
//   attack: function() {
//     console.log('Fight...');
//   }
// }
//
// const player2 = {
//   name: 'SUB-ZERO',
//   hp: 80,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//   weapon: [ 'sword' ],
//   attack: function() {
//     console.log('Fight...');
//   }
// }

function createPlayer(player, playerName, characterHp) {
  const playerBox = document.createElement('div');
  const progressBar  = document.createElement('div');
  const character = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  playerBox.classList.add(player);
  progressBar.classList.add('progressbar');
  character.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');

  p.textContent = 'Scorpion';
  img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

  arenas.appendChild(playerBox);

  playerBox.appendChild(progressBar);
  playerBox.appendChild(character);

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  character.appendChild(img);
}


createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
