import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import {shuffleArr, concatArr} from "./../../libs/functions";

import ProductCard from "./../components/ProductCard";

class Main extends Component {
  render() {
    let {getAllMoto, getAllCars} = this.props;
    let allProducts = shuffleArr(concatArr(getAllMoto, getAllCars));

    return (
      <div id="transport-wrap">
        {allProducts.map((product, index) => {
          return (<ProductCard key={index} product={product}/>)
        })}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    //allProducts: state.getAllMoto.concat(state.getAllCars)
    getAllMoto: state.getAllMoto,
    getAllCars: state.getAllCars
  }
}

export default withRouter(connect(mapStateToProps)(Main));