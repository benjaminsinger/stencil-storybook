// https://stackoverflow.com/questions/68020712/tailwind-css-classes-not-showing-in-storybook-build/71877841#71877841

/** @type {import('tailwindcss').Config} */
const { base } = require('@benjaminsinger/sds-tailwind-config');

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
  presets: [base]
}
