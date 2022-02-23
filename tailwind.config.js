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
        
      },
      animation: {
        
      },

      scale: {
        full: '100%',
      },
      
      inset: {
        'tl' : '58%',
        'tl1': '53%',
      },

      spacing: {
        aqua: '89%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};