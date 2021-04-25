import { player1 } from "./const.js";
import { player2 } from "./const.js";
import { arenas } from "./const.js";
import { randomButton } from "./const.js";

import generateLogs from "./generateLogs.js";
import createElement from "./createElement.js";
import createReloadButton from "./createReloadButton.js";

function win(playerName) {
  const winTitle = createElement('div', 'loseTitle');

  if (playerName) {
    winTitle.textContent = `${playerName} wins`;
  } else {
    winTitle.textContent = `draw`;
  }

  return winTitle;
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;

    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(win(player2.name));
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(win(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player1.hp === 0) {
    arenas.appendChild(win());
    generateLogs('draw');
  }
}

export default showResult;
