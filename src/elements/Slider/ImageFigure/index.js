import React from "react";
import "./index.scss";
import formatNumber from "utils/formatNumber";
export default function ImageFigure({ dataImage }) {
  return (
    <figure className="figure">
      <img
        src={dataImage.imageUrl}
        className="figure-img img-fluid rounded"
        alt={dataImage.name}
      />
      <div className="img-wrapper"></div>
      <div className="information"> </div>
      <span> {dataImage.name} </span>
      <span> Rp. {formatNumber(dataImage.price)}</span>
    </figure>
  );
}
