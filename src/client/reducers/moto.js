export function getAllMoto(state = [], action) {
  switch(action.type) {
    case "GET_MOTOS":
    return [...state, ...action.payload];

    default: return state;
  }
}