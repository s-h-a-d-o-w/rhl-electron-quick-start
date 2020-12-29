// Based on: https://webpack.js.org/guides/development/#using-webpack-dev-middleware
const express = require('express');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const configProd = require('./webpack.config.prod.js');
const configDev = require('./webpack.config.dev.js');
const config = merge(configProd, configDev);

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the
// merged webpack configs as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
