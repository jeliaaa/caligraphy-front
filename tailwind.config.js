/* * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "secondary-color": "var(--secondary-color)",
        "grayish": "var(--grayish)",
        "third-color": "var(--third-color)",
        "dark-color": "var(--dark-color)",
      },
    },
  },
  plugins: [],
};
