import React from 'react';
import ourEthics from '../../assets/img/our-ethics.png'
import innovations from '../../assets/img/innovations.png'
import responsibility from '../../assets/img/responsibility.png'




const TravelExperience = () => {
  return (
    <>
      {/* <!-- Travel Experience --> */}
      <div class='travel-experience travel-experience-discovery'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12 col-lg-6 left-travel-experience'>
              <div class='content-left-travel'>
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
            <div class='col-md-12 col-lg-6 right-travel-experience'>
              <div class='box box-our-ethics'>
                <div class='up-side'>
                  <h6>
                    <img src={ourEthics} class='me-2' alt='' />
                    Our Ethics
                  </h6>
                </div>
                <div class='down-side'>
                  <p>Prioritizing Happy Traveling, Upholding Culture</p>
                </div>
              </div>
              <div class='box box-innovations'>
                <div class='up-side'>
                  <h6>
                    <img src={innovations} class='me-2' alt='' />
                    Innovations
                  </h6>
                </div>
                <div class='down-side'>
                  <p>Innovating in Service to Our Travel Customers</p>
                </div>
              </div>
              <div class='box box-responsibility'>
                <div class='up-side'>
                  <h6>
                    <img src={responsibility} class='me-2' alt='' />
                    Responsibility
                  </h6>
                </div>
                <div class='down-side'>
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

export default TravelExperience;
