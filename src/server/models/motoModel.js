import mongoose from "mongoose";

let Schema = mongoose.Schema;

let motoSchema = new Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  class: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: String, required: true},
  hot: {type: Boolean, required: true}
});

let Moto = mongoose.model("motos", motoSchema);

export default Moto;