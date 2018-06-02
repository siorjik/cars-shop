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
    return axios.get('/api/get_moto')
      .then(function(response) {
        return dispatch(getMotos(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

export function editMoto(data) {
  return {
    type: "EDIT_MOTO",
    payload: data
  }
}

export const updateMoto = data => dispatch => {
  dispatch(editMoto(data));
  return axios.put('/api/update_moto', {data: data})
    .catch(err => console.error(err));
}

export function removeMoto(data) {
  return {
    type: "DELETE_MOTO",
    payload: data
  }
}

export const delMoto = data => dispatch => {
  dispatch(removeMoto(data));
  return axios.delete(`/api/delete_moto/${data}`, {data: data})
    .catch(err => console.error(err));
}

export function addNewMoto(data) {
  return {
    type: "ADD_NEW_MOTO",
    payload: data
  }
}

export const saveNewMoto = data => dispatch => {
  return axios.post('/api/save_moto', {data: data})
    .then((res) => {
      dispatch(addNewMoto(res.data));
      return res;
    })
    .catch(error => console.error(error));
}