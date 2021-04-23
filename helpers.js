export function getRandomColor() {
  return `hsl(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(
    100
  )}%)`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
