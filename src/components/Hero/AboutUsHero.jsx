import React from 'react';
import borderHero from '../../assets/img/about-us-border-hero.png'
import imageHero from '../../assets/img/register_login.png'


const AboutUsHero = () => {
  return (
    <>
      {/* <!-- hero --> */}
      <div className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-sm-12 px-5 align-items-center left-hero'>
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
              <div className='about-us-border-hero'>
                <img src={borderHero} alt='about-us-border-hero.png' />
              </div>
              <div className='about-us-image-hero'>
                <img src={imageHero} alt='register_login.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end hero --> */}
    </>
  );
};

export default AboutUsHero;
