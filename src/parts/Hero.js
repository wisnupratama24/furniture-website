import React from "react";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
export default function Hero({ data }) {
  return (
    <section className="container pt-5 hero">
      {data.map((item, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            <div className="col-6 left">
              <h2 className="h1" style={{ fontSize: 64 }}>
                {item.name}
              </h2>
              <p> {item.detail}</p>
              <div className="circle-color">
                {item.items.map((product, index2) => {
                  return (
                    <div
                      style={{ backgroundColor: product.color }}
                      key={`color-${index2}`}
                    ></div>
                  );
                })}
              </div>
              <br />
              <h3> Rp. {formatNumber(item.price)}</h3>
              <Button className="btn px-3 font-weight-bold" hasShadow isPrimary>
                Buy now
              </Button>
            </div>

            <div className="col-6 bg-right">
              {item.items.map((product, index3) => {
                return (
                  <img
                    src={product.imageUrl}
                    alt={`img-${index3}`}
                    key={`img-${index3}`}
                    className={`${index3 === 0 ? " d-block" : " d-none"}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
