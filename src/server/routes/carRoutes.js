import express from "express";

import Car from "./../models/carModel";

let router = express.Router();

router.post("/save_cars", (req, res, next) => {
  Car.create(req.body)
    .then((car) => {
      res.send(car);
    }).catch(next);
});

router.get("/get_cars", (req, res, next) => {
  Car.find({})
    .then((cars) => {
      res.send(cars);
    }).catch(next);
});

export default router;