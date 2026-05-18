export function coordinatesFromArgs(argv) {
  if (argv.lat == null || argv.lon == null) {
    return undefined;
  }
  return { lat: Number(argv.lat), lon: Number(argv.lon) };
}
