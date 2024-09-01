/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rock: ["rock", "sans-serif"],
        nowRuguler: ["now-ruguler", "sans-serif"],
        nowThin: ["now-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
