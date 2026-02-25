/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // ✅ MUST for Vite
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}