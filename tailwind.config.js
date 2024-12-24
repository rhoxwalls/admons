/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'hidden',
    'duration-700',
    'ease-in-out',
  ],
  theme: {
    screens: {
      phone: "340px",

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        SansSerif: ['SansSerif', 'sans-serif'], // Fallback a sans-serif
      },
      backgroundImage: {
        "hero-pattern": "url('/src/hero-pattern.jpg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      colors:{
        beige:"#F5F5DC",
      },
    },
    plugins: [],
  },
};
