import express from "express";
import path from "path";

import Car from "./../models/carModel";

let router = express.Router();

router.post("/save_cars", (req, res) => {
  Car.create(req.body)
    .then((car) => {
      res.send(car);
    });
});

router.get("/get_cars", (req, res) => {
  Car.find({})
    .then((cars) => {
      res.send(cars);
    });
});

export default router;