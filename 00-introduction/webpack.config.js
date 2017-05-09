const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, 'src/'),
  output: {
  	path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js'
  },

  module: {
  	loaders: [{
  		test: /\.js$/,
  		loaders: [ 'babel-loader' ],
  		exclude: /node_modules/
  	}]
  },
/*  plugins: [

  	new webpack.optimize.UglifyJsPlugin({
  		compress: {
  			warnings: false
  		}

  	})
  ]*/
};

module.exports = config;