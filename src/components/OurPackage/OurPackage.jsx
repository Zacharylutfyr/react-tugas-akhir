import React from 'react';
import sky from '../../assets/img/sky.png'

const OurPackage = () => {
  return (
    <>
      {/* <!-- Our Package --> */}
      <div className='our-package'>
        <div className='container'>
          <div className='our-package-content'>
            <div className='up-side-content text-center'>
              <h1>Our Package</h1>
              <h6>More than one destination you will visit</h6>
            </div>
            <div className='middle-side-content'>
              <div className='card private-trip'>
                <h6>1st Package</h6>
                <h1>Private Trip</h1>
                <p>
                  Enjoy the luxury of having your own private guide, who will
                  take you to hidden gems and off-the-beaten-path locations that
                  you won't find in any guidebook.
                </p>

                <div className='sky sky-1'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-2'>
                <img src={sky} alt="" />
                </div>
                <div className='sky sky-3'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-4'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-5'>
                  <img src={sky} alt='sky.png' />
                </div>
              </div>
              <div className='card open-trip'>
                <h6>2nd Package</h6>
                <h1>Open Trip</h1>
                <p>
                  With an open trip, you'll have the opportunity to connect with
                  travelers from all over the world, creating lifelong
                  friendships and unforgettable memories.
                </p>
                <div className='sky sky-1'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-2'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-3'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-4'>
                  <img src={sky} alt='sky.png' />
                </div>
                <div className='sky sky-5'>
                  <img src={sky} alt='sky.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Last Package --> */}
    </>
  );
};

export default OurPackage;
