import chalk from 'chalk';

export function formatWeather(data, unit = 'metric') {
  const city = chalk.bold(data.name);
  const unitLabel = unit === 'imperial' ? 'F' : 'C';
  const temp = chalk.cyan(`${Math.round(data.main.temp)}${unitLabel}`);
  const wind = data.wind?.speed == null ? 'n/a' : `${data.wind.speed} m/s`;
  const summary = data.weather?.[0]?.description ?? 'unknown conditions';
  const humidity = data.main?.humidity ?? 'n/a';
  return `${city}: ${temp}, ${summary} (humidity ${humidity}%, wind ${wind})`;
}
