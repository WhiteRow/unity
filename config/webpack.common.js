const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./modules/paths');
const scripts = require('./modules/scripts');
const htmlExtract = require('./modules/html.extract');

const commonConfig = merge(
  {
    entry: [paths.root],
    output: {
      path: paths.outputPath + '/index.tsx',
      filename: 'bundle.js',
    },

    target: 'web',

    resolve: {
      modules: [paths.entryPath, 'node_modules'],
      extensions: ['*', '.js', '.jsx', 'ts', '.tsx'],
      alias: {
        '@': paths.entryPath,
        '@components': `${paths.entryPath}/components`,
        '@pages': `${paths.entryPath}/pages`,
        '@routes': `${paths.entryPath}/routes`,
        '@utils': `${paths.entryPath}/utils`,
      },
    },

    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },

  scripts(),
  htmlExtract(),
);

module.exports = commonConfig;
