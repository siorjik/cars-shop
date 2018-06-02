import express from "express";

import Moto from "./../models/motoModel";

let router = express.Router();

router.post("/save_moto", (req, res, next) => {
  Moto.create(req.body.data)
    .then((moto) => {
      res.send(moto);
    }).catch(next);
});

router.get("/get_moto", (req, res, next) => {
  Moto.find({})
    .then((motos) => {
      res.send(motos);
    }).catch(next);
});

router.put("/update_moto", (req, res, next) => {
  let data = req.body.data;
  Moto.findByIdAndUpdate({_id: data._id}, data)
    .then((moto) => {
      res.send(moto);
    }).catch(next);
});

router.delete("/delete_moto/:_id", (req, res, next) => {
  Moto.findByIdAndRemove({_id: req.params._id})
    .then((moto) => {
      res.send(moto);
    }).catch(next);
});

export default router;