import React from "react";
import "./index.scss";
import ic_arrow from "assets/images/ic_arrow.svg";
export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={ic_arrow}
      alt="next-arrow"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
