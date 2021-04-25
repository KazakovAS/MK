import {arenas, formFight} from "./constants";
import { player1 } from "./constants";
import { player2 } from "./constants";

import createElement from "./createElement.js";
import generateLogs from "./generateLogs.js";
import getDamage from "./getDamage.js";
import showResult from "./showResult.js";

function createPlayer({ player, hp, name, img }) {
  const playerBox = createElement('div', `player${player}`);
  const progressBar  = createElement('div', 'progressbar');
  const characterBox = createElement('div', 'character');
  const lifeEl = createElement('div', 'life');
  const nameEl = createElement('div', 'name');
  const imgEl = createElement('img');

  lifeEl.style.width = hp + '%';
  imgEl.src = img;
  nameEl.textContent = name;

  playerBox.appendChild(progressBar);
  playerBox.appendChild(characterBox);

  progressBar.appendChild(lifeEl);
  progressBar.appendChild(nameEl);

  characterBox.appendChild(imgEl);

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





