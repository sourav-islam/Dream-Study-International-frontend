/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url(/src/assets/bg_img-1.jpg)",
      },
      colors: {
        primary: "#2D88FF",
        secondary: "#00204A",
        tarnary: "#2859A0",
        gradientC: "",
      },
    },
  },
  plugins: [],
};
