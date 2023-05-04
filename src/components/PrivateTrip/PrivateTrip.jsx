import React from 'react';

const PrivateTrip = () => {
  return (
    <>
      {/* <!-- most picked --> */}
      <div className='conten private-trip-experience-martop'>
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
              <p className='text-conten'>
                Our team of experts will work with you to create a custom
                itinerary based on your interests, preferences, and travel
                style. Whether you're interested in exploring the local culture,
                indulging in delicious cuisine, or embarking on an adventurous
                outdoor excursion, we'll create a trip that's tailored to your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end msot --> */}
    </>
  );
};

export default PrivateTrip;
