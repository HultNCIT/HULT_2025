/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'tb':'982px'
    },                                                                    
    extend: {
      colors: {
        'accent':'#eb008b'
      },
      transitionDuration:{
        '400':'400ms'
      },
      borderRadius:{
        '30':'30px'
      },
      
    },
  },
  plugins: [],
};
