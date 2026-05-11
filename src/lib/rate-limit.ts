// In-memory rate limiter — state resets on cold starts.
// For multi-instance production use, replace with Upstash Redis.

type Entry = { timestamps: number[] };

const store = new Map<string, Entry>();

const LIMITS = [
  { windowMs: 5 * 60 * 1000, max: 1 }, // 1 per 5 min
  { windowMs: 60 * 60 * 1000, max: 5 }, // 5 per hour
  { windowMs: 24 * 60 * 60 * 1000, max: 10 }, // 10 per day
] as const;

const DAY_MS = 24 * 60 * 60 * 1000;

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfter: number; message: string };

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const entry = store.get(ip) ?? { timestamps: [] };

  // Prune timestamps outside the largest window
  entry.timestamps = entry.timestamps.filter((t) => now - t < DAY_MS);

  for (const { windowMs, max } of LIMITS) {
    const windowStart = now - windowMs;
    const hits = entry.timestamps.filter((t) => t >= windowStart);

    if (hits.length >= max) {
      const oldest = Math.min(...hits);
      const retryAfter = Math.ceil((oldest + windowMs - now) / 1000);
      return { allowed: false, retryAfter, message: buildMessage(retryAfter) };
    }
  }

  entry.timestamps.push(now);
  store.set(ip, entry);
  return { allowed: true };
}

function buildMessage(seconds: number): string {
  if (seconds < 60) {
    return `Too many messages. Please wait ${seconds} second${
      seconds !== 1 ? "s" : ""
    } and try again.`;
  }
  if (seconds < 3600) {
    const m = Math.ceil(seconds / 60);
    return `Too many messages. Please wait ${m} minute${
      m !== 1 ? "s" : ""
    } and try again.`;
  }
  const h = Math.ceil(seconds / 3600);
  return `Too many messages. Please wait ${h} hour${
    h !== 1 ? "s" : ""
  } and try again.`;
}
