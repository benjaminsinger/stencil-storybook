/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
