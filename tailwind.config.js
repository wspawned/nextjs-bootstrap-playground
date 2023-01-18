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
        prime: "#f97316",
        second: "#a855f7",
        neuter: "#0f766e",
      },
    },

  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(primary|secondary|neutral)/
  }]
}
