/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'negro-profundo': '#121212',
				'blanco-puro': '#fafafa',
				'gris-claro': '#CCCCCC',
				'verde-lima': '#73ba30',
				'gris-medio': '#999',
				'gris-oscuro': '#333'
			}
		},
	},
	plugins: [],
}
