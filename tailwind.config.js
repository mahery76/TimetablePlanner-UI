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
      fontFamily: {
        'roboto': ['Roboto', 'Arial', 'sans-serif']
      },
      colors: {
        "my-white": "rgb(255,255,255)",
        "blue-body": "#f6faff",
        "blue-body-secondary": "#e0eeff",
        "blue-primary": "cyan-600",
        "blue-secondary": "rgb(3, 113, 187)",
        "red-primary": "rgb(230, 125, 125)",
        "red-secondary": "rgb(230, 125, 125)",
        "green-primary": "rgb(143 255 143)",
        "green-secondary": "rgb(3, 184, 57)",
        "yellow-primary": "rgb(255, 248, 150)",
        "yellow-secondary": "rgb(255, 248, 150)",
        "violet-primary": "rgb(220, 214, 255)",
        "violet-secondary": "rgb(160, 139, 255)",
        "gray":"rgb(180, 180, 180)",
        "lightGray": "rgb(230, 230, 230)",
        "darkGray": "rgb(100, 100, 100)"
      },
    },
  },
  plugins: [],
};
