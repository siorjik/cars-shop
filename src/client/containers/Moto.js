import React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import ProductCard from "./../components/ProductCard";

class Moto extends React.Component {
  render() {
    return (
      <div id="transport-wrap">
        {this.props.getAllMoto.map((moto) => {
          return (<ProductCard key={moto._id} product={moto}/>);
        })}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    getAllMoto: state.getAllMoto
  }
}

export default withRouter(connect(mapStateToProps)(Moto));