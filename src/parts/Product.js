import React from "react";
import formatNumber from "utils/formatNumber";
export default function Product({ data }) {
  return (
    <section className='container image-product'>
      <div className='container-grid'>
        {data.map((item, index) => {
          return (
            <div
              key={`image-product-${index}`}
              className={`item ${
                index === 4 ? "row-2 column-6" : "column-3 row-1"
              }`}>
              <div className='card card-featured '>
                <figure className='img-wrapper'>
                  <img
                    className='img-wrapper'
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </figure>
              </div>
              <div className='meta-wrapper'>
                <span> {item.name} </span>
                <span className='font-weight-light'>
                  {" "}
                  Rp. {formatNumber(item.price)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
