#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getCurrentWeather } from './weather.js';
import { formatWeather } from './formatter.js';
import { withSpinner } from './spinner.js';

const argv = yargs(hideBin(process.argv))
  .option('city', { type: 'string', describe: 'City name to check' })
  .option('api-key', { type: 'string', describe: 'OpenWeatherMap API key' })
  .option('unit', { type: 'string', default: 'metric' })
  .option('json', { type: 'boolean', default: false, describe: 'Print raw JSON' })
  .demandOption(['city', 'api-key'])
  .help()
  .parseSync();

const data = await withSpinner(`Checking weather for ${argv.city}`, () =>
  getCurrentWeather(argv.city, argv.apiKey, argv.unit)
);
console.log(argv.json ? JSON.stringify(data, null, 2) : formatWeather(data, argv.unit));
