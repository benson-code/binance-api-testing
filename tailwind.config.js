/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-bg": "#000000",
        "app-surface": "#1C1C1E",
        "app-surface-hover": "#2C2C2E",
        "app-border": "rgba(255, 255, 255, 0.1)",
        "app-blue": "#0A84FF",
        "app-green": "#30D158",
        "app-indigo": "#5E5CE6",
        "app-orange": "#FF9F0A",
        "app-red": "#FF453A",
        "app-gray-text": "#8E8E93",
        "glass-light": "rgba(255, 255, 255, 0.08)",
        "glass-heavy": "rgba(28, 28, 30, 0.75)",
      },
      fontFamily: {
        "display": ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      boxShadow: {
        "glow": "0 0 20px rgba(10, 132, 255, 0.15)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
}
