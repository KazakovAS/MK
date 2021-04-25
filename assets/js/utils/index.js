export const getRandomFromRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createElement = (tagName, className) => {
  const tag = document.createElement(tagName);

  if (className) {
    tag.classList.add(className);
  }

  return tag;
}

