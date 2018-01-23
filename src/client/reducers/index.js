import {combineReducers} from "redux";
import {getAllCars} from "./cars";
import {getAllMoto} from "./moto";
import {routerReducer} from 'react-router-redux';

let shuffleArr = function (arr) { //random 
  return arr.sort(() => Math.random() - 0.5);
}

let allStates = getAllCars().concat(getAllMoto());
allStates = shuffleArr(allStates);
function getAllProducts(state = allStates, action) {
  return state;
}

let rootReducer = combineReducers({
  routing: routerReducer,
  getAllCars,
  getAllMoto,
  getAllProducts
});

export default rootReducer;