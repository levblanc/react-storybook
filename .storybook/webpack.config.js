const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-loader");

module.exports = async ({ config, mode }) => {
  const typescriptLoader = {
    test: /\.(ts|tsx)$/,
    use: [{
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  }

  config.module.rules.push(typescriptLoader);

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};