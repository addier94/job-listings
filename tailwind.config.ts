import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        neutralLight: "hsl(180, 52%, 96%)",
        neutralLightFilter: "hsl(180, 31%, 95%)",
        neutralDark: "hsl(180, 8%, 52%)",
        neutralVeryDark: "hsl(180, 14%, 20%)",
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        heading: ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        headingBold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
