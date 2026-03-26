import type { Metadata } from "next";
import "./globals.css";

const siteName = "合同会社マナビト";
const siteTitle = "合同会社マナビト | 社会を、大きな教室に。";
const siteDescription =
  "合同会社マナビトは、行政支援、視察研修、体験学習、各種セミナーを通じて、子どもから大人まで、すべての人に学びを届けます。";
const siteUrl = "https://example.com";
const ogImage = "/ogp/manabito-ogp.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "合同会社マナビト",
    "地方創生",
    "行政支援",
    "視察研修",
    "体験学習",
    "社員研修",
    "人材育成",
    "地域密着",
    "教育",
    "子ども",
    "若者",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "合同会社マナビト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}