import React from 'react';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const ContentFluid = () => {
  return (
    <>
      {/* <!-- Private Trip Experience & Wonderful Place --> */}
      <div className='conten-fluid mar-top'>
        <div className='conten private-trip-experience-martop conten-fluid-pad-top'>
          <div className='container'>
            <div className='row d-flex justify-content-between'>
              <div className='col-lg-12 most-text px-5'>
                <h4>Solo Traveler</h4>
                <h2>Private Trip Experience</h2>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-lg-6 px-5'>
                <div className='conten-button'>
                  <button type='button' className='btn btn-success'>
                    <i className='fa-regular fa-calendar'></i>Choose your own date
                  </button>
                  <button type='button' className='btn btn-success'>
                    <i className='fa-solid fa-user-group'></i>Solo or intimate group
                  </button>
                  <button type='button' className='btn btn-success'>
                    <i className='fa-solid fa-building'></i>Custom destination
                  </button>
                </div>
              </div>
              <div className='col-lg-6'>
                <p className='text-conten color-white'>
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
        <div className='conten wonderful-package-martop conten-fluid-pad-bot'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 wonderful-title px-5 text-center'>
                <h1>Wonderful Place</h1>
                <h5>Any destination you want</h5>
              </div>
            </div>
            <div className='row'>
              <div className='d-flex flex-wrap justify-content-center'>
                <div className='img-box'>
                  <img src={content4} alt='content4' />
                  <h2>Pulau Komodo</h2>
                  <p>26 April 2023 | 20 slot lefts</p>
                </div>
                <div className='img-box'>
                  <img src={content1} alt='content1' />
                  <h2>Pulau Lombok</h2>
                  <p>15 May 2023 | 50 slot lefts</p>
                </div>
                <div className='img-box'>
                  <img src={content3} alt='content3' />
                  <h2>Gunung Bromo</h2>
                  <p>30 April 2023 | 10 slot lefts</p>
                </div>
                <div className='img-box'>
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
