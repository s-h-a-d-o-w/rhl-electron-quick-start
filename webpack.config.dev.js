const webpack = require('webpack');

// The base for this is webpack.config.prod.js.
// This is merged with it when NODE_ENV is development.
module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client'],
  },

  devtool: 'eval-source-map', // faster to rebuild than inline-source-map
  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    moduleIds: 'named'
  }
};
