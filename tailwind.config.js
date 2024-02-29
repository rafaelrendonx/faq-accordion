/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'custom-white': 'hsl(0, 0%, 100%)',
      'custom-light-pink': 'hsl(275, 100%, 97%)',
      'custom-greyish-purple': 'hsl(292, 16%, 49%)',
      'custom-dark-purple': 'hsl(292, 42%, 14%)',
    },
    fontFamily: {
      'work-sans': ['Work Sans'],
    },
  },
  screens: {
    'desktop': '1440px',
    // => @media (min-width: 640px) { ... }
  },
  plugins: [],
}
