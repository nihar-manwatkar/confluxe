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
        cream: "#FDFBF5",
        dark: "#2A2A2A",
        "dark-brown": "#5C2C26",
        "footer-dark": "#401E1A",
        accent: "#EC4E20",
      },
      fontFamily: {
        sans: ["var(--font-sf-pro)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
