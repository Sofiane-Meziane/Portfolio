/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        sea: "rgb(var(--sea) / <alpha-value>)",
        clay: "rgb(var(--clay) / <alpha-value>)",
        sun: "rgb(var(--sun) / <alpha-value>)"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Spectral", "serif"]
      },
      boxShadow: {
        card: "0 25px 60px -40px rgba(15, 23, 32, 0.45)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
