import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slider extends React.Component {
  render() {
    let carousel = null;
    
    if(this.props.products.length === this.props.checkStates && this.props.products) {
      let props = this.props.products.filter((item) => {
        if(item.hot) return item;
      });

      carousel = (
        <Carousel className="carousel-wrap" showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={true}>
          {props.map((product, index) => {
            let src = require(`./../img/${product.type}/${product.img}`);
            return (
              <div key={product._id}>
                <h3 style={{"color": "yellowgreen"}}><strong><i>Buy now! <span style={{"color": "yellow"}}>Hot price - </span><span style={{"color": "aqua"}}>{product.price}</span></i></strong></h3>
                <img src={src} alt={product.name}/>
                <p className="legend">{product.name}</p>
              </div>
            );
          })}
        </Carousel>
      )
    }

    return (<div>{carousel}</div>);
  }
}