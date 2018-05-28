const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',

	// Each entry has an array assigned so that webpack-hot-middleware can be merged into it in dev.
	// See: https://github.com/webpack-contrib/webpack-hot-middleware#use-with-multiple-entry-points-in-webpack
	// Also e.g.: https://github.com/webpack-contrib/webpack-hot-middleware/issues/197
	entry: {
		app: ['./src/index.js'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		// Copy necessary files that won't be in the .js bundle
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'src/index.html'),
			to: path.resolve(__dirname, 'dist/index.html'),
		}]),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
			],
		}],
	},
};
