import getRandomFromRange from "./getRandomFromRange.js";

import { ATTACK } from "./const.js";
import { HIT } from "./const.js";

function enemyAttack() {
  let result;

  const hit = ATTACK[getRandomFromRange(0, ATTACK.length - 1)];
  const defense = ATTACK[getRandomFromRange(0, ATTACK.length - 1)];

  return result = {
    value: getRandomFromRange(0, HIT[hit]),
    hit,
    defense
  };
}

export default enemyAttack;
