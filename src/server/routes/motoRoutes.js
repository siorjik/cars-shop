import express from "express";

import Moto from "./../models/motoModel";

let router = express.Router();

router.post("/set_moto", (req, res, next) => {
  Moto.create(req.body)
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

export default router;