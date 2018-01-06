import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel className="carousel-wrap" showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000}>
        {this.props.allCars.map((car) => {
          return (
            <div key={car.id}>
              <img src={require(`./../img/${car.img}`)} alt={car.name}/>
              <p className="legend">{car.name}</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
}