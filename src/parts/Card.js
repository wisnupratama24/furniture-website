import React from "react";
import img_card from "assets/images/img-card.jpg";
export default function Card() {
  return (
    <section className='container mt-5 mx-5'>
      <div className='card'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={img_card} className='w-100' alt='img' />
          </div>
          <div className='col-md-8'>
            <div className='card-block'>
              <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
              <p className='card-text'>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </p>
              <p className='card-text'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
