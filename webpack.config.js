var path = require('path');
var webpack = require('webpack')

module.exports = {
  //entry, output, and development server contains in webpack.development.config.js
  entry: {
    app: [path.resolve('src/js/app')],
    vendors: ['react', 'react-dom']
  },

  //loaders are webpack essential tool to bundle files
  module: {
    loaders: [
      //transpile es6 to es5
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js')
  ],

  //allow require without file extension
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, 'src', 'js')],
    extensions: ['', '.js', '.es6', '.jsx']
  }
}
