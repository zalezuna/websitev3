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
          primary: '#FF7B92', // Pink from gradient
          accent: '#D490F8',  // Purple from gradient
          textPrimary: '#111827', // Dark Gray - Main text color
          textSecondary: '#4B5563', // Medium Gray - Subtext, descriptions
          bg: '#FFFFFF',         // White - Main background
          bgSubtle: '#FFF1F3',    // Very Light Pink for subtle backgrounds
          border: '#FFD9E0'       // Light Pink for borders
        },
        gradient: {
          start: '#FF7B92', // Pink start of gradient
          end: '#D490F8'    // Purple end of gradient
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, accessible sans-serif
      },
      backgroundImage: {
        'gradient-main': 'url("/src/gradient.png")',
        'gradient-custom': 'linear-gradient(90deg, #FF7B92 0%, #D490F8 100%)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Removed for now to simplify debugging
  ],
}