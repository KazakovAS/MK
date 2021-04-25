import { player1 } from "./const.js";
import { player2 } from "./const.js";

import enemyAttack from "./enemyAttack.js";
import playerAttack from "./playerAttack.js";
import generateLogs from "./generateLogs.js";

function getDamage() {
  const enemy = enemyAttack();
  const player = playerAttack();

  if (player.hit !== enemy.defense) {
    player2.changeHP(player.value);
    player2.elHP();
    player2.renderHP();

    generateLogs('hit', player1, player2, player.value);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (enemy.hit !== player.defense) {
    player1.changeHP(enemy.value);
    player1.elHP();
    player1.renderHP();

    generateLogs('hit', player2, player1, enemy.value);
  } else {
    generateLogs('defence', player2, player1);
  }
}

export default getDamage;
