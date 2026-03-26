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
          "100%": { transform: "translateX(-30%)" },
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