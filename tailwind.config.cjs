//  @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [
  require('tailwind-scrollbar'),
],
};