export function getAllCars(state = [], action) {
  switch(action.type) {
    case "GET_CARS":
    return [...state, ...action.payload];

    case "EDIT_CAR":
      let index = state.findIndex((item) => item._id === action.payload._id);
      let newState = [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    return newState;

    case "DELETE_CAR":
    return state.filter((car) => car._id !== action.payload);

    case "ADD_NEW":
    return [...state, action.payload];

    default: return state;
  }
}