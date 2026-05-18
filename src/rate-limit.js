export function createRateLimiter(limit, windowMs) {
  const hits = [];
  return function allow() {
    const now = Date.now();
    while (hits.length && hits[0] <= now - windowMs) {
      hits.shift();
    }
    if (hits.length >= limit) return false;
    hits.push(now);
    return true;
  };
}
