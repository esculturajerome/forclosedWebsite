/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["10px", "14px"],
      sm: ["12px", "18px"],
      base: ["16px", "22px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["28px", "36px"],
    },
    extend: {
      colors: {
        black: "#232323",
        mainColor: " #007580",
        secColor: "#ffc844",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
