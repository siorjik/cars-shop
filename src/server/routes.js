import express from "express";
import path from "path";

let router = express.Router();

router.get("/cars", function(req, res) {
  res.send("cars route");
  console.log("cars route");
  //res.sendFile(path.join(__dirname, "./../../public/index.html"));
});

router.get("/moto", function(req, res) {
  res.send("moto route");
  console.log("moto route");
  //res.sendFile(path.join(__dirname, "./../../public/index.html"));
});

export default router;