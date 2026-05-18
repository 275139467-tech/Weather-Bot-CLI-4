import fs from 'fs';
import path from 'path';

export async function loadPlugin(pluginDir, name) {
  const target = path.join(pluginDir, `${name}.js`);
  if (!fs.existsSync(target)) {
    throw new Error(`Plugin not found: ${name}`);
  }
  return import(target);
}
