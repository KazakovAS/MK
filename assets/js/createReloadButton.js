import createElement from "./createElement.js";

import { arenas } from "./constants";

function createReloadButton() {
  const reloadWrap = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');

  reloadButton.textContent = `Restart`;
  reloadWrap.style.display = 'block';

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  })

  arenas.appendChild(reloadWrap);
  reloadWrap.appendChild(reloadButton);
}

export default createReloadButton;
