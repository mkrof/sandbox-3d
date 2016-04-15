var path = require('path');

module.exports = {
  entry: [
    './src/main.js'
    // 'webpack-dev-server/client?http://localhost:3000',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  },
  devtool: 'source-map'
};
