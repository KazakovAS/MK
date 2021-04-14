const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const formFight = document.querySelector('.control');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [ 'kunai' ],
  changeHP,
  elHP,
  renderHP
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: [ 'sword' ],
  changeHP,
  elHP,
  renderHP
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

  reloadButton.textContent = `Restart`;
  reloadWrap.style.display = 'block';

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  })

  arenas.appendChild(reloadWrap);
  reloadWrap.appendChild(reloadButton);
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

  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;

    createReloadButton();
  }

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

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defense = ATTACK[getRandom(3) - 1];

  return result = {
    value: getRandom(HIT[hit]),
    hit,
    defense
  };
}

formFight.addEventListener('submit', function(e) {
  e.preventDefault();

  const enemy = enemyAttack();
  const attack = {};

  for (let item of formFight) {
    if (item.checked === true || item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked === true || item.name === 'defense') {
      attack.defense = item.value;
    }

    item.checked = false;
  }

  if (attack.hit !== enemy.defense) {
      player2.changeHP(attack.value);
      player2.elHP();
      player2.renderHP();
  } else {
      console.log('Противник заблокировал урон');
  }

   if (enemy.hit !== attack.defense) {
      player1.changeHP(attack.value);
      player1.elHP();
      player1.renderHP();
   } else {
      console.log('Вы заблокировали урон');
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
