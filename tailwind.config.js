/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'jnews-dark': '#1b1b1bff',
        'jnews-border': '#eeeeee',
        'jnews-sports': '#26c0ef',
        'jnews-culture': '#b38a58',
        'jnews-lifestyle': '#ff4081',
        'jnews-business': '#2979ff',
        'jnews-politics': '#d32f2f',
      },
      fontFamily: {
        condensed: ['"Roboto Condensed"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
