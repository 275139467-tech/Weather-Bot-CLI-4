import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeUnit } from '../src/units.js';

test('normalizes imperial aliases', () => {
  assert.equal(normalizeUnit('fahrenheit'), 'imperial');
});

test('defaults unknown units to metric', () => {
  assert.equal(normalizeUnit('kelvin'), 'metric');
});
