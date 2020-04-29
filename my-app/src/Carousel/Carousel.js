import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        const settings = {
          dots: true,
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div>
            <Slider {...settings}>
              <div> {/* Replace filler text with info pulled from API call */}
                <h2>Large Image</h2>
                <h2>Jolene</h2>
                <h2>Dolly Parton</h2>
              </div>
              <div>
                <h2>Large Image</h2>
                <h2>FROOT</h2>
                <h2>Marina</h2>
              </div>
              <div>
                <h2>Large Image</h2>
                <h2>Jolene</h2>
                <h2>Dolly Parton</h2>
              </div>
              <div>
                <h2>Large Image</h2>
                <h2>Chinese New Year</h2>
                <h2>SALES</h2>
              </div>
            </Slider>
          </div>
        );
      }
    }