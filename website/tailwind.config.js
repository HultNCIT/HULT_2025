/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
		// "2xl": "1536px",
	  },
	  extend: {
		fontFamily: {
		  poppins: ["Poppins", "sans-serif"],
		},
		variants: {
			extend: {
			  transform: ['group-hover'],
			  rotate: ['group-hover'],
			},
		  },
		colors: {
		  accent: "#eb008b", // Accent Color
		  blackMain: "#231f20", // Main Black Color
		  content: "#b1b4b6",
		  secondaryContent: "#9a9ab2", // Content Color
		  secondaryContainer: "#fffcf8", // Secondary Container
		  tertiary: "#1f2937", // Tertiary Color
		},
		transitionDuration: {
		  400: "400ms",
		},
		borderRadius: {
		  30: "30px",
		},
	  },
	},
	plugins: [],
  };