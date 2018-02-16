import React from "react";
import "./css/ProductCard.less";
import {NavLink} from "react-router-dom";
import MdAddShoppingCart from "react-icons/lib/md/add-shopping-cart";
import MdAttachMoney from "react-icons/lib/md/attach-money";
import MdVisibility from "react-icons/lib/md/visibility";

export default class ProductCard extends React.Component {
  render() {
    let product = this.props.product;
    
    return (
      <div className="product-card">
        <div className="wrap-img"><img src={require(`./../img/${product.type}/${product.img}`)} alt={product.name}/></div>
        <h3>{product.name}</h3>
        <p><b>Price:</b> {product.price}</p>
        <div className="btn-wrap">
          <NavLink to={`/view_product/${product.type}/${product._id}`}><button><MdVisibility/> View</button></NavLink>
          <button><MdAttachMoney/> Buy</button>
          <button><MdAddShoppingCart/> Add</button>
        </div>
      </div>
    );
  }
}