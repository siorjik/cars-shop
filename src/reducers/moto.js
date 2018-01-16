let motoList = [
  {
    id: 1,
    name: "Harley Davidson",
    img: "harley.png",
    class: "Tur",
    type: "moto",
    price: "15000$",
    hot: true
  },
  {
    id: 2,
    name: "Honda",
    img: "honda.png",
    class: "Sport",
    type: "moto",
    price: "15000$",
    hot: false
  },
  {
    id: 3,
    name: "Concept",
    img: "proto.png",
    class: "Chopper",
    type: "moto",
    price: "15000$",
    hot: true
  }
];

export function getAllMoto(state = motoList, action) {
  return state;
}