const SEVERE = new Set(['Thunderstorm', 'Tornado', 'Squall']);

export function summarizeAlerts(data) {
  const main = data.weather?.[0]?.main;
  if (SEVERE.has(main)) {
    return `Severe weather warning: ${data.weather[0].description}`;
  }
  return 'No severe weather alerts';
}
