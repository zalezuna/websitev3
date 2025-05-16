/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans src directory including App.jsx
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#000000', // Changed to black
          accent: '#000000',  // Changed to black
          textPrimary: '#000000', // Changed to black
          textSecondary: '#000000', // Changed to black
          bg: '#FFFFFF',         // White - Main background
          bgSubtle: '#FFF1F3',    // Very Light Pink for subtle backgrounds
          border: '#FFD9E0'       // Light Pink for borders
        },
        gradient: {
          start: '#000000', // Changed to black
          end: '#000000'    // Changed to black
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, accessible sans-serif
      },
      backgroundImage: {
        'gradient-main': 'url("/src/new-gradient.png")',
        'gradient-custom': 'url("/src/new-gradient.png")',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Removed for now to simplify debugging
  ],
}