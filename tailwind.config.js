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
		extend: {
			gridTemplateColumns: {
				layout: "repeat(auto-fit, minmax(450px, 1fr))",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
