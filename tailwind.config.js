/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  neosans: ["NeoSans", "sans-serif"],
		},
		screens: {
		  app: "969px",
		  mdnav: "969px",
		},
		fontWeight: {
		  hero: "500",
		},
		colors: {
		  theme: "#14415A",
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/aspect-ratio'), // Add this line to include the plugin
	],
  }
  