# デザインリフレッシュ設計書

codateru.com を参考に、マナビトの現デザインシステム（カラー・フォント）を維持しつつ、**ポップさ・楽しさ・動き**を加える改善設計。

---

## 1. 現状の課題

| 領域 | 現状 | 課題 |
|------|------|------|
| セクション間の区切り | 背景色の切り替えのみ | 単調。セクション同士の「流れ」がない |
| 背景装飾 | blur丸・ドットグリッドのみ | 控えめすぎてポップさがない |
| スクロールアニメーション | fadeUp（全要素同一） | 動きが単調。緩急がない |
| カードホバー | border色変化 + shadow強化 | 変化が小さく、インタラクティブ感が弱い |
| ボタン | 控えめなlift（-0.5） | CTAとしてのインパクトが薄い |
| タイポグラフィ | サイズ差が小さめ | 見出しの「引き」が弱い。メリハリ不足 |
| 色の使い方 | brand（青緑）中心 | accent系（yellow, peach, sky, lime）が活かされていない |
| 全体の印象 | 整っているが静的 | 「信頼感」はあるが「楽しさ・親しみ」が足りない |

---

## 2. 改善方針

### コンセプト

> **「信頼感はそのまま、ワクワクを足す」**

行政・教育向けの品の良さは崩さず、codateru.comのような**視覚的な楽しさと躍動感**を加える。やりすぎない。

### 3原則

1. **色で遊ぶ** — accent-yellow / peach / sky / lime をセクションごとに効かせる
2. **動きで誘う** — スクロール連動の多彩なアニメーション。ただし軽量に
3. **形で崩す** — 直線・矩形だけでなく、波線・blob・丸で柔らかさを出す

---

## 3. セクション間の区切り — SVG波線ディバイダー

### 現状

セクション間は背景色の切り替えのみ。硬い印象。

### 改善

**SVGの波線（wave divider）をセクション間に配置する。**

```
セクションA（bg-base-bg）
  └─ wave-divider（A色→B色のグラデ波線）
セクションB（bg-white）
  └─ wave-divider（B色→C色のグラデ波線）
セクションC（bg-brand-soft/20）
```

### 実装

共通コンポーネント `WaveDivider` を作成:

```tsx
// components/ui/wave-divider.tsx
type WaveDividerProps = {
  fillColor?: string;       // 波の色（次セクションの背景色）
  variant?: "wave" | "curve" | "slant";
  flip?: boolean;           // 上下反転
  className?: string;
};
```

波形パターンは3種類を用意し、セクションごとに交互使用:
- **wave**: ゆるい波（Hero→Concerns間）
- **curve**: 大きなアーチ（Services→ServiceDetails間）
- **slant**: 斜めカット（Achievements→Instagram間）

### 配色ルール

| 位置 | 上セクション背景 | 波の色 | 下セクション背景 |
|------|-----------------|--------|-----------------|
| Hero → Concerns | bg-soft-radial | white | bg-white |
| Concerns → Services | bg-white | bg-base-bg | bg-base-bg |
| Services → Details | bg-base-bg | white | bg-white |
| Details → Achievements | bg-white | bg-brand-soft/20 | bg-brand-soft/20 |
| Achievements → Instagram | bg-brand-soft/20 | bg-base-bg | bg-base-bg |
| Instagram → Contact | bg-base-bg | bg-brand | bg-brand |

---

## 4. 背景装飾の強化

### 現状

- `hero-decor-circle`: blur 丸（2個程度）
- `bg-hero-grid`: ドットパターン
- `bg-soft-radial`: ラジアルグラデーション

### 追加する装飾要素

#### A. フローティング図形（animated floating shapes）

各セクションに1〜3個の装飾図形を配置。`animate-floaty` の派生で異なる周期・振幅を持たせる。

```css
/* globals.css に追加 */
@keyframes floaty-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes floaty-fast {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-2deg); }
}
```

図形バリエーション:
- **丸**: accent色、blur-2xl、opacity 0.3〜0.5
- **角丸四角**: accent色、rotate、opacity 0.2〜0.4
- **ドーナツ**: border のみ（塗りなし）、brand-soft

#### B. アクセントカラーの帯（セクション背景のグラデーション）

各セクションの背景に、accentカラーのラジアルグラデーションを薄く敷く:

```css
.bg-section-peach {
  background-image: radial-gradient(
    ellipse at 80% 20%, rgba(246, 215, 195, 0.35), transparent 50%
  );
}

.bg-section-sky {
  background-image: radial-gradient(
    ellipse at 20% 80%, rgba(215, 235, 247, 0.35), transparent 50%
  );
}

.bg-section-lime {
  background-image: radial-gradient(
    ellipse at 60% 30%, rgba(229, 240, 207, 0.35), transparent 50%
  );
}

.bg-section-yellow {
  background-image: radial-gradient(
    ellipse at 30% 70%, rgba(245, 200, 76, 0.2), transparent 50%
  );
}
```

