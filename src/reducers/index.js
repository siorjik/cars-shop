import {combineReducers} from "redux";
import {getAllCars} from "./cars";
import {routerReducer} from 'react-router-redux';

let rootReducer = combineReducers({
  routing: routerReducer,
  getAllCars
});

export default rootReducer;