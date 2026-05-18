import test from 'node:test';
import assert from 'node:assert/strict';
import { autocompleteCity } from '../src/cities.js';

test('city autocomplete returns known cities', () => {
  assert.deepEqual(autocompleteCity('Kau'), ['Kaunas']);
});
