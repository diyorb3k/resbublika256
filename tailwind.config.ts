import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Roboto fontini qo'shish
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true, // konteynerni markazda joylash
        padding: {
          DEFAULT: '1rem', // default padding
          sm: '2rem', // small screen uchun padding
          lg: '4rem', // large screen uchun padding
          xl: '6rem', // extra large screen uchun padding
          '2xl': '8rem', // 2x large screen uchun padding
        },
      },
    },
  },
  
  plugins: [],
};

export default config;
