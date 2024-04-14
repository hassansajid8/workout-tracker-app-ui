import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#FFFFFF',
      'purple': {
        50: "#819DFF47",
        80: "#8CB1FF99",
        100: "#DEE5FF",
        200: '#95BEFF',
        300: '#809AFF',
        500: '#7B91FF',
      },
      'purpleFaded' : "#819AFF26",
      'slate': {
        50: "#F1F1F1",
        100: "#7F7F7F",
      },
      'pink' : {
        100: "#E9B1E0",
        300: "#D3A4F4",
      },
      'blue': '#93A9FF',
    },
  },
  plugins: [],
};
export default config;
