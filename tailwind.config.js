module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF8F00",
        "brand-light": "#FFF8E1",
      },
      height: {
        "75vh": "75vh",
        400: "400px",
      },
      width: {
        340: "340px",
      },
      maxHeight: {
        800: "800px",
      },
    },
  },
  plugins: [],
};
