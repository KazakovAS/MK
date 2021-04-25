import { getRandomFromRange } from "./utils/";

import { ATTACK } from "./constants";
import { HIT } from "./constants";

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
