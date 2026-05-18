import axios from 'axios';

export async function getCurrentWeather(city, apiKey, unit = 'metric') {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: apiKey,
      units: unit
    }
  });
  return response.data;
}
