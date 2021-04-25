function changeHP(randomDamage) {
  this.hp -= randomDamage;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

export default changeHP;
