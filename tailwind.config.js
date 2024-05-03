/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  
  daisyui: {
    themes: ["light", "dark", "cupcake", "cyberpunk", "coffee", 
    "winter", "sunset", "pastel", "valentine", "nord"],
  },

  theme: {
    // Some useful comment
    fontFamily: {
      'Josefin Sans': ['Josefin Sans', 'sans-serif'],
      'Jomolhari': ['"Jomolhari"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },

  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'white': '#ffffff',
      // 'purple': '#3f3cbb',
      // 'midnight': '#121063',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'silver': '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
      'navy': '#2D3142',
      'lavender': '#EAE8FF',
      'gray':'#a3a3a3',
      'darkgray':'#737373'
    },
}
}