セクションごとの割り当て:

| セクション | アクセント背景 |
|------------|---------------|
| Hero | bg-soft-radial（現状維持） |
| Concerns | bg-section-peach |
| Services | bg-section-sky |
| ServiceDetails | bg-section-lime |
| Achievements | bg-section-yellow |
| Instagram/News | なし（クリーン） |
| Contact | bg-brand（ダーク背景） |

---

## 5. スクロールアニメーションの多彩化

### 現状

全要素が同一の `fadeUp`（translateY + opacity）。

### 改善

3パターンのアニメーションを用意し、要素の種類によって使い分ける。

#### アニメーションパターン

```css
/* パターン1: fadeUp（現状維持） — テキスト・見出し */
/* 既存の translateY(16px) → 0, opacity 0 → 1 */

/* パターン2: fadeScale — カード */
@keyframes fadeScale {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* パターン3: fadeSlide — 画像・装飾 */
@keyframes fadeSlideLeft {
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeSlideRight {
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
}
```

#### 適用ルール

| 要素 | アニメーション | スタガー |
|------|--------------|---------|
| セクション見出し | fadeUp | なし（即時） |
| セクション説明文 | fadeUp | 100ms遅延 |
| カード群 | fadeScale | 各カード100ms刻み |
| 代表写真 | fadeSlideLeft | なし |
| 代表ストーリー | fadeSlideRight | なし |
| 装飾図形 | fadeUp（ゆっくり） | なし |

#### スタガー（カード表示のずらし）

カードが複数並ぶセクション（Concerns, Services, ServiceDetails）で、各カードの表示を100msずつずらす:

```tsx
// IntersectionObserver のコールバック内
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    const cards = entry.target.querySelectorAll("[data-animate-card]");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("animate-in");
      }, i * 100);
    });
  }
});
```

---

## 6. カードデザインの強化

### 6-1. ConcernCard

**現状:** border変化 + shadow変化
**改善:**

```
ホバー時:
  - translateY(-4px)           ← カードが浮く
  - shadow-strong              ← 影が深くなる
  - border-brand/30            ← 枠がブランドカラーに
  - 左側に accent-yellow の縦線（4px）がスライドイン
```

番号バッジ（01, 02...）のデザイン強化:
- 現状: brand背景の四角
- 改善: **丸型（rounded-full）**, **サイズ拡大（h-12 w-12）**, **フォントサイズ拡大**

### 6-2. ServiceSlideCard

**現状:** 基本的な角丸カード
**改善:**

```
ホバー時:
  - scale(1.02)               ← わずかに拡大
  - shadow が広がる
  - 画像が scale(1.05) でズーム（overflow-hidden でマスク）
```

### 6-3. ServiceDetailCard（For Youセクション）

**改善:**
```
通常:
  - 左端に accentカラーの縦帯（4px, 各サービスで色を変える）
  - アイコンの背景を accent色の薄い丸に

ホバー時:
  - translateY(-4px) + shadow拡大
  - アイコンが scale(1.1) + rotate(5deg)
  - 縦帯が 4px → 6px に太くなる
```

---

## 7. ボタンデザインの強化

### 現状

```
primary: bg-brand, hover: -translate-y-0.5, opacity-95
```

### 改善

```css
/* Primary Button */
.btn-primary {
  /* 基本 */
  background: var(--brand);
  box-shadow: 0 4px 14px rgba(46, 111, 103, 0.25);

  /* ホバー */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 111, 103, 0.35);
  }

  /* アクティブ（押下時） */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(46, 111, 103, 0.2);
  }
}

/* Yellow CTA（問い合わせ用の目立つボタン） */
.btn-cta {
  background: var(--accent-yellow);
  color: var(--text-main);
  box-shadow: 0 4px 14px rgba(245, 200, 76, 0.35);

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(245, 200, 76, 0.45);
  }
}
```

問い合わせCTAには `btn-cta`（黄色）を使い、通常のナビゲーションボタンと視覚的に差別化する。

---

## 8. タイポグラフィの強化

### 8-1. 見出しのメリハリ

**現状:** h2が `text-3xl md:text-4xl` で本文との差が小さい

**改善:**

| 要素 | 現状 | 改善後 |
|------|------|--------|
| h1（Hero） | text-3xl md:text-5xl | text-4xl md:text-6xl lg:text-7xl |
| h2（セクション） | text-3xl md:text-4xl | text-3xl md:text-5xl |
| Eyebrow | text-sm tracking-wider | text-xs tracking-[0.3em]（もう少し小さく、広く） |

### 8-2. テキストハイライト表現の追加

codateru.comのように、見出し内のキーワードを視覚的に強調する:

