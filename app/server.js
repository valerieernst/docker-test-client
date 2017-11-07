const express = require('express');
const path = require('path');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');

const app = express();

//use webpack with custom config
const compiler = webpack(webpackConfig);

// todo: should eventually switch to hot reload, but this is quick
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



if(process.env.NODE_ENV === 'development') {
  const proxyTarget = process.env.PROXY_TARGET || 'http://dockertest_server_1';
  const proxyOptions = {
    target: proxyTarget,
    changeOrigin: true
  }
  app.use('/api', proxy(proxyOptions));
}

// todo: in production serve static assets from nginx because it's faster
app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.PORT || 3030;

app.listen(port, console.log(`app listening on ${port}`));
