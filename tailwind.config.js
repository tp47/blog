/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "true-green": "#00ff00",
      },
    },
  },
  plugins: [],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
