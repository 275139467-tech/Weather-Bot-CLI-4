import chalk from 'chalk';

export function formatWeather(data) {
  const city = chalk.bold(data.name);
  const temp = chalk.cyan(`${Math.round(data.main.temp)}C`);
  const summary = data.weather?.[0]?.description ?? 'unknown conditions';
  const humidity = data.main?.humidity ?? 'n/a';
  return `${city}: ${temp}, ${summary} (humidity ${humidity}%)`;
}
