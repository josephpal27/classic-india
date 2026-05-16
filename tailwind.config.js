/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oliGrostesk: "var(--font-oliGrostesk)",
      },
      colors: {
        primary: "#c7153b",
        secondary: "#ebeadb",
      },
    },
  },
  plugins: [],
};
