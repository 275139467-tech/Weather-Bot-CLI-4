#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('city', {
    type: 'string',
    describe: 'City name to check'
  })
  .demandOption('city')
  .help()
  .parseSync();

console.log(`Checking weather for ${argv.city}...`);
