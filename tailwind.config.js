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
        'hero-bg': "url('https://www.webfx.com/wp-content/uploads/2023/08/12_what_is_a_marketing_agency-1024x462.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

