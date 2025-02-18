/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      shiny: "shiny 7s linear infinite",
    },
    keyframes: {
      shiny: {
        '0%': { backgroundPosition: '300% 60%' },  
        '100%': { backgroundPosition: '0 60%' }
      },
    },
    backgroundSize: {
      'shiny': '300% 100%', // Makes the gradient wide enough to move
    },
    screens: {
      xs: "480px", // Extra Small (e.g., small phones)
      sm: "576px", // Small (e.g., larger phones)
      md: "768px", // Medium (e.g., tablets)
      lg: "992px", // Large (e.g., laptops)
      xl: "1200px", // Extra Large (e.g., desktops)
      "2xl": "1400px", // 2XL (e.g., wide desktops)
      "3xl": "1920px", // For large 1080p and ultra-wide monitors
      "4xl": "2560px", // For 2K and 4K displays
    },
    extend: {
      backgroundImage:{
        'testImg':"url('/events/eventComplete1.jpg')"
      },
      maxWidth: {
        "8xl": "96rem", // 1536px
        "9xl": "112rem", // 1792px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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
