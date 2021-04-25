import {arenas, formFight} from "./constants";
import { player1 } from "./constants";
import { player2 } from "./constants";

import generateLogs from "./generateLogs.js";
import getDamage from "./getDamage.js";
import showResult from "./showResult.js";


formFight.addEventListener('submit', function(e) {
  e.preventDefault();

  getDamage();
  showResult();
})


function init() {
  player1.createPlayer();
  player2.createPlayer();

  generateLogs('start', player1, player2);
}

init();





