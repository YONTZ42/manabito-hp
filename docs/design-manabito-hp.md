2-1. 全体構成
/app
  /(site)
    page.tsx
    layout.tsx
/components
  /ui
    button.tsx
    section-heading.tsx
    container.tsx
    chip.tsx
    modal.tsx
  /layout
    header.tsx
    footer.tsx
  /sections
    hero-section.tsx
    concerns-section.tsx
    services-section.tsx
    achievements-section.tsx
    instagram-news-section.tsx
    contact-section.tsx
  /cards
    concern-card.tsx
    service-slide-card.tsx
    instagram-post-card.tsx
/lib
  constants.ts
  site.ts
  motion.ts
/data
  services.ts
  concerns.ts
  news.ts
/public
  /images
    /hero
    /services
    /placeholders
/styles
  globals.css


2-2. ページレイアウト
<SiteLayout>
  <Header />
  <main>
    <HeroSection />
    <ConcernsSection />
    <ServicesSection />
    <AchievementsSection />
    <InstagramNewsSection />
    <ContactSection />
  </main>
  <Footer />
</SiteLayout>
2-3. セクションごとの詳細
Header
役割
グローバルナビゲーション
問い合わせ導線
モバイルでのメニュー導線
UI仕様
左: ロゴ
右: お問い合わせボタン、MENUボタン
背景は半透明白 + blur
スクロール時に影を付与
Tailwindイメージ
sticky top-0 z-50
backdrop-blur-md
border-b border-white/40
bg-white/75
HeroSection
役割
理念と第一印象の訴求
サイト全体の空気感を決める
構成
左または上: デザイン文字画像
右または下: キャッチコピー本文
背景にやわらかい図形装飾
セクション下部に軽い波・ドット・丸などを配置
モバイル
縦並び
画像上、文章下
PC
2カラム
画像 45%
テキスト 55%
文言
H1: 社会を、大きな教室に。
リード文: 指定文章を表示
アニメーション
フェードイン
背景の円や波がゆるく浮遊
ConcernsSection
役割
ユーザーの悩みを自分ごと化させる
表示方式
3カード
各カードに番号、短い悩み、補足1文
表示文例
子ども・若者の声を、どう集めて形にすればいいかわからない
行政の先進事例を学びたいが、視察の調整が大変
体験学習や研修をしたいが、企画や地域連携まで手が回らない
レイアウト
モバイル: 1カラム
タブレット以上: 3カラム
背景
ポップな装飾あり
Heroとは逆方向の模様を入れる
ServicesSection
役割
課題に対する解決策を視覚的に見せる
表示方式
横スライド
自動ループ
スワイプ・矢印操作も想定できる設計
初期はCSS + 軽量JSで可
カード仕様
コンポーネント名: ServiceSlideCard
高さを十分に確保
画像エリア 70%
テキストエリア 30%
props
type ServiceSlideCardProps = {
  title: string
  description: string
  imageSrc: string
  accentTone?: "mint" | "sky" | "peach" | "lemon" | "lavender"
}
サンプル項目
子ども・若者からの意見を聞きたい
行政の先進事例やサービスを知りたい
専門家から専門知識を学びたい
地域密着の体験学習をしたい
社員研修や人材育成をしたい
背景
セクション全体に淡色帯
コダテル系の楽しさは残しつつ、行政向けにやや整える
参考サイトでも「利用イメージ」「できること」を視覚的なカード群で見せています。
AchievementsSection
役割
代表個人の信頼感を補強する
初期仕様
プレースホルダー用セクション
写真枠、肩書き、実績概要3項目のダミー表示
将来の差し替え前提
UI
明るい白背景
柔らかい角丸
写真 + テキストの2カラム
実績チップを並べる
InstagramNewsSection
役割
活動の継続性を見せる
SNS導線と最新情報をまとめる
初期仕様
左: Instagram投稿ダミーカード3件
右: お知らせダミーカード3件
モバイルでは縦並び
将来仕様
Instagram Graph API 連携
CMSまたは静的配列から NEWS 表示

参考サイトでも「最新情報」とInstagram導線が比較的近い文脈で用意されています。

ContactSection
役割
最終CV導線
UI
セクション見出し
説明文
2つのボタン
電話する
フォームで問い合わせる
仕様
電話ボタン: href="tel:xxx-xxxx-xxxx"
フォームボタン: モーダル開閉
モーダルは初期はダミー

参考サイトも電話・フォームの両導線を同一セクションに置いています。

3. デザインシステム設計

ファイル名案: docs/design-system-manabito.md

3-1. デザイン方針
地域密着感
親しみやすさ
行政・教育でも違和感のない信頼感
柔らかいが幼すぎない
ポップさは背景装飾で出し、本文は上品に整える
3-2. カラーパレット

codateru.com は楽しさと親しみを感じる構成ですが、マナビトではそこに行政・教育向けの落ち着きを足します。

推奨カラー
primary: #2E6F67
primary-soft: #D9ECE8
secondary: #F2C66D
accent-peach: #F6D7C3
accent-sky: #D7EBF7
accent-lime: #E5F0CF
bg-base: #FBF8F1
surface: #FFFFFF
text-main: #243533
text-sub: #5A6B68
border-soft: #DCE7E3
セクション背景ルール
奇数セクション: bg-base
偶数セクション: surface
背景装飾は accent-peach / accent-sky / accent-lime を交互に使用
3-3. タイポグラフィ
フォント方針

