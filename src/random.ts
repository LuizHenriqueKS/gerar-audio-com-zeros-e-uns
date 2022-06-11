import * as da from 'z-deep-audio';
import path from 'path';
import randomInt from './util/randomInt';
import generateZerosOrOnes from './util/generateZerosOrOnes';

async function main() {
  const directory = path.resolve('./out/random/');
  const count = 100;
  const maxLength = 6;
  const samples: string[] = [];

  console.log('Generating numbers...');

  let loop = 0;

  while (samples.length < count && loop < 1000) {
    const length = randomInt(1, maxLength);
    const sample = generateZerosOrOnes(length);
    if (!samples.includes(sample)) {
      samples.push(sample);
      loop = 0;
    } else {
      loop++;
    }
  }

  console.log('Generating áudios...');

  let progress = 0;
  for (const numbers of samples) {
    console.log(`Progress ${progress++}/${samples.length}`);
    const audioFile = path.join(directory, numbers + '.wav');
    const text = numbers.split('').join(' ');
    await da.voicer.sapi(0).wav(text, audioFile);
  }
}

main().catch(e => console.error(e));
