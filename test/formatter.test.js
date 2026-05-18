import test from 'node:test';
import assert from 'node:assert/strict';
import { formatWeather } from '../src/formatter.js';

test('formats a weather response', () => {
  const out = formatWeather({
    name: 'Kaunas',
    main: { temp: 21.3, humidity: 55 },
    weather: [{ description: 'clear sky' }]
  });
  assert.match(out, /Kaunas/);
  assert.match(out, /clear sky/);
});
