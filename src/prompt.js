import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

export async function promptForCity() {
  const rl = readline.createInterface({ input, output });
  try {
    return await rl.question('City: ');
  } finally {
    rl.close();
  }
}
