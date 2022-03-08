const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
