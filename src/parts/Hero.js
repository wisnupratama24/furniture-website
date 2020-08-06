import React, { Component } from "react";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";
export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      urlImage: "",
    };
  }

  changeImage(url) {
    this.setState((state) => ({
      urlImage: url,
    }));
  }

  render() {
    const { data } = this.props;
    return (
      <section className="container pt-5 hero">
        {data.map((item, index) => {
          return (
            <div className="row" key={`row-${index}`}>
              <Fade left>
                <div className="col-6 left">
                  <h2 className="h1" style={{ fontSize: 64 }}>
                    {item.name}
                  </h2>
                  <p> {item.detail}</p>
                  <div className="circle-color">
                    {item.items.map((item2, index2) => {
                      return (
                        <span
                          className={index2 === 0 ? "active" : ""}
                          id={`circle-${index2}`}
                          style={{ backgroundColor: item2.color }}
                          key={`color-${index2}`}
                          onClick={(e) => {
                            const circle = document.querySelector(
                              `#${e.target.id}`
                            );
                            const spanCircle = document.querySelectorAll(
                              ".circle-color span"
                            );
                            for (let i = 0; i < spanCircle.length; i++) {
                              spanCircle[i].classList.remove("active");
                            }
                            circle.classList.add("active");
                            this.changeImage(item2.imageUrl);
                          }}
                        ></span>
                      );
                    })}
                  </div>
                  <br />
                  <h3> Rp. {formatNumber(item.price)}</h3>
                  <Button
                    className="btn px-3 font-weight-bold"
                    hasShadow
                    isPrimary
                  >
                    Buy now
                  </Button>
                </div>
              </Fade>
              <div className="col-6 bg-right">
                {this.state.urlImage === "" ? (
                  item.items.map((item3, index3) => {
                    return (
                      <Fade right>
                        <img
                          src={item3.imageUrl}
                          className={`${index3 === 0 ? "d-block" : "d-none"}`}
                          alt={`img-${index3}`}
                          key={`img-product-${index3}`}
                        />
                      </Fade>
                    );
                  })
                ) : (
                  <img src={this.state.urlImage} alt="img-product" />
                )}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
