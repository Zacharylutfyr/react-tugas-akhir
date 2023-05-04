import React from 'react';
import heroDestination from '../../assets/img/hero-destination-1.jpeg'
import heroDestination2 from '../../assets/img/hero-destination-2.jpg'
import heroDestination3 from '../../assets/img/hero-destination-3.jpg'


const DestinationHero = () => {
  return (
    <>
      {/* <!-- hero --> */}
      <div className='hero-package'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-sm-12 px-5 left-hero'>
              <div className='content-box'>
                <h1>Wonderful Destination Trip</h1>
                <p>
                  With its stunning landscapes, vibrant cities, and rich
                  history, Destination trip has something for everyone. Explore
                  ancient ruins and towering mountains, relax on pristine
                  beaches and turquoise waters, or indulge in local cuisine and
                  vibrant nightlife.
                </p>
                <button type='button' className='btn bg-green1'>
                  Explore Now <i className='fa-regular fa-circle-right px-3'></i>
                </button>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 right-hero'>
              <div className='one-box-hero-destination'></div>
              <div className='hero-destination-1'>
                <img src={heroDestination} alt='' />
              </div>
              <div className='hero-destination-2'>
                <img src={heroDestination2} alt='' />
              </div>
              <div className='five-box hero-destination-3'>
                <img src={heroDestination3} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end hero --> */}
    </>
  );
};

export default DestinationHero
