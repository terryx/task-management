//extend webpack.config.js
var config = require('./webpack.config');
var path = require('path');

config.output = {
  path: path.resolve('build'),
  filename: 'app.js',
  publicPath: '/'
};

module.exports = config;