柔らかく読みやすい日本語フォントを中心にする。

推奨
見出し: Zen Kaku Gothic New または Noto Sans JP
本文: Noto Sans JP
英字アクセント: Outfit または Poppins
文字サイズ
h1: 36 / 48 / 64
h2: 28 / 36 / 44
h3: 22 / 26 / 30
body-lg: 18 / 20
body: 16 / 18
caption: 13 / 14
行間
見出し: 1.2〜1.35
本文: 1.75 前後
3-4. 余白設計
section vertical: py-16 md:py-24
container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
card padding: p-5 md:p-7
gap: gap-4 md:gap-6 lg:gap-8
3-5. 角丸・影
rounded-2xl を基本
主要カードは rounded-[28px]
シャドウは薄く
強い立体感よりもやさしい浮き感
3-6. ボタン設計
Button variants
primary
secondary
ghost
Button sizes
sm
md
lg
見た目
Primary: 深緑ベース、白文字
Secondary: 白背景、深緑枠
Ghost: テキストのみ or 薄背景
使用先
ヘッダー
お問い合わせ
モーダル
サービス導線
3-7. 背景装飾

ユーザー要望にある「セクション毎に交互にポップな背景」を、以下で統一する。

装飾パターン案
波線
ゆるいドット
半透明の丸
紙の切り抜き風 blob
手描き風アンダーライン
ルール
1セクションにつき主装飾1〜2種類
テキスト背後には置きすぎない
コンテンツの可読性を最優先
4. Tailwind 設定案
tailwind.config.ts イメージ
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2E6F67",
          soft: "#D9ECE8",
        },
        accent: {
          yellow: "#F2C66D",
          peach: "#F6D7C3",
          sky: "#D7EBF7",
          lime: "#E5F0CF",
        },
        base: {
          bg: "#FBF8F1",
          surface: "#FFFFFF",
          border: "#DCE7E3",
        },
        text: {
          main: "#243533",
          sub: "#5A6B68",
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        heading: ["Zen Kaku Gothic New", "Noto Sans JP", "sans-serif"],
        latin: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(36, 53, 51, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(46,111,103,0.08) 1px, transparent 0)",
      },
      backgroundSize: {
        "hero-grid": "24px 24px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;

5. コンポーネント設計
Button
type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
利用箇所
ヘッダー
お問い合わせ
フォームモーダル
スクロール導線
SectionHeading
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}
ServiceSlideCard
type ServiceSlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  accentTone?: "mint" | "sky" | "peach" | "lemon" | "lavender";
}
Modal
type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
6. データ定義案
data/services.ts
export const services = [
  {
    title: "子ども・若者からの意見を聞きたい",
    description: "声を集める場づくりから、意見整理、活用の設計まで支援します。",
    imageSrc: "/images/services/service-01.jpg",
    accentTone: "mint",
  },
  {
    title: "行政の先進事例やサービスを知りたい",
    description: "視察や現地ヒアリングの企画調整を通じて、学びの機会をつくります。",
    imageSrc: "/images/services/service-02.jpg",
    accentTone: "sky",
  },
  {
    title: "専門家から専門知識を学びたい",
    description: "分野ごとの専門家とつながり、実務に活かせる学びを届けます。",
    imageSrc: "/images/services/service-03.jpg",
    accentTone: "peach",
  },
  {
    title: "地域密着の体験学習をしたい",
    description: "地域ならではの学びや現場体験を設計し、深い理解を促します。",
    imageSrc: "/images/services/service-04.jpg",
    accentTone: "lemon",
  },
  {
    title: "社員研修や人材育成をしたい",
    description: "企業や団体に合わせた研修設計で、現場に活きる学びを支援します。",
    imageSrc: "/images/services/service-05.jpg",
    accentTone: "lavender",
  },
];
7. SEO設計
metadata
title: 合同会社マナビト | 社会を、大きな教室に。
description: 合同会社マナビトは、行政支援、視察研修、体験学習、各種セミナーを通じて、子どもから大人まで、すべての人に学びを届けます。
og:title
og:description
og:image
twitter:card
構造
h1 は Hero のみ
各セクションは h2
カード内は h3
キーワード観点
地方創生
行政支援
視察研修
体験学習
社員研修
人材育成
地域密着
子ども 若者 意見反映
8. アニメーション方針

初期フェーズは、機能実装より見せ方を重視するので、以下だけに絞るのがいいです。

Hero 背景のゆるい浮遊アニメーション
Services の自動横スライド
セクション表示時の fade-up
ボタン hover
モーダル開閉アニメーション

やりすぎると行政・教育向けの信頼感を壊すので、動きは軽く抑えるべきです。

9. 実装優先順位
Phase 1
Next.js 雛形
layout / page / セクション構成
Tailwind デザインシステム
Header / Hero / Concerns / Services / Contact
背景装飾
ダミーデータ反映
Phase 2
Achievements / InstagramNews セクション強化
モーダル見た目実装
自動スライド改善
アニメーション調整
Phase 3
Instagram API 連携
問い合わせフォーム機能
CMS または管理用データ更新導線
本番SEO微調整
