import React from 'react';
import discoveryHero from '../../assets/img/nusa.jpg'
import discoveryHero2 from '../../assets/img/b1.jpg'

const DiscoveryHero = () => {
  return (
    <>
    
      <div class='hero'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-8 col-md-12 col-sm-12 px-5 align-items-center left-hero'>
              <div class='content-box'>
                <h1>Exploring Wonderful Indonesia</h1>
                <p>
                  At Wonderful Indonesia, we believe that travel should be an
                  unforgettable experience, and we're dedicated to making sure
                  that every moment you spend with us is one to remember. So why
                  wait? Book your adventure today and discover the magic of
                  Indonesia.
                </p>
                <button type='button' class='btn bg-green1'>
                  Explore Now <i class='fa-regular fa-circle-right px-3'></i>
                </button>
              </div>
            </div>
            <div class='col-lg-4 col-md-12 col-sm-12 px-5 right-hero'>
              <div class='banner'>
                <img src={discoveryHero} alt='' />
              </div>
              <div class='banner1'>
                <img src={discoveryHero2} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryHero;
