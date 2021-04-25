import { player1, player2 } from "../constants/";
import generateLogs from "../generateLogs.js";

class Game {
  start = async () => {
    player1.createPlayer();
    player2.createPlayer();

    generateLogs('start', player1, player2);
  }
}

export default  Game;
