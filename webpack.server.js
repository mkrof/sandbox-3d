var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(require('./webpack.config')), {
  publicPath: '/static/',
  contentBase: './public'
}).listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('listening on localhost:3000');
});
