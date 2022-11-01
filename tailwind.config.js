/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "var(--color1)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "rgb(0,0,0,0.1)",
        brandColor: "var(--brand-color)",
        "brand-color": "var(--brand-color)",
        color5: "rgb(71, 83, 94)",
      },
      maxWidth: {
        show: "1920px",
      },
    },
  },
  plugins: [],
};
