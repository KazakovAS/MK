import { chat } from "./const.js";
import { logs } from "./const.js";

import getRandomFromRange from "./getRandomFromRange.js";
import getTime from "./getTime.js";

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
      text = logs[type][getRandomFromRange(0, type.length - 1)]
          .replace('[playerKick]', player1.name)
          .replace('[playerDefence]', player2.name);

      el = `<p>${getTime()} - ${text}. Получено [${damage}] урона, [${player2.hp}/100]</p>`;

      break;

    case 'defence':
      text = logs[type][getRandomFromRange(0, type.length -1)]
          .replace('[playerDefence]', player1.name)
          .replace('[playerKick]', player2.name);

      el = `<p>${getTime()} - ${text}</p>`;

      break;

    case 'end':
      text = logs[type][getRandomFromRange(0, type.length - 1)]
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

      break;
  }

  chat.insertAdjacentHTML('afterbegin', el)
}

export default generateLogs;
