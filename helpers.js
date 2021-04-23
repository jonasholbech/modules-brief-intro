export function getRandomColor() {
  return `hsl(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(
    100
  )}%)`;
}
export const teachers = ["Jonas", "Dannie"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
