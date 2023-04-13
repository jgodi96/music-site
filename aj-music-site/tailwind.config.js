/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.815rem",
      "7xl": "4.768rem",
    },

    extend: {
      animationDelay: {
        1600: "1600ms",
      },
      colors: {
        egg: "#FAF3DD",
        cambridge: "#4C7658",
        gray: "#696D7D",
        "gray-400": "#6165714b",
        "tea":"#C8D5B9",
      },
      screens: {
        two: "1195px",
        twosm: "1000px",
      },

      keyframes: {
        leftright: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "80%": {
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        carousel:{
          "100%":{
            transform:"translateX(-100%)"
          }
        },
        bottomUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)",
          },

          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        topBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },

          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "left-right": "leftright 1s ease-out forwards",
        "bottom-up": "bottomUp .5s ease-out forwards",
        "up-bottom": "topBottom .5s ease-out forwards",
        "fade-in": "fadeIn .5s ease-out forwards",
        "carousel-start":"carousel 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
