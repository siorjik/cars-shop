var path = require("path");
var express = require('express');
var app = express();
var webpack = require('webpack');
var middlewareWebpack = require('webpack-dev-middleware');
var configWebpack = require('./../../webpack.config');
var middlewareWebpackHot = require("webpack-hot-middleware");
var compiler = webpack(configWebpack);

app.use(middlewareWebpack(compiler));
app.use(middlewareWebpackHot(compiler));


app.use(express.static('public'));
 
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "./../../public/index.html"));
});
 
app.listen(8080, function() {
  console.log("Server is runing on 8080");
});