/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'logo':'#C92071',
        'input':'#474747',
      }
    },
  },
  plugins: [],
}