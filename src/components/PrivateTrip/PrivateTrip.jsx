import React from 'react';

const PrivateTrip = () => {
  return (
    <>
      {/* <!-- most picked --> */}
      <div class='conten private-trip-experience-martop'>
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
              <p class='text-conten'>
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
