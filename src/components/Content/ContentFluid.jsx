import React from 'react';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const ContentFluid = () => {
  return (
    <>
      {/* <!-- Private Trip Experience & Wonderful Place --> */}
      <div class='conten-fluid mar-top'>
        <div class='conten private-trip-experience-martop conten-fluid-pad-top'>
          <div class='container'>
            <div class='row d-flex justify-content-between'>
              <div class='col-lg-12 most-text px-5'>
                <h4>Solo Traveler</h4>
                <h2>Private Trip Experience</h2>
              </div>
            </div>
            <div class='row mt-3'>
              <div class='col-lg-6 px-5'>
                <div class='conten-button'>
                  <button type='button' class='btn btn-success'>
                    <i class='fa-regular fa-calendar'></i>Choose your own date
                  </button>
                  <button type='button' class='btn btn-success'>
                    <i class='fa-solid fa-user-group'></i>Solo or intimate group
                  </button>
                  <button type='button' class='btn btn-success'>
                    <i class='fa-solid fa-building'></i>Custom destination
                  </button>
                </div>
              </div>
              <div class='col-lg-6'>
                <p class='text-conten color-white'>
                  Our team of experts will work with you to create a custom
                  itinerary based on your interests, preferences, and travel
                  style. Whether you're interested in exploring the local
                  culture, indulging in delicious cuisine, or embarking on an
                  adventurous outdoor excursion, we'll create a trip that's
                  tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='conten wonderful-package-martop conten-fluid-pad-bot'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 wonderful-title px-5 text-center'>
                <h1>Wonderful Place</h1>
                <h5>Any destination you want</h5>
              </div>
            </div>
            <div class='row'>
              <div class='d-flex flex-wrap justify-content-center'>
                <div class='img-box'>
                  <img src={content4} alt='content4' />
                  <h2>Pulau Komodo</h2>
                  <p>26 April 2023 | 20 slot lefts</p>
                </div>
                <div class='img-box'>
                  <img src={content1} alt='content1' />
                  <h2>Pulau Lombok</h2>
                  <p>15 May 2023 | 50 slot lefts</p>
                </div>
                <div class='img-box'>
                  <img src={content3} alt='content3' />
                  <h2>Gunung Bromo</h2>
                  <p>30 April 2023 | 10 slot lefts</p>
                </div>
                <div class='img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
                  <p>15 April 2023 | 4 slot lefts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Private Trip Experience & Wonderful Place --> */}
    </>
  );
};

export default ContentFluid;
