/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        '282': '282px',
      },
      height: {
        '90': '90px',
        '69.87': '69.87px'
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
        'custom': '0 5px 10px 0 rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
};


