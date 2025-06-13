import { lerp } from './utils';

function main() {
  let result = lerp(1, 10, 0.5);
  return result;
}

let r = main();

console.log(r);
