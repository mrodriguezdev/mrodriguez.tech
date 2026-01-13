/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'negro-profundo': '#121212',
        'blanco-puro': '#FAFAFA',
        'gris-claro': '#CCCCCC',
        'gris-medio': '#999',
        'gris-oscuro': '#333',
        'verde-lima': '#73ba30'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
