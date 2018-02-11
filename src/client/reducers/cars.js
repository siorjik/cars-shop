export function getAllCars(state = [], action) {
  switch(action.type) {
    case "GET_CARS":
    return [...state, ...action.payload];

    default: return state;
  }
}