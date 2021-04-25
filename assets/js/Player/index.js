class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
  }

  elHP = () => {
    return document.querySelector(`.${this.selector} .life`);
  }

  changeHP = (randomDamage) => {
    this.hp -= randomDamage;

    if (this.hp <= 0) {
      this.hp = 0;
    }
  }

  renderHP = () => {
    this.elHP().style.width = this.hp + '%';
  }
}

export default  Player;
