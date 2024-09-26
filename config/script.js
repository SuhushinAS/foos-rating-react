const webpack = require('webpack');
const getIsProd = require('./get-is-prod');

const customInterpolateName = (url) => url.toLowerCase();

const LoaderOptionsPluginOptions = {
  debug: false,
  minimize: true,
  options: {customInterpolateName},
};

const IgnorePluginOptions = {contextRegExp: /moment$/u, resourceRegExp: /^\.\/locale$/u};

const getPlugins = ({mode}) => {
  if (getIsProd(mode)) {
    return [new webpack.LoaderOptionsPlugin(LoaderOptionsPluginOptions)];
  }

  return [];
};

module.exports = (config) => {
  return {
    module: {
      rules: [
        {
          exclude: /node_modules/u,
          test: /\.(js|jsx|ts|tsx)$/u,
          use: [{loader: 'babel-loader', options: {cacheDirectory: true}}],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(config.mode)}}),
      new webpack.IgnorePlugin(IgnorePluginOptions),
      ...getPlugins(config),
    ],
  };
};
