export type ServiceDetail = {
  slug: string;
  href: `/services/${string}`;
  target: string;
  catchphrase: string;
  description: string;
  heroTitle: string;
  heroLead: string;
  /** お悩みとの接続 — このサービスが解決する課題 */
  painPoints: string[];
  summary: string[];
  offerings: { title: string; description: string }[];
  flow: { step: string; description: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "administration-support",
    href: "/services/administration-support",
    target: "行政職員の方へ",
    catchphrase: "若者とマナブ",
    description: "子ども・若者政策支援コンサルティング",
    heroTitle: "子ども・若者の声を、\n政策と実践につなぐ伴走支援",
    heroLead:
      "こども基本法の施行で求められる「子どもの意見反映」。対話の場の設計から意見の整理、施策への落とし込みまで、行政現場に寄り添いながら一貫して伴走します。",
    painPoints: [
      "こどもの声を集めたいが、どう形にすればいいかわからない",
      "若者政策を進めたいが、何から始めればいいかわからない",
    ],
    summary: [
      "こども基本法第11条に対応した対話設計と意見収集",
      "庁内外の関係者を巻き込む合意形成の支援",
      "集めた声を施策に落とし込む論点整理と提案",
    ],
    offerings: [
      {
        title: "対話の場の設計・ファシリテーション",
        description: "子ども・若者が安心して意見を出せるワークショップや座談会を設計し、当日の進行も担います。",
      },
      {
        title: "意見の集約・可視化レポート",
        description: "集まった声をテーマごとに整理し、庁内説明や議会報告に使えるレポートとして納品します。",
      },
      {
        title: "施策化に向けた壁打ち・伴走",
        description: "「集めた意見をどう施策にするか」を一緒に考え、実現までのロードマップ策定を支援します。",
      },
    ],
    flow: [
      { step: "ヒアリング", description: "現状の課題と目指すゴールを共有し、対話設計の方向性を固めます。" },
      { step: "対話設計", description: "対象者・テーマ・形式を決め、当日のプログラムを設計します。" },
      { step: "実施・伴走", description: "ワークショップの運営と、リアルタイムでの意見記録を行います。" },
      { step: "報告・次回提案", description: "成果レポートを納品し、次のアクションを提案します。" },
    ],
  },
  {
    slug: "inspection-training",
    href: "/services/inspection-training",
    target: "政治家の方へ",
    catchphrase: "事例をマナブ",
    description: "地方議員の行政視察・研修の企画及び運営",
    heroTitle: "先進事例を深く学ぶ、\n行政視察と研修の設計支援",
    heroLead:
      "「視察に行きたいが、日々の公務で準備が追いつかない」。視察先の選定からアポイント、行程調整、当日運営まで、学びを最大化するための段取りを丸ごとお任せいただけます。",
    painPoints: [
      "視察や研修の企画・調整に手が回らない",
    ],
    summary: [
      "テーマに沿った視察先のリサーチと選定",
      "移動・宿泊を含む無理のない行程設計",
      "学びを地元に持ち帰るための振り返り研修",
    ],
    offerings: [
      {
        title: "視察テーマの言語化と候補選定",
        description: "「何を学びたいか」を整理し、最適な視察先候補をリストアップします。",
      },
      {
        title: "受入先との調整・行程作成",
        description: "視察先へのアポイントから移動手段・宿泊まで、行程をトータルで設計します。",
      },
      {
        title: "当日運営と学びの整理",
        description: "現地での司会進行、記録、事後の振り返りシートを提供します。",
      },
    ],
    flow: [
      { step: "目的設定", description: "視察で得たい学びと地元への活かし方を明確にします。" },
      { step: "候補調査", description: "テーマに合う先進事例を調査し、視察先をご提案します。" },
      { step: "行程調整", description: "受入先との調整、移動・宿泊手配を含む行程を作成します。" },
      { step: "実施と共有", description: "当日の運営を担い、学びを報告書として整理します。" },
    ],
  },
  {
    slug: "experiential-learning",
    href: "/services/experiential-learning",
    target: "学校・保護者の方へ",
    catchphrase: "現場でマナブ",
    description: "農業体験や工場見学などの体験型学習の企画及び運営",
    heroTitle: "地域の現場で学ぶ、\n体験型プログラムの企画と運営",
    heroLead:
      "「体験学習をやりたいけど、企画から安全管理まで一人では無理」。プログラム設計、受入先との調整、当日運営まで、先生方の負担を最小限にしながら子どもたちの学びを最大化します。",
    painPoints: [
      "こども向け体験学習を行いたいが、企画から運営まで一人でできない",
      "生徒の「やりたい！」を引き出す探究学習、どう進めるべきか迷っていませんか？",
    ],
    summary: [
      "学年・目的に応じた体験テーマの設計",
      "地域の農家・工場・施設との連携と事前調整",
      "安全管理と当日運営、振り返りまでワンストップ",
    ],
    offerings: [
      {
        title: "体験プログラムの企画・設計",
        description: "学習目標に合わせて、訪問先・体験内容・タイムスケジュールを設計します。",
      },
      {
        title: "受入先との調整・安全管理",
        description: "地域事業者との連絡調整、リスクアセスメント、保険手配まで対応します。",
      },
      {
        title: "当日運営と学びの振り返り",
        description: "引率スタッフの配置、記録撮影、子どもたちの振り返りワークを実施します。",
      },
    ],
    flow: [
      { step: "目的共有", description: "先生方の狙いと子どもたちの興味を整理します。" },
      { step: "体験設計", description: "地域資源を活かしたプログラムを組み立てます。" },
      { step: "受入調整", description: "訪問先との調整と安全確認を行います。" },
      { step: "実施と振り返り", description: "当日運営と、学びを深める振り返りを実施します。" },
    ],
  },
  {
    slug: "seminars-training",
    href: "/services/seminars-training",
    target: "企業・学習団体の方へ",
    catchphrase: "講座でマナブ",
    description: "人材育成のための教育研修・セミナーの企画及び実施",
    heroTitle: "人材育成を前に進める、\n研修とセミナーの企画実施",
    heroLead:
      "「研修をやりたいが、本当に効果のある内容にできるか不安」。現場の課題をヒアリングし、目的に直結するプログラムを設計。単発でも継続でも、成果の出る研修を実現します。",
    painPoints: [
      "研修を実施したいけれど、効果のある内容になるか不安",
    ],
    summary: [
      "組織課題に直結する研修テーマの設計",
      "参加者の行動変容を促すワーク中心の構成",
      "単発実施にも継続プログラムにも柔軟に対応",
    ],
    offerings: [
      {
        title: "課題ヒアリングとテーマ設計",
        description: "組織の現状と目指す姿をヒアリングし、最適な研修テーマとゴールを設計します。",
      },
      {
        title: "プログラム構成と講師選定",
        description: "座学とワークを組み合わせた実践的なプログラムを作成し、最適な講師をアサインします。",
      },
      {
        title: "実施運営と効果測定",
        description: "当日の運営を担い、参加者アンケートと改善提案をレポートします。",
      },
    ],
    flow: [
      { step: "目的整理", description: "研修で解決したい課題と期待する成果を言語化します。" },
      { step: "講座設計", description: "テーマ・構成・ワーク内容を設計し、ご確認いただきます。" },
      { step: "実施準備", description: "会場手配、資料作成、講師との最終調整を行います。" },
      { step: "開催と改善提案", description: "研修を実施し、効果測定と次回への改善案をご報告します。" },
    ],
  },
];

export function getServiceDetailBySlug(slug: string) {
  return serviceDetails.find((detail) => detail.slug === slug);
}

export function requireServiceDetail(slug: string): ServiceDetail {
  const detail = getServiceDetailBySlug(slug);

  if (!detail) {
    throw new Error(`Missing service detail: ${slug}`);
  }

  return detail;
}
