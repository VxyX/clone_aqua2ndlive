module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      hp: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },

    extend: {
      keyframes: {
        "fade-in-dikit": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-banyak": {
          "0%": {
            opacity: "0",
            transform: "translateY(-150px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-dikit": "fade-in-dikit 0.3s ease-out",
        "fade-in-banyak": "fade-in-banyak 2s ease-out",
        "fade-out-down": "fade-out-down 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-out-up": "fade-out-up 1s ease-out",
      },

      backgroundImage: {
        cross: "url('../public/images/texture_cross_dot.png')",
        ungu: "url('../public/images/main_bg.jpg')",
        gedung: "url('../public/images/kv_bg_ef_1920-min.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
