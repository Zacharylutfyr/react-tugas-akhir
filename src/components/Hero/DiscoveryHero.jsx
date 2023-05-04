import React from 'react';
import discoveryHero from '../../assets/img/nusa.jpg'
import discoveryHero2 from '../../assets/img/b1.jpg'

const DiscoveryHero = () => {
  return (
    <>
    
      <div className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 col-sm-12 px-5 align-items-center left-hero'>
              <div className='content-box'>
                <h1>Exploring Wonderful Indonesia</h1>
                <p>
                  At Wonderful Indonesia, we believe that travel should be an
                  unforgettable experience, and we're dedicated to making sure
                  that every moment you spend with us is one to remember. So why
                  wait? Book your adventure today and discover the magic of
                  Indonesia.
                </p>
                <button type='button' className='btn bg-green1'>
                  Explore Now <i className='fa-regular fa-circle-right px-3'></i>
                </button>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 px-5 right-hero'>
              <div className='banner'>
                <img src={discoveryHero} alt='nusa.jpg' />
              </div>
              <div className='banner1'>
                <img src={discoveryHero2} alt='b1.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoveryHero;
