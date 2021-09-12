const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
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
