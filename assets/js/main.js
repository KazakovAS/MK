import Game from './Game/';
import { formFight } from "./constants";
import getDamage from "./getDamage.js";
import showResult from "./showResult.js";

formFight.addEventListener('submit', function(e) {
  e.preventDefault();

  getDamage();
  showResult();
})


const game = new Game();
game.start();






