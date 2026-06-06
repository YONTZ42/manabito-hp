import "server-only";

const INSTAGRAM_TOKEN_STORE_KEY =
  process.env.INSTAGRAM_TOKEN_STORE_KEY ?? "manabito:instagram:access-token";
const INSTAGRAM_REFRESH_LOCK_KEY = `${INSTAGRAM_TOKEN_STORE_KEY}:refresh-lock`;
const INSTAGRAM_REFRESH_LOCK_SECONDS = 5 * 60;

type RedisConfig = {
  url: string;
  token: string;
};

type RedisResponse = {
  result?: unknown;
  error?: string;
};

export type InstagramStoredToken = {
  accessToken: string;
  tokenType?: string;
  expiresAt?: string;
  refreshedAt: string;
};

export type InstagramTokenStoreStatus = {
  configured: boolean;
  provider: "upstash-redis" | "vercel-kv" | "none";
  key: string;
};

function getRedisConfig(): RedisConfig | undefined {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (upstashUrl && upstashToken) {
    return {
      url: upstashUrl.replace(/\/$/, ""),
      token: upstashToken,
    };
  }

  const kvUrl = process.env.KV_REST_API_URL?.trim();
  const kvToken = process.env.KV_REST_API_TOKEN?.trim();

  if (kvUrl && kvToken) {
    return {
      url: kvUrl.replace(/\/$/, ""),
      token: kvToken,
    };
  }

  return undefined;
}

export function getInstagramTokenStoreStatus(): InstagramTokenStoreStatus {
  const hasUpstash =
    Boolean(process.env.UPSTASH_REDIS_REST_URL?.trim()) &&
    Boolean(process.env.UPSTASH_REDIS_REST_TOKEN?.trim());
  const hasKv =
    Boolean(process.env.KV_REST_API_URL?.trim()) &&
    Boolean(process.env.KV_REST_API_TOKEN?.trim());

  return {
    configured: hasUpstash || hasKv,
    provider: hasUpstash ? "upstash-redis" : hasKv ? "vercel-kv" : "none",
    key: INSTAGRAM_TOKEN_STORE_KEY,
  };
}

async function redisCommand(args: Array<string | number>) {
  const config = getRedisConfig();

  if (!config) {
    return undefined;
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis REST request failed with ${response.status}`);
  }

  const payload = (await response.json()) as RedisResponse;

  if (payload.error) {
    throw new Error(payload.error);
  }

  return payload.result;
}

function parseStoredToken(value: unknown): InstagramStoredToken | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  try {
    const parsed = JSON.parse(value) as Partial<InstagramStoredToken>;

    if (typeof parsed.accessToken !== "string" || !parsed.accessToken.trim()) {
      return undefined;
    }

    if (typeof parsed.refreshedAt !== "string") {
      return undefined;
    }

    return {
      accessToken: parsed.accessToken,
      tokenType: parsed.tokenType,
      expiresAt: parsed.expiresAt,
      refreshedAt: parsed.refreshedAt,
    };
  } catch {
    return undefined;
  }
}

export async function getStoredInstagramToken() {
  const result = await redisCommand(["GET", INSTAGRAM_TOKEN_STORE_KEY]);
  return parseStoredToken(result);
}

export async function setStoredInstagramToken(token: InstagramStoredToken) {
  await redisCommand([
    "SET",
    INSTAGRAM_TOKEN_STORE_KEY,
    JSON.stringify(token),
  ]);
}

export async function getInstagramAccessToken() {
  try {
    const storedToken = await getStoredInstagramToken();
    return (
      storedToken?.accessToken ?? process.env.INSTAGRAM_ACCESS_TOKEN?.trim()
    );
  } catch (error) {
    console.error("[Instagram] Failed to read stored token:", error);
    return process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  }
}

export async function acquireInstagramRefreshLock() {
  const result = await redisCommand([
    "SET",
    INSTAGRAM_REFRESH_LOCK_KEY,
    new Date().toISOString(),
    "NX",
    "EX",
    INSTAGRAM_REFRESH_LOCK_SECONDS,
  ]);

  return result === "OK";
}

export async function releaseInstagramRefreshLock() {
  await redisCommand(["DEL", INSTAGRAM_REFRESH_LOCK_KEY]);
}
