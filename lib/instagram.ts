import "server-only";

import { instagramPosts } from "@/data/instagram-posts";
import { getInstagramAccessToken } from "@/lib/instagram-token-store";

const INSTAGRAM_GRAPH_API_VERSION =
  process.env.INSTAGRAM_GRAPH_API_VERSION ?? "v23.0";
const INSTAGRAM_POST_LIMIT = 3;
const INSTAGRAM_REVALIDATE_SECONDS = 60 * 60;
const INSTAGRAM_FALLBACK_PROFILE_URL = "https://www.instagram.com/";

type InstagramApiMedia = {
  id: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
  username?: string;
};

type InstagramApiResponse = {
  data?: InstagramApiMedia[];
};

type InstagramApiErrorResponse = {
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
  };
};

export type InstagramPost = {
  id: string;
  title: string;
  date: string;
  caption?: string;
  imageUrl?: string;
  permalink?: string;
  mediaType?: string;
};

export type InstagramFeed = {
  posts: InstagramPost[];
  profileUrl: string;
  isFallback: boolean;
};

function getProfileUrl(username?: string) {
  const configuredProfileUrl = process.env.INSTAGRAM_PROFILE_URL?.trim();

  if (configuredProfileUrl) {
    return configuredProfileUrl;
  }

  if (username) {
    return `https://www.instagram.com/${username}/`;
  }

  return INSTAGRAM_FALLBACK_PROFILE_URL;
}

function formatInstagramDate(value?: string) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getCaptionTitle(caption?: string) {
  const normalized = caption?.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "Instagram の投稿を見る";
  }

  return normalized.slice(0, 72);
}

function buildFallbackFeed(): InstagramFeed {
  return {
    posts: instagramPosts.map((post, index) => ({
      id: `fallback-${index}`,
      title: post.title,
      date: post.date,
    })),
    profileUrl: getProfileUrl(),
    isFallback: true,
  };
}

export async function getInstagramFeed(): Promise<InstagramFeed> {
  const accessToken = await getInstagramAccessToken();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!accessToken || !userId) {
    console.warn("[Instagram] Feed fallback: missing access token or user ID");
    return buildFallbackFeed();
  }

  const searchParams = new URLSearchParams({
    fields:
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username",
    limit: String(INSTAGRAM_POST_LIMIT),
    access_token: accessToken,
  });

  try {
    const response = await fetch(
      `https://graph.facebook.com/${INSTAGRAM_GRAPH_API_VERSION}/${userId}/media?${searchParams.toString()}`,
      {
        next: {
          revalidate: INSTAGRAM_REVALIDATE_SECONDS,
          tags: ["instagram-posts"],
        },
      },
    );

    if (!response.ok) {
      const errorPayload = (await response.json().catch(
        () => undefined,
      )) as InstagramApiErrorResponse | undefined;
      const error = errorPayload?.error;
      const details = [
        error?.message,
        error?.type ? `type=${error.type}` : undefined,
        typeof error?.code === "number" ? `code=${error.code}` : undefined,
        typeof error?.error_subcode === "number"
          ? `subcode=${error.error_subcode}`
          : undefined,
      ]
        .filter(Boolean)
        .join(" ");

      throw new Error(
        `Instagram API request failed with ${response.status}${
          details ? `: ${details}` : ""
        }`,
      );
    }

    const payload = (await response.json()) as InstagramApiResponse;
    const posts =
      payload.data?.slice(0, INSTAGRAM_POST_LIMIT).map((post) => ({
        id: post.id,
        title: getCaptionTitle(post.caption),
        date: formatInstagramDate(post.timestamp),
        caption: post.caption?.trim(),
        imageUrl:
          post.media_type === "VIDEO"
            ? post.thumbnail_url ?? post.media_url
            : post.media_url,
        permalink: post.permalink,
        mediaType: post.media_type,
      })) ?? [];

    if (posts.length === 0) {
      return buildFallbackFeed();
    }

    return {
      posts,
      profileUrl: getProfileUrl(payload.data?.[0]?.username),
      isFallback: false,
    };
  } catch (error) {
    console.error("[Instagram] Feed fetch failed:", error);
    return buildFallbackFeed();
  }
}
