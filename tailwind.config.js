/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./component/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'hf-pink': {
          100: '#F294C3',
          600: '#C7156E',
          800: '#49102C'
        }
      },
      fontFamily:{
        'adlam': '"ADLaM Display", system-ui',
        'lato': '"Lato", sans-serif'
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      }
    },
  },
  plugins: [],
}

