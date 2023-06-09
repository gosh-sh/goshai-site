import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#202022',
        blue1: '#1e7aec',
        gray1: '#fafafd',
        gray2: '#53596d',
      },
    },
  },
  plugins: [],
}
