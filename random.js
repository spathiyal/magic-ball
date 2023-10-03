/** get a random integer between 0 and max. */
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
function choice(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
export { choice, getRandom };
