import {logs} from "./constants";

import getTime from "./getTime.js";
import { getRandomFromRange } from "./utils/";

function getTextLog(type, playerName1, playerName2) {
  switch(type) {
    case 'start':
      return logs[type]
          .replace('[time]', getTime())
          .replace('[player1]', playerName1)
          .replace('[player2]', playerName2);

    case 'hit':
      return logs[type][getRandomFromRange(0, type.length - 1)]
          .replace('[playerKick]', playerName1)
          .replace('[playerDefence]', playerName2);

    case 'defence':
      return logs[type][getRandomFromRange(0, type.length -1)]
          .replace('[playerDefence]', playerName1)
          .replace('[playerKick]', playerName2);

    case 'end':
      return logs[type][getRandomFromRange(0, type.length - 1)]
          .replace('[playerWins]', playerName1)
          .replace('[playerLose]', playerName2);

    case 'draw':
      return logs[type];
  }
}

export default getTextLog;
