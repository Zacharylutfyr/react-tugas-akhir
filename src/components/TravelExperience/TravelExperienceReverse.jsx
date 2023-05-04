import React from 'react';
import ourEthics from '../../assets/img/our-ethics.png'
import innovations from '../../assets/img/innovations.png'
import responsibility from '../../assets/img/responsibility.png'

const TravelExperienceReverse = () => {
  return (
    <>
      {/* <!-- Travel Experience --> */}
      <div className='travel-experience travel-experience-reverse'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 left-travel-experience'>
              <div className='content-left-travel'>
                <h1>
                  The Best Early <br />
                  <span>Travel Experience</span>
                </h1>
                <p>
                  We offer a wide range of services and have many choices of
                  travel packages to accompany your trip. In addition, we also
                  uphold corporate values.
                </p>
              </div>
            </div>
            <div className='col-md-12 col-lg-6 right-travel-experience'>
              <div className='box box-our-ethics'>
                <div className='up-side'>
                  <h6>
                    <img src={ourEthics}  className='me-2' alt='' />
                    Our Ethics
                  </h6>
                </div>
                <div className='down-side'>
                  <p>Prioritizing Happy Traveling, Upholding Culture</p>
                </div>
              </div>
              <div className='box box-innovations'>
                <div className='up-side'>
                  <h6>
                    <img src={innovations}  className='me-2' alt='' />
                    Innovations
                  </h6>
                </div>
                <div className='down-side'>
                  <p>Innovating in Service to Our Travel Customers</p>
                </div>
              </div>
              <div className='box box-responsibility'>
                <div className='up-side'>
                  <h6>
                    <img src={responsibility} className='me-2' alt='' />
                    Responsibility
                  </h6>
                </div>
                <div className='down-side'>
                  <p>Trusted And Experienced Travel Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Travel Last Experience --> */}
    </>
  );
};

export default TravelExperienceReverse;
