import React from 'react';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const ContentAboutUs = () => {
  return (
    <>
      {/* <!-- Most Picked Destination --> */}
      <div class='conten mar-top'>
        <div class='container'>
          <div class='row'>
            <div class='col-6 most-text px-5'>
              <h4>Recommend</h4>
              <h2>Most Picked Destination</h2>
            </div>
            <div class='col-6 text-end px-5'>
              <button>See all</button>
            </div>
          </div>
          <div class='row'>
            <div class='d-flex flex-wrap justify-content-center'>
              <div class='img-box'>
                <img src={content1} alt='content1' />
                <h2>Pulau Lombok</h2>
                <p>Lombok</p>
              </div>
              <div class='img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
                <p>Yogyakarta</p>
              </div>
              <div class='img-box'>
                <img src={content3} alt='content3' />
                <h2>Gunung Bromo</h2>
                <p>Probolinggo</p>
              </div>
              <div class='img-box'>
                <img src={content4} alt='content4' />
                <h2>Pulau Komodo</h2>
                <p>Nusa Tenggara Timur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Most Picked Destination --> */}
    </>
  );
};

export default ContentAboutUs;
