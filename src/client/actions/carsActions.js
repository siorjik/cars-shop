import axios from "axios";

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

export function getCars(cars) {
  return {
    type: "GET_CARS",
    payload: cars
  }
}

export function fetchCars() {
  return function(dispatch) {
    return axios.get('/api/get_cars')
      .then(function(response) {
        return dispatch(getCars(response.data));
      })
      .catch(function(error) {
        console.error(error);
      });
  }
}

export function editCar(data) {
  return {
    type: "EDIT_CAR",
    payload: data
  }
}

export function updateCar(data) {
  return function(dispatch) {
    dispatch(editCar(data));
    return axios.put('/api/update_car', {data: data})
      .catch(function(error) {
        console.error(error);
      });
  }
}

export function removeCar(data) {
  return {
    type: "DELETE_CAR",
    payload: data
  }
}

export function delCar(data) {
  return function(dispatch) {
    dispatch(removeCar(data));
    return axios.delete(`/api/delete_car/${data}`)
      .catch(function(error) {
        console.error(error);
      });
  }
}

export function addNewCar(data) {
  return {
    type: "ADD_NEW_CAR",
    payload: data
  }
}

export function saveNewCar(data) {
  return function(dispatch) {
    return axios.post('/api/save_cars', {data: data})
      .then((res) => {
        dispatch(addNewCar(res.data));
        return res;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
}