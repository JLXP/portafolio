module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        portada: "url('./assets/img/portadamovil.jpg')",
      },
      fontFamily: {
        Playfair: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],

};
