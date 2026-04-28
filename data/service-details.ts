export type ServiceDetail = {
  slug: string;
  href: `/services/${string}`;
  target: string;
  catchphrase: string;
  description: string;
  heroTitle: string;
  heroLead: string;
  summary: string[];
  offerings: string[];
  flow: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "administration-support",
    href: "/services/administration-support",
    target: "行政職員の方へ",
    catchphrase: "若者とマナブ",
    description: "子ども・若者政策支援コンサルティング",
    heroTitle: "子ども・若者の声を、政策と実践につなぐ伴走支援",
    heroLead:
      "行政現場で求められる対話設計、意見収集、整理、施策化までを一貫して支えるための詳細ページです。現時点では大枠のみを先行実装し、今後コンテンツを拡充します。",
    summary: [
      "子ども・若者の意見反映に向けた対話設計",
      "庁内外の関係者調整を見据えた進行支援",
      "政策検討に活かすための論点整理",
    ],
    offerings: [
      "ヒアリング・ワークショップ設計",
      "意見集約フォーマットの整理",
      "施策化に向けた壁打ち支援",
    ],
    flow: ["課題確認", "対話設計", "実施伴走", "振り返りと次回提案"],
  },
  {
    slug: "inspection-training",
    href: "/services/inspection-training",
    target: "政治家の方へ",
    catchphrase: "事例をマナブ",
    description: "地方議員の行政視察・研修の企画及び運営",
    heroTitle: "先進事例を深く学ぶ、行政視察と研修の設計支援",
    heroLead:
      "視察先の選定、行程づくり、先方調整、当日の運営までを見据えたページの土台です。詳細コンテンツは後続フェーズで追記できる構成にしています。",
    summary: [
      "テーマに沿った視察先候補の整理",
      "移動・滞在を含む無理のない行程設計",
      "学びを持ち帰るための研修構成",
    ],
    offerings: [
      "視察テーマの言語化",
      "受入先との調整サポート",
      "当日運営と事後整理の設計",
    ],
    flow: ["目的設定", "候補調査", "行程調整", "実施と共有"],
  },
  {
    slug: "experiential-learning",
    href: "/services/experiential-learning",
    target: "学校・保護者の方へ",
    catchphrase: "現場でマナブ",
    description: "農業体験や工場見学などの体験型学習の企画及び運営",
    heroTitle: "地域の現場で学ぶ、体験型プログラムの企画と運営",
    heroLead:
      "学校行事や保護者ニーズに合わせた体験学習を想定したページです。学びの目的、地域との接点、安全面の整理などを今後載せやすいレイアウトにしています。",
    summary: [
      "学年や目的に応じた体験テーマ設計",
      "地域事業者との連携を見据えた企画調整",
      "当日の学びを深める振り返り導線",
    ],
    offerings: [
      "訪問先・体験内容の提案",
      "スケジュールと運営導線の整理",
      "学習成果のまとめ支援",
    ],
    flow: ["目的共有", "体験設計", "受入調整", "実施と振り返り"],
  },
  {
    slug: "seminars-training",
    href: "/services/seminars-training",
    target: "企業・学習団体の方へ",
    catchphrase: "講座でマナブ",
    description: "人材育成のための教育研修・セミナーの企画及び実施",
    heroTitle: "人材育成を前に進める、研修とセミナーの企画実装",
    heroLead:
      "企業研修や学習団体向け講座の詳細ページとして、テーマ整理から実施イメージまでの大枠を配置します。今後の営業資料的な役割も持たせやすい構成です。",
    summary: [
      "対象者に合わせた研修テーマの設計",
      "現場課題に接続する学習プログラム化",
      "単発実施にも継続運用にも対応しやすい構成",
    ],
    offerings: [
      "研修テーマとゴール整理",
      "講座構成案の作成",
      "運営体制と実施方法の提案",
    ],
    flow: ["目的整理", "講座設計", "実施準備", "開催と改善提案"],
  },
];

export function getServiceDetailBySlug(slug: string) {
  return serviceDetails.find((detail) => detail.slug === slug);
}
