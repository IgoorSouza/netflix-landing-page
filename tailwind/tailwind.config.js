/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      arial: "Helvetica, Arial, sans-serif",
    },
    extend: {
      boxShadow: {
        'inner': "inset 80px 80px 150px #000000, inset -80px -80px 150px #000000",
      },
    },
  },
  plugins: [],
};
