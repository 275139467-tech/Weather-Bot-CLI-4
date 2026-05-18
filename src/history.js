export function compareWeather(current, previous) {
  const delta = Math.round((current.main.temp - previous.main.temp) * 10) / 10;
  return {
    city: current.name,
    delta,
    trend: delta > 0 ? 'warmer' : delta < 0 ? 'cooler' : 'unchanged'
  };
}
