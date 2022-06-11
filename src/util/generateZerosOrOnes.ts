import randomInt from './randomInt';

const alfabet = '01 ';

function generateZerosOrOnes(length: number): string {
  let result = '';
  while (result.length < length) {
    const index = randomInt(0, 2);
    if (index !== 2) {
      result += alfabet[index];
    }
  }
  return result;
}

export default generateZerosOrOnes;
