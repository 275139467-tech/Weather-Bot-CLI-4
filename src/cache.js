const store = new Map();

export function getCached(key) {
  const hit = store.get(key);
  if (!hit || hit.expiresAt < Date.now()) {
    store.delete(key);
    return undefined;
  }
  return hit.value;
}

export function setCached(key, value, ttlSeconds) {
  store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
}
