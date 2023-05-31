/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'drop': '0 5px 20px 1px rgba(0, 0, 0, 0.3)'
      }
    },
  plugins: [],
  }
}