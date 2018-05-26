import express from "express";

import Car from "./../models/carModel";

let router = express.Router();

router.post("/save_cars", (req, res, next) => {
  Car.create(req.body.data)
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

router.put("/update_car", (req, res, next) => {
  let data = req.body.data;
  Car.findByIdAndUpdate({_id: data._id}, data)
    .then((car) => {
      res.send(car);
    }).catch(next);
});

router.delete("/delete_car/:_id", (req, res, next) => {
  Car.findByIdAndRemove({_id: req.params._id})
    .then((car) => {
      res.send(car);
    }).catch(next);
});

export default router;