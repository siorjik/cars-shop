let carsList = [
  {
    id: 1,
    name: "Audi",
    img: "audi.png",
    category: "sport"
  },
  {
    id: 2,
    name: "Porche",
    img: "porche.png",
    category: "sport"
  },
  {
    id: 3,
    name: "Concept",
    img: "concept.png",
    category: "sport"
  },
  {
    id: 4,
    name: "Rolls Royce",
    img: "rolls_royce.png",
    category: "business"
  },
  {
    id: 5,
    name: "Lamborghini",
    img: "lamborghini.png",
    category: "supercar"
  },
  {
    id: 6,
    name: "Cadillac",
    img: "cadillac.png",
    category: "business"
  }
];

export function getAllCars(state = carsList, action) {
  return state;
}