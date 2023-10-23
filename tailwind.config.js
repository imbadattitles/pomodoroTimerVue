/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      beige: '#FFF2F2',
      brown: '#471515',
      green950: '#040D06',
      green900: '#14401D',
      green100: '#4DDA6E',
      green50: '#F2FFF5'
    }
  },
  plugins: []
}
