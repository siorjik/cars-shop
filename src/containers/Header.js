import React, {Component} from "react";
import "./css/Header.less";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import Slider from "./../components/Slider";

class Header extends Component {
  render() {
    return (
      <div id="head-wrap">
        <h1>Cars &nbsp; for &nbsp; superheroes</h1>
        <Slider allCars={this.props.allCars}/>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    allCars: state.getAllCars
  }
}

export default withRouter(connect(mapStateToProps)(Header));