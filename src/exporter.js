import fs from 'fs';

export function exportWeather(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  return file;
}
