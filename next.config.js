// module.exports = {
//   reactStrictMode: true,
// }


module.exports = {
  images: {
    domains: ["courses-top.ru"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};