/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow' : 'spin 3s linear infinite',
        goyang: 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
      },
    },
  },
  plugins: [],
}
