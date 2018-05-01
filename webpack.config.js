const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    // Each entry needs to be an array if webpack-hot-middleware should be used!
    // See: https://github.com/webpack-contrib/webpack-hot-middleware#use-with-multiple-entry-points-in-webpack
    // And: https://github.com/webpack-contrib/webpack-hot-middleware/issues/197
    entry: {
        app: ['./src/index.js', 'webpack-hot-middleware/client'],
        //print: './src/print.js',
    },
    devtool: 'eval-source-map', // faster to rebuild than inline-source-map
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        /*
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        */
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/index.html'),
            to: path.resolve(__dirname, 'dist/index.html'),
        }]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
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
