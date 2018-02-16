import React from "react";
import "./css/ViewProduct.less";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

class ViewProduct extends React.Component {
  render() {
    let {name, type, img} = this.props.product;
    return (
      <div id="view-wrap">
        <p>{name}</p>
        <div><img src={require(`./../img/${type}/${img}`)} alt={name}/></div>
      </div>
  );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    product: state.getAllCars.concat(state.getAllMoto).find((prod) => prod._id === ownProps.match.params._id && prod.type === ownProps.match.params.type)
  }
}

export default withRouter(connect(mapStateToProps)(ViewProduct));