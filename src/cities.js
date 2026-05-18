const CITIES = ['Singapore', 'Tokyo', 'Kaunas', 'London', 'New York', 'Sydney', 'Berlin'];

export function autocompleteCity(prefix) {
  const needle = prefix.toLowerCase();
  return CITIES.filter((city) => city.toLowerCase().startsWith(needle)).slice(0, 5);
}
