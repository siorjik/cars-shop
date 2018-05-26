import React from "react";
import "./css/Modal.less";

import EditForm from "./../admin/EditForm";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: this.props.modal}
  }

  closeModal() {
    this.setState({show: false});
    this.props.closed();
  }

  saveData() {
    this.props.saveNewProduct("data");
  }

  render() {
    let modal = (
      <div id="modal-wrap">
        <div className="modal-content-wrap">
          <p><span className="close-modal" onClick={this.closeModal.bind(this)}><b>X</b></span></p>
          <div className="content-modal">
            {this.props.children}
          </div>
          <div className="footer-btn-wrap">
            <button onClick={this.saveData.bind(this)}>Save</button>
            <button onClick={this.closeModal.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
    );

    return (<div>{this.state.show ? modal : null}</div>);
  }
}