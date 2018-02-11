import {combineReducers} from "redux";
import {getAllCars} from "./cars";
import {getAllMoto} from "./moto";
import {routerReducer} from 'react-router-redux';

import {getAllProducts} from "./../actions/carsActions";

let rootReducer = combineReducers({
  routing: routerReducer,
  getAllCars,
  getAllMoto
  //getAllProducts
});

export default rootReducer;