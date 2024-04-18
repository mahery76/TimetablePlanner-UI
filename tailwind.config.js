/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-primary": "rgb(193, 232, 255)",
        "blue-secondary": "rgb(168, 220, 255)",
        "red-primary": "rgb(230, 125, 125)",
        "red-secondary": "rgb(230, 125, 125)",
        "green-primary": "rgb(141, 255, 175)",
        "green-secondary": "rgb(83, 252, 133)",
        "yellow-primary": "rgb(255, 248, 150)",
        "yellow-secondary": "rgb(255, 248, 150)",
        "violet-primary": "rgb(246, 211, 255)",
        "violet-secondary": "rgb(238, 169, 255)",
        "gray": "rgb(180, 180, 180)",
        "lightGray": "rgb(245, 245, 245)",
      },
    },
  },
  plugins: [],
};
