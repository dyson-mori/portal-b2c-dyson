/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      },
      {
        hostname: 'https',
        hostname: 'files.stripe.com',
        port: ''
      },
      {
        hostname: 'https',
        hostname: 'cdn.dealerspike.com',
        port: ''
      }
    ]
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

export default nextConfig;
