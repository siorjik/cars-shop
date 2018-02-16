import React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import ProductCard from "./../components/ProductCard";

class Cars extends React.Component {
  render() {
    return (
      <div id="transport-wrap">
        {this.props.getAllCars.map((car) => {
          return (<ProductCard key={car._id} product={car}/>);
        })}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    getAllCars: state.getAllCars
  }
}

export default withRouter(connect(mapStateToProps)(Cars));