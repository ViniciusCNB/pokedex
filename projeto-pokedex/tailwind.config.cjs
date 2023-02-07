/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        grass: "url('/plano-de-fundo-pokemon.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
