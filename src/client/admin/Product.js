import React from "react";

import ImageUpload from "./ImageUpload";
import EditForm from "./EditForm";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false};
  }

  getEditForm() {
    this.setState({edit: true});
  }

  saveEdit(data) {
    let productClone = Object.assign({}, this.props.product);

    for(let key in productClone) {
      for(let prop in data) {
        if(prop === key) productClone[key] = data[prop];
      }
    }

    let typeProduct = productClone.type;

    this.props.updateProduct(productClone, typeProduct);
    this.setState({edit: false});
    this.props.getProducts(typeProduct);
  }

  closeEdit() {
    this.setState({edit: false});
  }

  delProduct() {
    let {_id, type, img} = this.props.product;
    this.props.delProduct(_id, img, type);
  }

  render() {
    let {name, type, img, classProd, price, hot} = this.props.product;

    let descriptCont = (
      <div>
        <p><b>Name:</b> {name}</p>
        <p><b>Type:</b> {type}</p>
        <p><b>Class:</b> {classProd}</p>
        <p><b>Price:</b> {price}</p>
        <p><b>Hot:</b> {`${hot}`}</p>
      </div>
    );

    return (
      <div className="product">
        <div className="block-btn">
          <input type="button" value="Edit" onClick={this.getEditForm.bind(this)}/>
          <input type="button" value="Delete" onClick={this.delProduct.bind(this)}/>
        </div>
        <div className="prod-descript">
          {this.state.edit ? <EditForm product={this.props.product} closeEdit={this.closeEdit.bind(this)} saveEdit={this.saveEdit.bind(this)}/> : descriptCont}
        </div>
        <div className="prod-img"><ImageUpload srcImg={require(`./../img/${type}/${img}`)} alt={img} type={type} product={this.props.product} updateProduct={this.props.updateProduct}/></div>
      </div>
    );
  }
}