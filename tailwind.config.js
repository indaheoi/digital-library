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
}

// module.exports = {
//   //...
//   daisyui: {
//     themes: ["light", "dark", "cupcake"],
//   },
// }

