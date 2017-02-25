const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/client',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.woff2?($|\?)/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
};
