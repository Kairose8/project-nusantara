// @type {import('tailwindcss').Config}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myColor: {
          50: "#f5f3f1",
          100: "#ebe7e2",
          200: "#d7cec6",
          300: "#c2b6a9",
          400: "#ae9d8d",
          500: "#9a8570",
          600: "#7b6a5a",
          700: "#5c5043",
          800: "#3e352d",
          900: "#1f1b16",
        },
      },
    },
  },
  plugins: [],
};
