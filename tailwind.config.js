// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}', './screen/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} 
 
// If you’re going to be writing Tailwind styles in other directories, be sure to include them in the content array. 

// visit: https://tailwindcss.com/docs/content-configuration
//        https://blog.logrocket.com/getting-started-nativewind-tailwind-react-native/
