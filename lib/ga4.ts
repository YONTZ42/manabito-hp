import "server-only";

import { createSign } from "node:crypto";

type DashboardMetric = {
  label: string;
  value: string;
  change: string;
};

type TrendPoint = {
  date: string;
  activeUsers: number;
};

type TopPage = {
  path: string;
  views: number;
  users: number;
};

type TrafficSource = {
  source: string;
  users: number;
  sessions: number;
};

export type Ga4DashboardData =
  | {
      status: "ready";
      propertyId: string;
      rangeLabel: string;
      updatedAt: string;
      summary: DashboardMetric[];
      trend: TrendPoint[];
      topPages: TopPage[];
      trafficSources: TrafficSource[];
    }
  | {
      status: "missing-config";
      missingKeys: string[];
    }
  | {
      status: "error";
      message: string;
    };

type RunReportResponse = {
  rows?: Array<{
    dimensionValues?: Array<{ value?: string }>;
    metricValues?: Array<{ value?: string }>;
  }>;
};

const GA_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const GA_DATA_API_BASE = "https://analyticsdata.googleapis.com/v1beta";

function base64UrlEncode(input: string | Buffer) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createJwtAssertion(clientEmail: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: GA_SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(privateKey, "base64");
  const encodedSignature = signature
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

  return `${unsignedToken}.${encodedSignature}`;
}

async function getAccessToken(clientEmail: string, privateKey: string) {
  const assertion = createJwtAssertion(clientEmail, privateKey);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to get Google access token: ${await response.text()}`);
  }

  const json = (await response.json()) as { access_token?: string };
  if (!json.access_token) {
    throw new Error("Google access token was not returned.");
  }

  return json.access_token;
}

async function runReport(
  propertyId: string,
  accessToken: string,
  body: Record<string, unknown>,
) {
  const response = await fetch(
    `${GA_DATA_API_BASE}/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`GA4 report request failed: ${await response.text()}`);
  }

  return (await response.json()) as RunReportResponse;
}

function parseNumber(value?: string) {
  return Number(value ?? "0");
}

function formatInteger(value: number) {
  return new Intl.NumberFormat("ja-JP").format(Math.round(value));
}

function formatPercent(current: number, previous: number) {
  if (previous === 0 && current === 0) {
    return "0%";
  }

  if (previous === 0) {
    return "+100%";
  }

  const diff = ((current - previous) / previous) * 100;
  const rounded = Math.round(diff * 10) / 10;
  const sign = rounded > 0 ? "+" : "";
  return `${sign}${rounded}%`;
}

function formatDateLabel(value: string) {
  if (value.length !== 8) {
    return value;
  }

  const year = value.slice(0, 4);
  const month = value.slice(4, 6);
  const day = value.slice(6, 8);
  return `${year}/${month}/${day}`;
}

export async function getGa4DashboardData(): Promise<Ga4DashboardData> {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GA4_CLIENT_EMAIL;
  const privateKey = process.env.GA4_PRIVATE_KEY?.replace(/\\n/g, "\n");

  const configEntries: Array<[string, string | undefined]> = [
    ["NEXT_PUBLIC_GA_MEASUREMENT_ID", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID],
    ["GA4_PROPERTY_ID", propertyId],
    ["GA4_CLIENT_EMAIL", clientEmail],
    ["GA4_PRIVATE_KEY", privateKey],
  ];

  const missingKeys = configEntries
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    return {
      status: "missing-config",
      missingKeys,
    };
  }

  try {
    const accessToken = await getAccessToken(clientEmail!, privateKey!);

    const [summaryReport, trendReport, topPagesReport, trafficSourcesReport] =
      await Promise.all([
        runReport(propertyId!, accessToken, {
          dateRanges: [
            { startDate: "28daysAgo", endDate: "today" },
            { startDate: "56daysAgo", endDate: "29daysAgo" },
          ],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" },
            { name: "engagementRate" },
          ],
        }),
        runReport(propertyId!, accessToken, {
          dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
          dimensions: [{ name: "date" }],
          metrics: [{ name: "activeUsers" }],
          orderBys: [{ dimension: { dimensionName: "date" } }],
        }),
        runReport(propertyId!, accessToken, {
          dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
          dimensions: [{ name: "pagePath" }],
          metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 8,
        }),
        runReport(propertyId!, accessToken, {
          dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
          dimensions: [{ name: "sessionSource" }],
          metrics: [{ name: "activeUsers" }, { name: "sessions" }],
          orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
          limit: 8,
        }),
      ]);

    const summaryValues =
      summaryReport.rows?.[0]?.metricValues?.map((item) => parseNumber(item.value)) ?? [];

    const activeUsers = summaryValues[0] ?? 0;
    const activeUsersPrevious = summaryValues[1] ?? 0;
    const pageViews = summaryValues[2] ?? 0;
    const pageViewsPrevious = summaryValues[3] ?? 0;
    const sessions = summaryValues[4] ?? 0;
    const sessionsPrevious = summaryValues[5] ?? 0;
    const engagementRate = summaryValues[6] ?? 0;
    const engagementRatePrevious = summaryValues[7] ?? 0;

    return {
      status: "ready",
      propertyId: propertyId!,
      rangeLabel: "直近28日間",
      updatedAt: new Date().toLocaleString("ja-JP", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      summary: [
        {
          label: "アクティブユーザー",
          value: formatInteger(activeUsers),
          change: formatPercent(activeUsers, activeUsersPrevious),
        },
        {
          label: "ページビュー",
          value: formatInteger(pageViews),
          change: formatPercent(pageViews, pageViewsPrevious),
        },
        {
          label: "セッション",
          value: formatInteger(sessions),
          change: formatPercent(sessions, sessionsPrevious),
        },
        {
          label: "エンゲージメント率",
          value: `${(engagementRate * 100).toFixed(1)}%`,
          change: formatPercent(engagementRate, engagementRatePrevious),
        },
      ],
      trend:
        trendReport.rows?.map((row) => ({
          date: formatDateLabel(row.dimensionValues?.[0]?.value ?? ""),
          activeUsers: parseNumber(row.metricValues?.[0]?.value),
        })) ?? [],
      topPages:
        topPagesReport.rows?.map((row) => ({
          path: row.dimensionValues?.[0]?.value || "/",
          views: parseNumber(row.metricValues?.[0]?.value),
          users: parseNumber(row.metricValues?.[1]?.value),
        })) ?? [],
      trafficSources:
        trafficSourcesReport.rows?.map((row) => ({
          source: row.dimensionValues?.[0]?.value || "(direct)",
          users: parseNumber(row.metricValues?.[0]?.value),
          sessions: parseNumber(row.metricValues?.[1]?.value),
        })) ?? [],
    };
  } catch (error) {
    console.error("GA4 dashboard error:", error);

    return {
      status: "error",
      message:
        error instanceof Error
          ? error.message
          : "GA4 データの取得に失敗しました。",
    };
  }
}
