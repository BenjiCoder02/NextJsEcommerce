const defaultTheme = require('tailwindcss/defaultTheme');
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyColor: '#fbfaf7',
        bgLight: '#1010100d',
        darkText: '#242424',
        lightText: '#a5a5a5',
      },
      backgroundImage: {
        'main-bg': "url('/bg-img.jpeg')"
      }
    }
  },
  plugins: [],
};
export default config;
