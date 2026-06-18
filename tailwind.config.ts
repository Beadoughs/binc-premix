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
        brand: {
          50:  "#fff8ed",
          100: "#ffeed5",
          200: "#ffd9aa",
          300: "#ffbe74",
          400: "#ff9a3c",
          500: "#ff7c16",
          600: "#f0610c",
          700: "#c7490c",
          800: "#9e3a12",
          900: "#7f3212",
          950: "#451607",
        },
        concrete: {
          50:  "#f7f7f7",
          100: "#ededed",
          200: "#d9d9d9",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        dark: {
          DEFAULT: "#0f1117",
          800: "#1a1d27",
          700: "#252836",
          600: "#323648",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #0f1117 0%, #1a1d27 50%, #252836 100%)",
        "cta-pattern": "linear-gradient(135deg, #ff7c16 0%, #f0610c 50%, #c7490c 100%)",
        "concrete-texture": "url('/textures/concrete.svg')",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "brand-glow": "0 0 30px rgba(255, 124, 22, 0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.15)",
        "inner-top": "inset 0 4px 6px -1px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
