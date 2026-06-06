## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Instagram Feed Setup

`InstagramNewsSection` fetches the latest 3 posts from the Instagram Graph API.
The feed reads the access token from Upstash Redis first, then falls back to
`INSTAGRAM_ACCESS_TOKEN` for initial setup or storage outages.

```env
# Required for displaying the feed
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token
INSTAGRAM_USER_ID=your_instagram_business_account_id
INSTAGRAM_PROFILE_URL=https://www.instagram.com/your_account/
INSTAGRAM_GRAPH_API_VERSION=v23.0

# Required for twice-monthly token refresh on Vercel Cron
INSTAGRAM_APP_ID=your_meta_app_id
INSTAGRAM_APP_SECRET=your_meta_app_secret
CRON_SECRET=generate_a_random_32+_character_secret

# Required token store. Prefer the current Vercel Marketplace Upstash Redis envs.
UPSTASH_REDIS_REST_URL=https://your-upstash-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_standard_token

# Optional. Used only when you already have legacy Vercel KV envs.
KV_REST_API_URL=https://your-kv-instance.upstash.io
KV_REST_API_TOKEN=your_kv_token

# Optional. Defaults to manabito:instagram:access-token
INSTAGRAM_TOKEN_STORE_KEY=manabito:instagram:access-token
```

If these values are missing or the API request fails, the section falls back to local dummy data so the page still renders.

### Instagram Token Refresh

Vercel Cron calls `GET /api/instagram/refresh-token` on the 1st and 15th of
each month at 03:00 UTC. The route requires `Authorization: Bearer $CRON_SECRET`,
refreshes the current Graph API token with Meta, writes the new token to Redis,
and revalidates the `instagram-posts` cache tag.

Safe environment variable handling:

- Keep every Instagram, Redis, and cron value server-only. Do not prefix them
  with `NEXT_PUBLIC_`.
- Mark `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_APP_SECRET`,
  `UPSTASH_REDIS_REST_TOKEN` / `KV_REST_API_TOKEN`, and `CRON_SECRET` as
  sensitive values in Vercel.
- Keep `INSTAGRAM_ACCESS_TOKEN` as a bootstrap fallback. After the first
  successful cron run, the live token is read from Redis.
- Rotate `CRON_SECRET` and Redis tokens if they are exposed in logs, local files,
  screenshots, or chat tools.
- The old Vercel KV product has been replaced by Marketplace Redis providers.
  For new projects, use Upstash Redis and the `UPSTASH_REDIS_REST_*` variables.

## Notes

- The Instagram Graph API requires a professional Instagram account connected to a Meta app.
- The feed is revalidated hourly on the server.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
