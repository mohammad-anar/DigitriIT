/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/hero-bg.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

