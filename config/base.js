const CopyWebpackPlugin = require('copy-webpack-plugin');
const getIsProd = require('./get-is-prod');
const webpack = require('webpack');

const getPlugins = ({mode}) => {
  if (getIsProd(mode)) {
    return [];
  }

  return [new webpack.HotModuleReplacementPlugin()];
};

const getProxy = (options) => {
  const isProd = getIsProd(options.mode);

  if (isProd) {
    return undefined;
  }

  return [
    {
      changeOrigin: true,
      context: ['/nsk'],
      pathRewrite: {'^/nsk': ''},
      secure: false,
      target: 'https://dyp-nsk.gear54.me',
    },
    {
      changeOrigin: true,
      context: ['/tsk'],
      pathRewrite: {'^/tsk': ''},
      secure: false,
      target: 'https://tsk.gear54.me',
    },
  ];
};

const getDevServer = (options) => {
  return {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 8000,
    proxy: getProxy(options),
    static: options.public,
  };
};

module.exports = (options) => {
  const isProd = getIsProd(options.mode);

  return {
    bail: isProd,
    devServer: getDevServer(options),
    devtool: isProd ? false : 'eval-source-map',
    entry: 'index.tsx',
    mode: options.mode,
    output: {
      clean: true,
      filename: '[name].min.js',
      library: ['foosRatingReact'],
      path: options.dist,
      publicPath: '/',
    },
    plugins: [new CopyWebpackPlugin({patterns: [{from: options.public, to: options.dist}]}), ...getPlugins(options)],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        child_process: 'empty',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
      modules: ['src', 'node_modules'],
    },
    stats: {
      colors: true,
      errorDetails: true,
      reasons: isProd,
    },
    target: isProd ? 'browserslist' : 'web',
    watchOptions: {aggregateTimeout: 300},
  };
};
