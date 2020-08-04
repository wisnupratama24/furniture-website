import React from "react";
import sofa_yellow from "assets/images/sofa_yellow.png";
import Button from "elements/Button";
export default function Hero() {
  return (
    <section className="container pt-5 hero">
      <div className="row">
        <div className="col-6 left">
          <h2 className="h1" style={{ fontSize: 64 }}>
            {" "}
            BINGSTA
          </h2>
          <p>
            {" "}
            Dengan panel belakang yang melengkung dan merangkul, kursi berlengan
            BINGSTA memungkinkan Anda bersantai dengan tenang - meski di area
            terbuka.
          </p>
          <div className="circle-color">
            <div> </div>
            <div> </div>
          </div>
          <br />
          <h3> Rp. 3.495.000 </h3>
          <Button className="btn px-3 font-weight-bold" hasShadow isPrimary>
            Buy now
          </Button>
        </div>
        <div className="col-6 bg-right">
          <img src={sofa_yellow} alt="sofa-yellow" />
        </div>
      </div>
    </section>
  );
}