```css
/* 蛍光マーカー風 */
.highlight-marker {
  background: linear-gradient(transparent 60%, rgba(245, 200, 76, 0.4) 60%);
  font-weight: 700;
}

/* 波線下線 */
.underline-wavy {
  text-decoration: underline wavy var(--brand);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

/* ブランドカラーの太下線 */
.underline-accent {
  background: linear-gradient(transparent 70%, rgba(46, 111, 103, 0.15) 70%);
  font-weight: 700;
}
```

---

## 9. Contactセクションの強化

### 現状

白背景にボタン2つ。他のセクションと差がなく、CTAとしてのインパクトが弱い。

### 改善

**ダーク背景（brand色）に切り替え、セクション全体をCTAブロック化する。**

```
背景: bg-brand（深い青緑）
テキスト: 白
装飾: accent-yellow の丸 + accent-sky の丸（floaty）
ボタン: 
  - 電話 → 白背景、brand色テキスト
  - フォーム → accent-yellow背景、text-main色テキスト（最も目立つ）
```

構成:
```
┌────────────────────────────────────┐
│  bg-brand（暗い背景）               │
│                                    │
│    「まずはお気軽にご相談ください」    │
│    説明テキスト（白/半透明）          │
│                                    │
│    [📞 電話する]  [✉ フォームで相談]  │
│                                    │
│  ○ (accent-yellow, floaty)         │
│           ○ (accent-sky, floaty)   │
└────────────────────────────────────┘
```

---

## 10. セクション別の背景カラーリズム

codateru.comの「セクションごとに雰囲気が変わる」感を、背景色の交互切り替えで表現:

```
Hero        → bg-soft-radial（マルチカラーグラデ）
  wave-divider
Concerns    → bg-white + bg-section-peach
  wave-divider
Services    → bg-base-bg + bg-section-sky
  wave-divider
Details     → bg-white + bg-section-lime
  wave-divider
Achievements → bg-base-bg + bg-section-yellow
  wave-divider
Instagram   → bg-white
  wave-divider
Contact     → bg-brand（ダーク反転）
```

---

## 11. 追加するCSSアニメーション一覧

globals.css に追加するキーフレーム:

```css
/* 浮遊バリエーション */
@keyframes floaty-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes floaty-reverse {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(8px) rotate(-2deg); }
}

/* カード表示 */
@keyframes fadeScale {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* 横スライド表示 */
@keyframes fadeSlideLeft {
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeSlideRight {
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
}

/* パルス（CTA強調） */
@keyframes pulse-soft {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 200, 76, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(245, 200, 76, 0); }
}
```

Tailwindアニメーション定義の追加:

```
floaty-slow: "floaty-slow 8s ease-in-out infinite"
floaty-reverse: "floaty-reverse 7s ease-in-out infinite"
fadeScale: "fadeScale 0.6s ease-out both"
fadeSlideLeft: "fadeSlideLeft 0.7s ease-out both"
fadeSlideRight: "fadeSlideRight 0.7s ease-out both"
pulse-soft: "pulse-soft 2s ease-in-out infinite"
```

---

## 12. 新規コンポーネント

| コンポーネント | 用途 |
|--------------|------|
| `WaveDivider` | セクション間の波線区切り |
| `FloatingShape` | 背景装飾の浮遊図形（丸、四角、ドーナツ） |
| `AnimateOnScroll` | スクロール連動アニメーションのラッパー（パターン選択可） |

---

## 13. 実装の優先順位

### Phase 1: 全体の雰囲気を変える（効果 大 / 工数 小）

1. **Contactセクションのダーク背景化**
   - bg-brand背景 + 白テキスト + 装飾図形
   - CTAのインパクトが劇的に向上

2. **セクション背景のアクセントカラー追加**
   - globals.css に `.bg-section-*` を追加
   - 各セクションに className を追加するだけ

3. **カードホバーの強化**
   - translateY(-4px), shadow拡大, 画像ズーム
   - Tailwindクラスの追加のみ

### Phase 2: 動きを加える（効果 大 / 工数 中）

4. **スクロールアニメーションの多彩化**
   - `AnimateOnScroll` コンポーネント作成
   - fadeUp / fadeScale / fadeSlide の使い分け
   - カード群のスタガー表示

5. **背景装飾の追加**
   - `FloatingShape` コンポーネント作成
   - 各セクションに1〜3個配置

### Phase 3: 仕上げ（効果 中 / 工数 中）

6. **WaveDivider の実装**
   - SVG波線コンポーネント作成
   - 全セクション間に配置

7. **タイポグラフィの調整**
   - 見出しサイズの拡大
   - ハイライト表現の適用

8. **ボタンデザインの強化**
   - shadow追加、hover/activeステートの改善
   - CTA用 yellow ボタンの強化
