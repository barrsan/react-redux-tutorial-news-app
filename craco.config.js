const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
    },
  },
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line
        require('tailwindcss'),
        // eslint-disable-next-line
        require('autoprefixer'),
      ],
    },
  },
};
