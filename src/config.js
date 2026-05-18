import fs from 'fs';

export function loadConfig(path = 'config.json') {
  if (!fs.existsSync(path)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}
