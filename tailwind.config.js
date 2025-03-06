/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A202C',
        'secondary-dark': '#2D3748',
        'text-color-dark': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
