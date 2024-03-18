import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      heavy: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        sans: ['"Amazon Ember"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
export default config;
