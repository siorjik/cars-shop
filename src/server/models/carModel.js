import mongoose from "mongoose";

let Schema = mongoose.Schema;

let carSchema = new Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  class: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: String, required: true},
  hot: {type: Boolean, required: true}
});

let Car = mongoose.model("cars", carSchema);

export default Car;