import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calm, trustworthy pine/teal green — the Viora primary
        forest: {
          50: "#eef5f2",
          100: "#d6e7e0",
          200: "#aecfc2",
          300: "#7fb0a0",
          400: "#4f8d79",
          500: "#357a64",
          600: "#2a6a56",
          700: "#234f42",
          800: "#1d4338",
          900: "#14322a",
          950: "#0c211c",
        },
        // Warm terracotta accent — the human, caring touch
        clay: {
          50: "#fbf3ee",
          100: "#f6e2d6",
          200: "#ecc3ac",
          300: "#e0a07f",
          400: "#d4805a",
          500: "#c66a45",
          600: "#b1573a",
          700: "#8f4631",
          800: "#6f3829",
          900: "#5a2f24",
        },
        // Soft heritage gold — established, premium
        gold: {
          300: "#e6cd8f",
          400: "#d9b25f",
          500: "#c89a3f",
          600: "#a87f30",
        },
        // Warm paper backgrounds
        cream: {
          50: "#fdfbf7",
          100: "#faf6ee",
          200: "#f3ebdd",
          300: "#e9dcc6",
        },
        ink: {
          DEFAULT: "#1b2926",
          soft: "#3a4a46",
          muted: "#647069",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(20, 50, 42, 0.08), 0 8px 24px -6px rgba(20, 50, 42, 0.10)",
        lift: "0 10px 30px -8px rgba(20, 50, 42, 0.18), 0 4px 10px -4px rgba(20, 50, 42, 0.10)",
        glow: "0 0 0 1px rgba(53, 122, 100, 0.10), 0 18px 40px -12px rgba(20, 50, 42, 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
