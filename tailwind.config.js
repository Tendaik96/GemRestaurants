/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "1px",
      },
      backgroundImage: {
        BrownBackground: 'url("/BrownPattern.jpg")',
      },
    },
  },
  plugins: [],
};
