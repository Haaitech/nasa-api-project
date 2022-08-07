/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/ui/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Inconsolata: ["Inconsolata", "monospace"],
		},
		extend: {},
	},
	plugins: [],
};