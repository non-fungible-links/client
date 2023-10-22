/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add an ignore rule for Storybook files
    config.module.rules.push({
      test: /\.stories\.tsx$/,
      use: "ignore-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
