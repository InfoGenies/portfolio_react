/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        bgGradient: "#E1522D",
      },
      bordercolor: {
        borderColor: "#E1522D",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, variants }) => {
      const gradients = {
        ".text-main": {
          backgroundImage: `linear-gradient(180deg, ${theme(
            "colors.orange.800"
          )}, ${theme("colors.amber.600")})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        },

        // Add more text gradient classes as needed
      };

      addUtilities(gradients, variants("textGradient"));
    }),
  ],
}

