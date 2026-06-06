import "server-only";

const INSTAGRAM_GRAPH_API_VERSION =
  process.env.INSTAGRAM_GRAPH_API_VERSION ?? "v23.0";

type InstagramTokenRefreshResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  error?: {
    message?: string;
    type?: string;
    code?: number;
  };
};

export type RefreshedInstagramToken = {
  accessToken: string;
  tokenType?: string;
  expiresAt?: string;
};

export function hasInstagramRefreshConfig() {
  return Boolean(
    process.env.INSTAGRAM_APP_ID?.trim() &&
      process.env.INSTAGRAM_APP_SECRET?.trim(),
  );
}

export async function refreshInstagramAccessToken(
  currentAccessToken: string,
): Promise<RefreshedInstagramToken> {
  const appId = process.env.INSTAGRAM_APP_ID?.trim();
  const appSecret = process.env.INSTAGRAM_APP_SECRET?.trim();

  if (!appId || !appSecret) {
    throw new Error("Instagram app credentials are not configured");
  }

  const searchParams = new URLSearchParams({
    grant_type: "fb_exchange_token",
    client_id: appId,
    client_secret: appSecret,
    fb_exchange_token: currentAccessToken,
  });

  const response = await fetch(
    `https://graph.facebook.com/${INSTAGRAM_GRAPH_API_VERSION}/oauth/access_token?${searchParams.toString()}`,
    {
      cache: "no-store",
    },
  );
  const payload = (await response.json()) as InstagramTokenRefreshResponse;

  if (!response.ok || payload.error) {
    throw new Error(
      payload.error?.message ??
        `Instagram token refresh failed with ${response.status}`,
    );
  }

  if (!payload.access_token) {
    throw new Error("Instagram token refresh did not return an access token");
  }

  const expiresAt =
    typeof payload.expires_in === "number"
      ? new Date(Date.now() + payload.expires_in * 1000).toISOString()
      : undefined;

  return {
    accessToken: payload.access_token,
    tokenType: payload.token_type,
    expiresAt,
  };
}
