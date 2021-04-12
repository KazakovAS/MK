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

  player.hp -= getRandomDamage(20);

  if (player.hp <= 0) {
    player.hp = 0;
  }

  playerLife.style.width = player.hp + '%';
}

function win(playerName) {
  const winTitle = createElement('div', 'loseTitle');

  if (playerName) {
    winTitle.textContent = `${playerName} wins`;
  } else {
    winTitle.textContent = `draw`;
  }

  return winTitle;
}

function getRandomDamage(multiplier) {
  return Math.ceil(Math.random() * multiplier);
}

randomButton.addEventListener('click', function() {
  changeHP(player1);
  changeHP(player2);

  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(win(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(win(player1.name));
  } else if (player1.hp === 0 && player1.hp === 0) {
    arenas.appendChild(win());
  }
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
