/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'car-move': {
          '0%': { left: '-4rem' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        'car-move': 'car-move 3s linear infinite',
      },
    },
  },
  plugins: [],
}