/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				"dark-sky-blue": "#81B5D0",
				"rich-electric-blue": "#0892D0",
				"caribbean-green": "#0AC78F",
				"burning-orange": "#F76D2F",
				"macaroni-and-cheese": "#EFB435",
				"medium-teal-blue": "#0054B4",
				dark: "#18181A",
				coal: "#333333",
				nickel: "#666666",
				silver: "#B1B1B3",
				moon: "#999999",
				snow: "#F4F4F4",
			},
			dropShadow: {
				basic: "0 6px 20px rgba(0, 0, 0, 0.5)",
				primary: "0 6px 20px rgba(4, 138, 191, 0.75)",
				contrast: "0 3px 15px rgba(0, 0, 0, 0.95)",
			},
			boxShadow: {
				lg: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
			},
			fontFamily: {
				base: ["Biofolio Ultimate"],
			},
			transitionTimingFunction: {
				easeInOutQuint: "cubic-bezier(0.83, 0, 0.17, 1)",
				// ease-[cubic-bezier(0.85, 0, 0.15, 1)]
			},
			keyframes: {
				"fade-in-top-bottom": {
					"0%, 100%": {
						transform: "translateY(-15px)",
						opacity: "0",
					},
					"50%": { transform: "translateY(0px)", opacity: "1" },
					"100%": { transform: "translateY(15px)", opacity: "0" },
				},
			},
			animation: {
				"fade-in-top-bottom":
					"fade-in-top-bottom 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
			},
			screens: {
				"2xs": "375px",
				xs: "475px",
			},
		},
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				["h1, h2, h3, h4"]: {
					fontWeight: theme("fontWeight.bold"),
					lineHeight: theme("lineHeight.tight"),
				},
				h1: { fontSize: theme("fontSize.4xl") },
				h2: { fontSize: theme("fontSize.3xl") },
				h3: { fontSize: theme("fontSize.2xl") },
			});
		}),

		// require("flowbite/plugin"),
	],
};
