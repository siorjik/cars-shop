import path from "path";
import express from "express";

import webpack from "webpack";
import middlewareWebpack from "webpack-dev-middleware";
import configWebpack from "./../../webpack.config";
import middlewareWebpackHot from "webpack-hot-middleware";

import route from "./routes"; 

let app = express();

let compiler = webpack(configWebpack);

app.use(middlewareWebpack(compiler));
app.use(middlewareWebpackHot(compiler));

app.use(express.static('public'));

app.use("/api", route);
 
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "./../../public/index.html"));
});
 
app.listen(8080, function() {
  console.log("Server is runing on 8080");
});