import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "elements/Slider/NextArrow";
import PrevArrow from "elements/Slider/PrevArrow";
import ImageFigure from "elements/Slider/ImageFigure";

export default class Featured extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="container" style={{ marginTop: 100 }}>
        <div className="featured mt-5 mx-5">
          <h2 className="h3 text-center">Featured</h2>
          <Slider {...settings}>
            <ImageFigure />
            <ImageFigure />
            <ImageFigure />
            <ImageFigure />
          </Slider>
        </div>
      </section>
    );
  }
}
