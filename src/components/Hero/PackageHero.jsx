import React from 'react';
import gambar1 from '../../assets/img/gambar1.jpg'
import gambar2 from '../../assets/img/gambar2.jpg'
import gambar3 from '../../assets/img/gambar3.jpg'

const PackageHero = () => {
  return (
    <>
      {/* <!-- hero --> */}
      <div class='hero-package'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-8 col-sm-12 px-5 left-hero'>
              <div class='content-box'>
                <h1>Travel Package</h1>
                <p>
                  Looking for the perfect travel package? Look no further! We
                  offer both open trips and private trips to [Destination], so
                  you can choose the option that best suits your needs.
                </p>
                <button type='button' class='btn bg-green1'>
                  Explore Now <i class='fa-regular fa-circle-right px-3'></i>
                </button>
              </div>
            </div>
            <div class='col-lg-4 col-md-12 col-sm-12 right-hero'>
              <div class='one-box'></div>
              <div class='two-box'></div>
              <div class='three-box'>
                <img src={gambar1} alt='' />
              </div>
              <div class='four-box'>
                <img src={gambar2} alt='' />
              </div>
              <div class='five-box'>
                <img src={gambar3} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end hero --> */}
    </>
  );
};

export default PackageHero;
