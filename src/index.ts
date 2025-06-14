import { lerp, clamp } from './utils';

function main() {
  let result = lerp(1, 10, 0.5);
  return result;
}

function secondToMain() {
  return null;
}

let r = main();

console.log(r);

console.log(clamp(100, 5, 10));
console.log('extra line');
