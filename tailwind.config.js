/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        layer: "#000000 4px 4px 0 0, #00ff00 4px 4px 0 1px",
        "layer-filled": "#00ff00 4px 4px 0 0px",
      },
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
