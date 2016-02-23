var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/,  loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port : 8080,
    inline : true,
    colors : true,
    progress:true,
    contentBase : 'src'
  }
};
