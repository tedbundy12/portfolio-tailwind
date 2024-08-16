/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": "#37B7F1",
      },
      fontFamily: {
        kanit: ["Kanit", 'sans-serif'],
        mukta: ["Montserrat", 'sans-serif']
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(35, 77, 117, 0.1), 0 2px 4px -1px rgba(35, 77, 117, 0.06)',
      }
    },
  },
  plugins: [],
};
