/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        '282': '282px',
        '191': '191px'
      },
      height: {
        '54': '54px',
        '69.87': '69.87px',
        '100': '100px',
        '115': '115px',
        '90': '90px',
        '94': '94px',
        '380': '380px',
      },
      colors: { 
        'pastel-yellow': '#F4D473',
        'mustard-yellow': '#F2C029',
        'olive-yellow': ' #BF9821',
        'light gray': '#EAEAEA'
      },
      fontFamily: {
        body: ['Palanquin Dark']
      },
      boxShadow: {
        'custom': '4px 5px 10px 0 rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
};


