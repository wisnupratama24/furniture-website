import React from "react";
import img_card from "assets/images/img-card.jpg";
import Button from "elements/Button";
export default function Card() {
  return (
    <section
      className='container mt-5'
      style={{ display: "flex", justifyContent: "center" }}>
      <div className='card card-design'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <img src={img_card} className='h-100 image-card' alt='img' />
          </div>
          <div className='col-md-8 col-12 card-awards'>
            <div className='card-block '>
              <h3 className='card-title' style={{ width: 383 }}>
                Design Awards For Badroom Ideas
              </h3>
              <p className='card-text' style={{ width: 383 }}>
                “The problem with my house is that I have one open space to be
                divided into living room, work space, kitchen, and dining area.
                Hopefully, IKEA has the right solution. Thank you.” – Eva
                Anastasia
              </p>
            </div>
            <Button className='btn  font-weight-bold mt-5' hasShadow isPrimary>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
