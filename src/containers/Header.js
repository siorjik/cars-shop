import React, {Component} from "react";
import "./css/Header.less";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import Slider from "./../components/Slider";

class Header extends Component {
  render() {
    return (
      <div id="head-wrap">
        <h1>All &nbsp; for &nbsp; superheroes</h1>
        <Slider product={this.props.allproducts}/>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    allproducts: state.getAllProducts
  }
}

export default withRouter(connect(mapStateToProps)(Header));