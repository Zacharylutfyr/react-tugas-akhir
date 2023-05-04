import React from 'react';
import gambar1 from '../../assets/img/gambar1.jpg'
import gambar2 from '../../assets/img/gambar2.jpg'
import gambar3 from '../../assets/img/gambar3.jpg'

const PackageHero = () => {
  return (
    <>
      {/* <!-- hero --> */}
      <div className='hero-package'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-sm-12 px-5 left-hero'>
              <div className='content-box'>
                <h1>Travel Package</h1>
                <p>
                  Looking for the perfect travel package? Look no further! We
                  offer both open trips and private trips to [Destination], so
                  you can choose the option that best suits your needs.
                </p>
                <button type='button' className='btn bg-green1'>
                  Explore Now <i className='fa-regular fa-circle-right px-3'></i>
                </button>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 right-hero'>
              <div className='one-box'></div>
              <div className='two-box'></div>
              <div className='three-box'>
                <img src={gambar1} alt='' />
              </div>
              <div className='four-box'>
                <img src={gambar2} alt='' />
              </div>
              <div className='five-box'>
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
