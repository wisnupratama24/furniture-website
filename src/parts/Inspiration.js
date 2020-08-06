import React, { Component } from "react";
import Slider from "react-slick";
import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Inspiration extends Component {
  render() {
    const { imageUrl } = this.props;
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        {imageUrl.map((item, index) => {
          return (
            <section className="inspiration">
              <div>
                <img src={item.imageUrl} alt="ok" />
                <h2> {item.title} </h2>
              </div>
            </section>
          );
        })}
      </Slider>
    );
  }
}

Inspiration.propTypes = {
  imageUrl: propTypes.array,
};
