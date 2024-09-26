const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getIsProd = require('./get-is-prod');

const getStyleLoader = ({mode}) => {
  if (getIsProd(mode)) {
    return MiniCssExtractPlugin.loader;
  }

  return 'style-loader';
};

const getCssLoader = () => {
  return {loader: 'css-loader', options: {esModule: false}};
};

const getLessLoader = ({root}) => {
  return {loader: 'less-loader', options: {lessOptions: {math: 'always', paths: [root]}}};
};

const getPlugins = ({mode}) => {
  if (getIsProd(mode)) {
    return [new MiniCssExtractPlugin({filename: '[name].min.css'})];
  }

  return [];
};

module.exports = (config) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/u,
          use: [getStyleLoader(config), getCssLoader(), 'postcss-loader'],
        },
        {
          test: /\.less$/u,
          use: [getStyleLoader(config), getCssLoader(), 'postcss-loader', getLessLoader(config)],
        },
      ],
    },
    plugins: getPlugins(config),
  };
};
