module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    opacity: ({ after }) => after(['disabled']),
    extend: {},
  },
  plugins: [],
};
