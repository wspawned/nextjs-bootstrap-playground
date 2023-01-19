/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        "primary-100": "#f97316",
        "primary-200": "#a855f7",
        "primary-300": "#0f766e",
      },
    },

  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(primary|secondary|neutral)/
  }]
}
