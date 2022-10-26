/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#441384",
        
"secondary": "#6de8ae",
        
"accent": "#99efcb",
        
"neutral": "#28242D",
        
"base-100": "#FAFAFA",
        
"info": "#64B5DD",
        
"success": "#24C270",
        
"warning": "#8F530A",
        
"error": "#F02D3D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}