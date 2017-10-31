const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');


const app = express();

//use webpack with custom config
const compiler = webpack(webpackConfig);

// should eventually switch to hot reload, but this is quick
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    // Config to log when webpack compiles successfully
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}));

app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.PORT || 3030;

app.listen(port, console.log(`app listening on ${port}`));
