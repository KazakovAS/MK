import { HIT } from "./const.js";
import { formFight } from "./const.js";

import getRandomFromRange from "./getRandomFromRange.js";


function playerAttack() {
  const result = {};

  for (let item of formFight) {
    if (item.checked === true && item.name === 'hit') {
      result.value = getRandomFromRange(0, HIT[item.value]);
      result.hit = item.value;
    }

    if (item.checked === true && item.name === 'defense') {
      result.defense = item.value;
    }

    item.checked = false;
  }

  return result;
}

export default playerAttack;
