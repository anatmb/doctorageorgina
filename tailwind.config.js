// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ agrega esta línea
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleClinic: "#3E1A47",
        goldClinic: "#CBA135",
        beigeClinic: "#F7EFEA",
        textClinic: "#2B2B2B",
        whiteClinic: "#FFFFFF",
    },

   },
    
  },
  plugins: [],
}
