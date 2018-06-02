import path from "path";
import express from "express";
import bodyParser from "body-parser";

import webpack from "webpack";
import middlewareWebpack from "webpack-dev-middleware";
import configWebpack from "./../../webpack.config";
import middlewareWebpackHot from "webpack-hot-middleware";

import mongoose from "mongoose";

import multer from "multer";

import fs from "fs-extra";

import routeCars from "./routes/carRoutes";
import routeMoto from "./routes/motoRoutes"; 

let app = express();

//start mongo: ./mongod --dbpath D:/Programs/mongodb/data/db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/e_shop")
  .then(() => console.log("Mongo is runing!"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

//webpack
let compiler = webpack(configWebpack);
app.use(middlewareWebpack(compiler));
app.use(middlewareWebpackHot(compiler));

app.use(express.static('public'));

//routing
app.use("/api", routeCars);
app.use("/api", routeMoto);

//upload img
app.post("/api/upload_img", (req, res, next) => {
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/client/img/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  let upload = multer({storage}).single("imgProduct");
  let mess;

  upload(req, res, (err) => {
    if(err) console.error(err);
    else {
      let filesArr = fs.readdirSync(`src/client/img/${req.body.type}`, 'utf8');

      filesArr.forEach((item) => {
        if(item === req.body.fileName) {
          fs.remove(`src/client/img/${req.body.fileName}`, err => {
            if (err) console.error(err);
          });
          mess = "This file name is exist!";
        }
      });

      if(mess !== "This file name is exist!") {
        let fromDir = `src/client/img/${req.body.fileName}`;
        let toDir = `src/client/img/${req.body.type}/${req.body.fileName}`;

        fs.move(fromDir, toDir, err => {
          if(err) console.error(err);
        });
        mess = "File was uploaded!";
      }
    }

    res.send(mess);
  });
});

//delete img
app.post("/api/delete_img", (req, res, next) => {
  fs.remove(`src/client/img/${req.body.type}/${req.body.img}`, err => {
    if (err) console.error(err);
  });
  res.send(req.body.img);
});
 
app.get('*', (req, res) => {
  if(req.path !== "/admin") res.redirect("/");
  else res.sendFile(path.join(__dirname, './../../public/index.html')); //admin
});
 
app.listen(8080, () => {
  console.log("Server is runing on 8080 🌎");
});

//err handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
});