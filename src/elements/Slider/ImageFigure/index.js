import React from "react";
import img from "assets/images/img-product-3-1.png";
import "./index.scss";
export default function ImageFigure() {
  return (
    <figure className="figure">
      <img
        src={img}
        className="figure-img img-fluid rounded"
        alt="A generic square placeholder imagewith rounded corners in a figure."
      />
      <div className="img-wrapper"></div>
      <div className="information"> </div>
      <span> POÄNG </span>
      <span> Rp 1.095.000</span>
    </figure>
  );
}
