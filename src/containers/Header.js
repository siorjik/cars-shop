import React, {Component} from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Header.less";

export default class Header extends Component {
  render() {
    return (
      <div id="head-wrap">
        <h1>Cars &nbsp; for &nbsp; superheroes</h1>
        <Carousel className="carousel-wrap" showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000}>
          <div>
            <img src={require("./../img/porche.png")}/>
            <p className="legend">Porche - 50000$</p>
          </div>
          <div>
            <img src={require("./../img/concept.png")}/>
            <p className="legend">Concept - 75000$</p>
          </div>
          <div>
            <img src={require("./../img/audi.png")}/>
            <p className="legend">Audi - 45000$</p>
          </div>
        </Carousel>
      </div>
    );
  }
}