import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export function loadConfig(path = 'config.json') {
  const config = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf8')) : {};
  return {
    ...config,
    weather_api_key: process.env.WEATHER_API_KEY,
    notifications: {
      ...(config.notifications ?? {}),
      bot_token: process.env.NOTIFICATION_BOT_TOKEN
    }
  };
}
