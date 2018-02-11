import React, {Component} from "react";
import "./css/Header.less";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import {shuffleArr, concatArr} from "./../../libs/functions";

import Slider from "./../components/Slider";

class Header extends Component {
  render() {
    let checkState, slider; 
    let {getAllMoto, getAllCars} = this.props;
    let allProducts = concatArr(getAllMoto, getAllCars);

    if(this.props.getAllMoto.length !== 0 && this.props.getAllCars.length !== 0) {
      checkState = allProducts.length;
      slider = (<Slider products={allProducts} checkStates = {checkState}/>);
    }

    return (
      <div id="head-wrap">
        <h1>All &nbsp; for &nbsp; superheroes</h1>
        {slider}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    //allproducts: state.getAllMoto.concat(state.getAllCars),
    getAllMoto: state.getAllMoto,
    getAllCars: state.getAllCars
  }
}

export default withRouter(connect(mapStateToProps)(Header));