#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getCurrentWeather } from './weather.js';
import { formatWeather } from './formatter.js';

const argv = yargs(hideBin(process.argv))
  .option('city', { type: 'string', describe: 'City name to check' })
  .option('api-key', { type: 'string', describe: 'OpenWeatherMap API key' })
  .demandOption(['city', 'api-key'])
  .help()
  .parseSync();

const data = await getCurrentWeather(argv.city, argv.apiKey);
console.log(formatWeather(data));
