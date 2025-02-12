/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: {
					light: "rgba(198, 124, 78, 0.25)",
					DEFAULT: "#C67C4E",
				},
				surface: {
					dark: "#EDEDED",
					darker: "#272A34", 
					transparentDarker: "rgba(33, 37, 40, 0.7)",
					light: "#FDFBF6",
					lighter: "#FFFFFF",
				},
				text: {
					dark: "#808080",
					darker: "#272A34",
					light: "#FCFAF8",
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
