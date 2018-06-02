import React from "react";
import "./Admin.less";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Proptypes from "react-proptypes";
import axios from "axios";

import {updateCar, delCar, saveNewCar} from "./../actions/carsActions";
import {updateMoto, delMoto, saveNewMoto} from "./../actions/motoActions";

import Product from "./Product";
import Modal from "./../components/Modal";
import EditForm from "./EditForm";
import ImageUpload from "./ImageUpload";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propsState: [],
      head: "Choose a product!",
      modal: false,
      message: ""
    };
  }
  
  getProducts(prod) {
    switch(prod) {
      case "cars":
        this.setState((prevState, props) => ({
          propsState: props.getAllCars,
          head: "Cars"
        }));
      break;
      case "moto":
        this.setState((prevState, props) => ({
          propsState: props.getAllMoto,
          head: "Moto"
        }));
      break;
      default: this.setState({propsState: this.props.getAllCars, head: "Cars"});
    }
  }

  delProduct(_id, img, type) {
    axios.post("/api/delete_img", {img: img, type: type})
      .then((res) => {
        switch (type) {
          case "cars":
            this.props.delCar(_id);
            this.setState((prevState, props) => ({
              propsState: props.getAllCars
            }));
          break;
          case "moto":
            this.props.delMoto(_id);
            this.setState((prevState, props) => ({
              propsState: props.getAllMoto
            }));
          break;
        }
      })
      .catch((err) => console.log(err));
  }

  updateProduct(obj, type) {
    switch(type) {
      case "cars":
        this.props.updateCar(obj);
      break;
      case "moto":
        this.props.updateMoto(obj);
      break;
    }
  }

  //modal
  addNew() {
    this.setState({modal: true, message: "Please upload image..."});
  }
  closeModal() {
    this.setState({modal: false});
  }
  saveNewProduct(data) {
    let newProduct = {}, empty = false;
    Array.prototype.forEach.call(this.formData.children, (child) => {
      if(child.value === "") {
        empty = true;
        child.style.border = "1px solid red";
      }
      else if(child.tagName === "INPUT" || child.tagName === "SELECT") newProduct[child.name] = child.value;
    });

    if(!this.imgData.alt) empty = true;
    newProduct.img = this.imgData.alt;

    if(!empty) {
      let form = new FormData();
      form.append("imgProduct", this.fileData.files[0]);
      form.append("type", newProduct.type);
      form.append("fileName", newProduct.img);

      axios.post("api/upload_img", form)
      .then((res) => {
        this.setState({message: res.data});

        if(res.data === "File was uploaded!") {
          this.closeModal();
          switch(newProduct.type) {
            case "cars":
              return this.props.saveNewCar(newProduct);
            break;
            case "moto":
              return this.props.saveNewMoto(newProduct);
            break;
          }
        }
      })
      .then((res) => {
        this.setState({propsState: [...this.state.propsState, res.data]});
        
      })
      .catch(err => console.error(err));
    }
    else return;
  }

  render() {
    let selectType = (
      <select name="type">
        {this.props.types.map((item, index) => {
          return (<option key={index} value={item}>{item}</option>);
        })}
      </select>
    );

    let addNewProductContent = (
      <div className="content">
        <div>
          <EditForm formRef={form => this.formData = form} selectType={selectType}/>
        </div>
        <div className="prod-img">
          <ImageUpload newProduct={true} imgRef={img => this.imgData = img} fileRef={file => this.fileData = file} message={this.state.message}/>
        </div>
      </div>
    );

    return (
      <div id="frame-wrap">
        <div className="wrap-btn-menu">
          <input type="button" value="Cars" onClick={this.getProducts.bind(this, "cars")}/>
          <input type="button" value="Moto" onClick={this.getProducts.bind(this, "moto")}/>
        </div>
        <div className="wrap-head-btn">
          <div><button onClick={this.addNew.bind(this)}>Add new</button></div>
          <h2>{this.state.head}</h2>
        </div>
        <div id="wrap-prod">
          {this.state.propsState.map((item) => {
            return (
              <Product  key={item._id} product={item} updateProduct={this.updateProduct.bind(this)} getProducts={this.getProducts.bind(this)} delProduct={this.delProduct.bind(this)}/>
            );
          })}
        </div>
        {this.state.modal ? <Modal modal={this.state.modal} closed={this.closeModal.bind(this)} saveNewProduct={this.saveNewProduct.bind(this)}>{addNewProductContent}</Modal> : null}
      </div>
    );
  }
}

Admin.propTypes = {
  getAllCars: Proptypes.array,
  getAllMoto: Proptypes.array
};

let mapStateToProps = (state) => {
  let typeProds = new Set(), types = [];
  for(let key in state) {
    if(key !== "routing") {
      if(state[key][0]) {
        typeProds.add(state[key][0].type);
      }
    }
  }

  typeProds.forEach(item => {
    types.push(item);
  });

  typeProds.clear();

  return {
    getAllCars: state.getAllCars,
    getAllMoto: state.getAllMoto,
    types: types
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCar,
    delCar,
    saveNewCar,
    updateMoto,
    delMoto,
    saveNewMoto
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);