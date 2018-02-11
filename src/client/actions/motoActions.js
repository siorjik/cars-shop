import axios from "axios";

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

export function getMotos(motos) {
  return {
    type: "GET_MOTOS",
    payload: motos
  }
}

export function fetchMotos() {
  return function(dispatch) {
    return axios.get('/api/moto')
      .then(function (response) {
        return response = motoList;
      })
      .then(function(response) {
        return dispatch(getMotos(response));
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}