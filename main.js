const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [ 'kunai' ],
  attack: function() {
    console.log('Fight...');
  }
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: [ 'sword' ],
  attack: function() {
    console.log('Fight...');
  }
};

function createElement(tagName, className) {
  const tag = document.createElement(tagName);

  if (className) {
    tag.classList.add(className);
  }

  return tag;
}

function createPlayer(player) {
  const playerBox = createElement('div', 'player' +player.player);
  const progressBar  = createElement('div', 'progressbar');
  const characterBox = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  life.style.width = player.hp + '%';
  img.src = player.img;
  name.textContent = player.name;

  playerBox.appendChild(progressBar);
  playerBox.appendChild(characterBox);

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  characterBox.appendChild(img);

  return playerBox;
}

function changeHP(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');

  player.hp -= Math.ceil(Math.random() * 20);

  if (player.hp <= 0 && player.player === 1) {
    player.hp = 0;
    arenas.appendChild(win(player2));
  }

  if (player.hp <= 0 && player.player === 2) {
    player.hp = 0;
    arenas.appendChild(win(player1));
  }

  console.log(`${player.name} осталось ${player.hp}`);
  playerLife.style.width = player.hp + '%';
}

function win(player) {
  const winTitle = createElement('div', 'loseTitle');

  winTitle.textContent = `${player.name} wins`;
  randomButton.disabled = true;

  return winTitle;
}


randomButton.addEventListener('click', function() {
  changeHP(player1);
  changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
