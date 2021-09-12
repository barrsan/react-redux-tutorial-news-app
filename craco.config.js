const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
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
