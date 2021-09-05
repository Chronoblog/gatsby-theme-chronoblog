module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#228B22',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
