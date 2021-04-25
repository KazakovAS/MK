import {arenas, formFight} from "./const.js";
import { player1 } from "./const.js";
import { player2 } from "./const.js";

import createElement from "./createElement.js";
import generateLogs from "./generateLogs.js";
import getDamage from "./getDamage.js";
import showResult from "./showResult.js";

function createPlayer(player) {
  const playerBox = createElement('div', 'player' + player.player);
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

formFight.addEventListener('submit', function(e) {
  e.preventDefault();

  getDamage();
  showResult();
})


function init() {
  arenas.appendChild(createPlayer(player1));
  arenas.appendChild(createPlayer(player2));

  generateLogs('start', player1, player2);
}

init();





