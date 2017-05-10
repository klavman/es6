
const path = require('path');
const webpack = require('webpack');

const PATH = path.join(__dirname, 'src');

module.exports = {
	context: PATH,
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:3000/dist'
	},
	devServer: {
		port: 3000,
		stats: { colors: true },
		inline: true,
		publicPath: '/dist/'
	},
 	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [ 'babel-loader' ],
			exclude: /node_modules/
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};