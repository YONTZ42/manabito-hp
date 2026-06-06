import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

import {
  acquireInstagramRefreshLock,
  getInstagramAccessToken,
  getInstagramTokenStoreStatus,
  releaseInstagramRefreshLock,
  setStoredInstagramToken,
} from "@/lib/instagram-token-store";
import {
  hasInstagramRefreshConfig,
  refreshInstagramAccessToken,
} from "@/lib/instagram-token-refresh";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isAuthorized(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET?.trim();

  if (!cronSecret) {
    return false;
  }

  return request.headers.get("authorization") === `Bearer ${cronSecret}`;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const storeStatus = getInstagramTokenStoreStatus();

  if (!storeStatus.configured) {
    return NextResponse.json(
      {
        ok: false,
        error: "Instagram token store is not configured",
        requiredEnv: [
          "UPSTASH_REDIS_REST_URL",
          "UPSTASH_REDIS_REST_TOKEN",
        ],
      },
      { status: 500 },
    );
  }

  if (!hasInstagramRefreshConfig()) {
    return NextResponse.json(
      {
        ok: false,
        error: "Instagram refresh credentials are not configured",
        requiredEnv: ["INSTAGRAM_APP_ID", "INSTAGRAM_APP_SECRET"],
      },
      { status: 500 },
    );
  }

  const lockAcquired = await acquireInstagramRefreshLock();

  if (!lockAcquired) {
    return NextResponse.json(
      { ok: false, error: "Refresh is already running" },
      { status: 409 },
    );
  }

  try {
    const currentAccessToken = await getInstagramAccessToken();

    if (!currentAccessToken) {
      return NextResponse.json(
        {
          ok: false,
          error: "No Instagram access token is available",
          requiredEnv: ["INSTAGRAM_ACCESS_TOKEN"],
        },
        { status: 500 },
      );
    }

    const refreshedToken = await refreshInstagramAccessToken(currentAccessToken);
    const refreshedAt = new Date().toISOString();

    await setStoredInstagramToken({
      accessToken: refreshedToken.accessToken,
      tokenType: refreshedToken.tokenType,
      expiresAt: refreshedToken.expiresAt,
      refreshedAt,
    });
    revalidateTag("instagram-posts", "max");

    return NextResponse.json({
      ok: true,
      refreshedAt,
      expiresAt: refreshedToken.expiresAt,
      store: {
        provider: storeStatus.provider,
        key: storeStatus.key,
      },
    });
  } catch (error) {
    console.error("[Instagram] Token refresh failed:", error);

    return NextResponse.json(
      { ok: false, error: "Instagram token refresh failed" },
      { status: 500 },
    );
  } finally {
    try {
      await releaseInstagramRefreshLock();
    } catch (error) {
      console.error("[Instagram] Failed to release refresh lock:", error);
    }
  }
}
