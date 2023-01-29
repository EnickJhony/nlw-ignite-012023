/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,tx,tsx}",
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
      },
      fontFamily: {
        regular:'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}
