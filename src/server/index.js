import path from "path";
import express from "express";
import bodyParser from "body-parser";

import webpack from "webpack";
import middlewareWebpack from "webpack-dev-middleware";
import configWebpack from "./../../webpack.config";
import middlewareWebpackHot from "webpack-hot-middleware";

import mongoose from "mongoose";

import routeCars from "./routes/carRoutes";
import routeMoto from "./routes/motoRoutes"; 

let app = express();

//start mongo: ./mongod --dbpath D:/Programs/mongodb/data/db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/e_shop")
  .then(() => console.log("Mongo is runing!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

let compiler = webpack(configWebpack);

app.use(middlewareWebpack(compiler));
app.use(middlewareWebpackHot(compiler));

app.use(express.static('public'));

app.use("/api", routeCars);
app.use("/api", routeMoto);
 
app.get('*', (req, res) => {
  res.redirect("/");
});
 
app.listen(8080, () => {
  console.log("Server is runing on 8080");
});

//err handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
});