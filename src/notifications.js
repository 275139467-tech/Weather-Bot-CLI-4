export async function sendWeatherAlert(config, weather) {
  if (!config.notifications?.enabled) {
    return false;
  }
  console.log(`Alert queued for ${weather.name}`);
  return true;
}
