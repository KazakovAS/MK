const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const chat = document.querySelector('.chat');
const formFight = document.querySelector('.control');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

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

function playerAttack() {
  const result = {};

  for (let item of formFight) {
    if (item.checked === true && item.name === 'hit') {
      result.value = getRandom(HIT[item.value]);
      result.hit = item.value;
    }

    if (item.checked === true && item.name === 'defense') {
      result.defense = item.value;
    }

    item.checked = false;
  }

  return result;
}

function getDamage() {
  const enemy = enemyAttack();
  const player = playerAttack();

  if (player.hit !== enemy.defense) {
    player2.changeHP(player.value);
    player2.elHP();
    player2.renderHP();

    generateLogs('hit', player1, player2, player.value);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (enemy.hit !== player.defense) {
    player1.changeHP(enemy.value);
    player1.elHP();
    player1.renderHP();

    generateLogs('hit', player2, player1, enemy.value);
  } else {
    generateLogs('defence', player2, player1);
  }
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;

    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(win(player2.name));
    generateLogs('end', player1, player2);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(win(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player1.hp === 0) {
    arenas.appendChild(win());
    generateLogs('draw', player1, player2);
  }
}

function getTime() {
  const time = new Date;

  return `${time.getHours()}:${time.getMinutes()}`
}

function generateLogs(type, player1, player2, damage) {
  let text;
  let el;

  switch(type) {
    case 'start':
      text = logs[type]
       .replace('[time]', getTime())
       .replace('[player1]', player1.name)
       .replace('[player2]', player2.name);

      el = `<p>${text}</p>`;

      break;

    case 'hit':
      text = logs[type][getRandom(type.length)]
       .replace('[playerKick]', player1.name)
       .replace('[playerDefence]', player2.name);

      el = `<p>${getTime()} - ${text}. Получено [${damage}] урона, [${player2.hp}/100]</p>`;

      break;

    case 'defence':
      text = logs[type][getRandom(type.length)]
       .replace('[playerDefence]', player1.name)
       .replace('[playerKick]', player2.name);

      el = `<p>${getTime()} - ${text}</p>`;

      break;

    case 'end':
      text = logs[type][getRandom(type.length)]
       .replace('[playerWins]', player1.name)
       .replace('[playerLose]', player2.name);

      el = `<p>${text}</p>`;

      break;

    case 'draw':
      text = logs[type];

      el = `<p>${text}</p>`;

      break;

    default:
      text = 'Нет такого кейса';

      el = `<p>${text}</p>`;
  }

  chat.insertAdjacentHTML('afterbegin', el)
}

formFight.addEventListener('submit', function(e) {
  e.preventDefault();

  getDamage();
  showResult();
})

generateLogs('start', player1, player2);
arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
