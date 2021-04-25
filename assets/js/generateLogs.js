import { chat } from "./const.js";
import getTextLog from "./getTextLog.js";
import getTime from "./getTime.js";


function generateLogs(type, player1 = {}, player2 = {}, damage) {
  let text = getTextLog(type, player1.name, player2.name);

  switch (type) {
    case 'hit':
      text = `${getTime()} - ${text}. Получено [${damage}] урона, [${player2.hp}/100]`;
      break;

    case 'defence':
    case 'end':
    case 'draw':
      text = `${getTime()} - ${text}`;
      break;


  }
  if (type === 'hit') {

  }

  const el = `<p>${text}</p>`;

  chat.insertAdjacentHTML('afterbegin', el)
}

export default generateLogs;
