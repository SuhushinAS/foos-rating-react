const webpack = require('webpack');
const {config} = require('dotenv');
const path = require('path');
const getIsProd = require('./get-is-prod');

const ROOT_PATH = process.cwd();
const NODE_ENV = process.env.NODE_ENV;
const dotenvNameList = [`.env.${NODE_ENV}.local`, '.env.local', `.env.${NODE_ENV}`, '.env'];
const dotenvPathList = dotenvNameList.map((name) => path.resolve(ROOT_PATH, name));
const {parsed} = config({path: dotenvPathList});

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
      new webpack.DefinePlugin({
        'process.env': {
          ...Object.fromEntries(Object.entries(parsed).map(([key, value]) => {
            return [key, JSON.stringify(value)];
          })),
          NODE_ENV: JSON.stringify(NODE_ENV),
        }
      }),
      new webpack.IgnorePlugin(IgnorePluginOptions),
      ...getPlugins(config),
    ],
  };
};
