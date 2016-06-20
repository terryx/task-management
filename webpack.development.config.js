//extend webpack.config.js
var config = require('./webpack.config');
var path = require('path');

config.entry.app.push('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:9000');

config.output = {
  path: path.resolve('dist'),
  filename: 'app.js',
  publicPath: '/'
};

config.devtool = 'source-map';

config.devServer = {
  contentBase: 'src',
  stats: {
    colors: true
  },
  host: '0.0.0.0',
  port: 9000
};

module.exports = config;
