let carsList = [
  {
    id: 1,
    name: "Audi",
    img: "audi.png",
    class: "Sport",
    type: "cars",
    price: "30000$",
    hot: true
  },
  {
    id: 2,
    name: "Porche",
    img: "porche.png",
    class: "Sport",
    type: "cars",
    price: "30000$",
    hot: true
  },
  {
    id: 3,
    name: "Concept",
    img: "concept.png",
    class: "Sport",
    type: "cars",
    price: "30000$",
    hot: false
  },
  {
    id: 4,
    name: "Rolls Royce",
    img: "rolls_royce.png",
    class: "Business",
    type: "cars",
    price: "30000$",
    hot: true
  },
  {
    id: 5,
    name: "Lamborghini",
    img: "lamborghini.png",
    class: "Supercar",
    type: "cars",
    price: "30000$",
    hot: false
  },
  {
    id: 6,
    name: "Cadillac",
    img: "cadillac.png",
    class: "Business",
    type: "cars",
    price: "30000$",
    hot: false
  }
];

export function getAllCars(state = carsList, action) {
  return state;
}