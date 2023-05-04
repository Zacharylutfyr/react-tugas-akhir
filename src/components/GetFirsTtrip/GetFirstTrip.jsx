import React from 'react';


const GetFirstTrip = () => {
  return (
    <>
      {/* <!-- Get First trip --> */}
      <div className='get-first-trip get-first-trip-discovery'>
        <div className='container'>
          <div className='our-package-content'>
            <div className='down-side-content'>
              <div className='row down-side-rows'>
                <div className='col-9 left-down-side'>
                  <h1>
                    Get 15% <span>for your</span> first trip
                  </h1>
                  <p>
                    Attention all first-time travelers! We're excited to offer
                    an exclusive discount just for you. Book your first trip
                    with us today and receive 10% off your entire journey.
                  </p>
                </div>
                <div className='col-3 right-down-side'>
                  <button type='button' className='btn button'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Get First trip --> */}
    </>
  );
};

export default GetFirstTrip;
