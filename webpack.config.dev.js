const webpack = require('webpack');

// The base for this is webpack.config.prod.js.
// This is merged with it when NODE_ENV is development.
module.exports = {
	mode: 'development',

	entry: {
		//app: ['webpack-hot-middleware/client'],
		app: ['webpack-hot-middleware/client?noInfo=false&path=http://127.0.0.1:3000/__webpack_hmr'],
	},
	devtool: 'eval-source-map', // faster to rebuild than inline-source-map
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
