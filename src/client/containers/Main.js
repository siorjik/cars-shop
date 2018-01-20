import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import ProductCard from "./../components/ProductCard";

class Main extends Component {
  render() {
    return (
      <div id="transport-wrap">
        {this.props.allProducts.map((product, index) => {
          return (<ProductCard key={index} product={product}/>)
        })}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    allProducts: state.getAllProducts
  }
}

export default withRouter(connect(mapStateToProps)(Main));