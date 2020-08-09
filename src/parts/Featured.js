import React, { Component } from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "elements/Slider/NextArrow";
import PrevArrow from "elements/Slider/PrevArrow";
import ImageFigure from "elements/Slider/ImageFigure";

export default class Featured extends Component {
  render() {
    const { data } = this.props;
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
      <Fade bottom>
        <section className='container' style={{ marginTop: 100 }}>
          <div className='featured mt-5 mx-5'>
            <h2 className='h3 text-center'>Featured</h2>
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <Fade delay={300 * index} bottom>
                    <ImageFigure
                      dataImage={item}
                      key={`image-featured-${index}`}
                    />
                  </Fade>
                );
              })}
            </Slider>
          </div>
        </section>
      </Fade>
    );
  }
}

Featured.propTypes = {
  data: propTypes.array,
};
