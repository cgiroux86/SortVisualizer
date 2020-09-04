export const generate = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr.push(getRandomNumber());
  }
  return arr;
};

function getRandomNumber() {
  return Math.floor(Math.random() * 700 + 5);
}
