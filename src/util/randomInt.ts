const randomAll = require('random-all');

function randomInt(min: number, max: number): number {
  return randomAll.getInt(min, max);
}

export default randomInt;
