import axios from 'axios';

export async function getCurrentWeather(city, apiKey, unit = 'metric', options = {}) {
  const retries = options.maxRetries ?? 2;
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        timeout: options.timeoutMs ?? 10000,
        params: { q: city, appid: apiKey, units: unit }
      });
      return response.data;
    } catch (error) {
      lastError = error;
      if (attempt === retries) break;
    }
  }
  throw new Error(`Weather lookup failed: ${lastError.message}`);
}
