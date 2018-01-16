import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props: this.props.product}
  }

  render() {
    let props = this.state.props.filter((item) => {
      if(item.hot) return item;
    });

    return (
      <Carousel className="carousel-wrap" showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={true}>
        {props.map((product) => {
          let src = require(`./../img/${product.type}/${product.img}`);
          return (
            <div key={product.id}>
              <h3 style={{"color": "yellowgreen"}}><strong><i>Buy now! <span style={{"color": "yellow"}}>Hot price - </span><span style={{"color": "aqua"}}>{product.price}</span></i></strong></h3>
              <img src={src} alt={product.name}/>
              <p className="legend">{product.name}</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
}