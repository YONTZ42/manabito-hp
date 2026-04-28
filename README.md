## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Instagram Feed Setup

`InstagramNewsSection` fetches the latest 3 posts from the Instagram Graph API when the following environment variables are set in `.env.local`:

```env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token
INSTAGRAM_USER_ID=your_instagram_business_account_id
INSTAGRAM_PROFILE_URL=https://www.instagram.com/your_account/
INSTAGRAM_GRAPH_API_VERSION=v23.0
```

If these values are missing or the API request fails, the section falls back to local dummy data so the page still renders.

## Notes

- The Instagram Graph API requires a professional Instagram account connected to a Meta app.
- The feed is revalidated hourly on the server.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
