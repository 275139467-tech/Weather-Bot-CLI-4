export function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32;
}

export function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

export function normalizeUnit(unit) {
  return unit === 'imperial' || unit === 'fahrenheit' ? 'imperial' : 'metric';
}
