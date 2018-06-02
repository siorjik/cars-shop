export function getAllMoto(state = [], action) {
  switch(action.type) {
    case "GET_MOTOS":
    return [...state, ...action.payload];

    case "EDIT_MOTO":
      let index = state.findIndex((item) => item._id === action.payload._id);
      let newState = [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    return newState;

    case "DELETE_MOTO":
    return state.filter((moto) => moto._id !== action.payload);

    case "ADD_NEW_MOTO":
    return [...state, action.payload];

    default: return state;
  }
}