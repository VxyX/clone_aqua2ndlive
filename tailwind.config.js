module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        "kecilin-scale": {
          "0%": {
            opacity: "0",
            transform: "scale(150px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(50px)",
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
        "aqua-fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(2) translateY(-10%) translateX(15%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0) translateX(15%)",
          }
        },
        "aqua2-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(2)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          }
        },
        "gedung-fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(1.4)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        }
      },
      animation: {
        "fade-in-dikit": "fade-in-dikit 0.3s ease-out",
        "fade-in-banyak": "fade-in-banyak 3s ease-out",
        "kecilin-scale": "kecilin-scale 2s ease-out",
        "fade-out-down": "fade-out-down 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-out-up": "fade-out-up 1s ease-out",
        "aqua-fade-in": "aqua-fade-in 1.5s cubic-bezier(0.30, 1, 0.7, 1)",
        "aqua2-fade-in": "aqua2-fade-in 1.5s cubic-bezier(0.30, 1, 0.7, 1)",
        "gedung-fade-in": "gedung-fade-in 1.5s cubic-bezier(0.30, 1, 0.7, 1)",
        "bg-circle-a":"spin 40s linear infinite"
      },

      backgroundImage: {
        cross: "url('../public/images/home/textureLoadBg_cross_dot.png')",
        bgUngu: "url('../public/images/home/main_bg.jpg')",
        bgCircle: "url('../public/images/svg/bg_border_circle.svg')",
        bgFrame: "url('../public/images/svg/bg_sideframe.svg')",
        dot: "url('../public/images/svg/texture_dot.svg')",
        gedung: "url('../public/images/home/kv_bg_ef_1920-min.jpg')",
        frameCenter: "url('../public/images/svg/kv_frame_tc.svg')",
        freameSide: "url('../public/images/svg/kv_frame_tl.svg')",
        loadScreenBg: "url('../public/images/svg/logo_2line_full.svg')",
        loadScreenTexture: "url('../public/images/home/textureLoadBg_cross_dot.png')"
      },
      
      backgroundSize: {
        dotSize: '68px auto',
      },

      scale: {
        full: '100%',
        flip: '-1',
        double: '2'
      },

      transitionTimingFunction: {
        'mainBg': 'cubic-bezier(0.30, 1, 0.7, 1)',
      },

      transitionDuration: {
        '15s': '1.5s'
      },
      
      inset: {
        'tl' : '58%',
        'tl1': '54%',
        'circleBgRight': '-1.5%',
        'circleBgBottom': '-1%',
        'circleBgTop': '-8%',
      },

      spacing: {
        aqua: '89%',
        px100: '100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};