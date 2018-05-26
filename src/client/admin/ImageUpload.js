import React from "react";
import axios from "axios";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      message: "Please upload image..."
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.file) return;

    let form = new FormData();
    form.append("imgProduct", this.state.file);
    form.append("type", this.props.type);
    form.append("fileName", this.state.file.name);

    axios.post("api/upload_img", form)
      .then((res) => {
        if(res.data === "File was uploaded!") {
          let productClone = Object.assign({}, this.props.product);
          productClone.img = this.state.file.name;

          this.props.updateCar(productClone);
        }
      
        this.setState({message: res.data});
      })
      .catch(err => console.error(err));
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl, file, message} = this.state;
    let {srcImg, alt, newProduct, message: messageProps} = this.props;
    let imageSrc, nameImg, color = "black";

    if(message === "File was uploaded!" || messageProps === "File was uploaded!") color = "green";
    if(message === "This file name is exist!" || messageProps === "This file name is exist!") color = "red";

    if (imagePreviewUrl) {
      imageSrc = imagePreviewUrl;
      nameImg = file.name;
    }
    else {
      imageSrc = srcImg;
      nameImg = alt;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="wrap-head-btn">
            <label>Select Image
              <input type="file" style={{"visibility": "hidden"}} onChange={this.handleImageChange.bind(this)} ref={this.props.fileRef}/>
            </label>
            {newProduct ? null : <button>Upload</button>}
          </div>
        </form>
        <img src={imageSrc} alt={nameImg} ref={this.props.imgRef}/>
        <p style={{color: color}}><b>{messageProps || message}</b></p>
      </div>
    )
  }
}