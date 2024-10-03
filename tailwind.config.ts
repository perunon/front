import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				primary: '#181717',
				secondary: '#606060'
			},
			fontFamily: {
				sans: ['DM Sans Variable', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
