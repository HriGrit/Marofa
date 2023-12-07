/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				neosans: ["NeoSans", "sans-serif"],
			},
			screens: {
				app: "900px",
				mdnav: "914px"
			},
		},
	},
	plugins: [],
};
