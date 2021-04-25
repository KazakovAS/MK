import { createElement } from "../utils/";

class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
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

  createPlayer = () => {
    const playerBox = createElement('div', this.selector);
    const progressBar  = createElement('div', 'progressbar');
    const characterBox = createElement('div', 'character');
    const lifeEl = createElement('div', 'life');
    const nameEl = createElement('div', 'name');
    const imgEl = createElement('img');

    lifeEl.style.width = this.hp + '%';
    imgEl.src = this.img;
    nameEl.textContent = this.name;

    playerBox.appendChild(progressBar);
    playerBox.appendChild(characterBox);

    progressBar.appendChild(lifeEl);
    progressBar.appendChild(nameEl);

    characterBox.appendChild(imgEl);

    const root = document.querySelector(`.${this.rootSelector}`);
    root.appendChild(playerBox);

    return playerBox;
  }
}

export default  Player;
