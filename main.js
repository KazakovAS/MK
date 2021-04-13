const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [ 'kunai' ],
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: [ 'sword' ],
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP
};

function createElement(tagName, className) {
  const tag = document.createElement(tagName);

  if (className) {
    tag.classList.add(className);
  }

  return tag;
}

function createReloadButton() {
  const reloadWrap = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');

  arenas.appendChild(reloadWrap);
  reloadWrap.appendChild(reloadButton);

  reloadButton.textContent = `Restart`;
  reloadWrap.style.display = 'block';

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  })
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

function changeHP(randomDamage) {
  this.hp -= randomDamage;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
  this.elHP().style.width = this.hp + '%';
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

function getRandom(multiplier) {
  return Math.ceil(Math.random() * multiplier);
}


randomButton.addEventListener('click', function() {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));

  player1.elHP();
  player2.elHP();

  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;

    createReloadButton()
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
