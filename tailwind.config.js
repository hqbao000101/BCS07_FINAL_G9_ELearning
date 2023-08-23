/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#41b294",
        error: "#e74c3c !important",
      },
    },
  },
  plugins: [],
};
