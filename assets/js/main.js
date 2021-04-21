import { arenas } from "./const.js";
import { player1 } from "./const.js";
import { player2 } from "./const.js";

import generateLogs from "./generateLogs.js";
import createPlayer from "./createPlayer.js";
import getDamage from "./getDamage.js";

generateLogs('start', player1, player2);
arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
