import React, { Component } from "react";
import classes from "./slider.module.css";
import IPhoneWithAirpods from "../assets/iphone-x-with-airpods.jpg";
import Composition from "../assets/composition.jpg";
import Macbook from "../assets/macbook-pro.jpg";

export default class Slider extends Component {
    state = {

        imgArr : [IPhoneWithAirpods, Composition, Macbook],

        currentImage : 0
    }
  plusSlides = num => {
      let {currentImage}  = this.state
    currentImage += num
    if(currentImage < 0 ){
        currentImage = 2
    } else if(currentImage > 2){
        currentImage = 0
    }
    this.setState({currentImage})
  };
  render(){
    const { imgArr, currentImage } = this.state
      return (
        <div className={classes.slideshowContainer}>
          <div className={`${classes.slide} ${classes.fade}`}>
            <img src={imgArr[currentImage]} alt="" key="slider"/>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a onClick={() => this.plusSlides(-1)} className={classes.prev}>
              &#10094;
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a onClick={() => this.plusSlides(1)} className={classes.next}>
              &#10095;
            </a>
          </div>
        </div>
      );
  }
}
