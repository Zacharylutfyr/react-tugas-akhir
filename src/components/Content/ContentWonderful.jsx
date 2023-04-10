import React from 'react';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const ContentWonderful = () => {
  return (
    <>
      {/* <!-- Private Trip Experience & Wonderful Place --> */}
      <div class='conten wonderful-package-martop'>
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
                <img src={content3} alt='content3' />
                <h2>Gunung Bromo</h2>
              </div>
              <div class='img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
              </div>
              <div class='img-box'>
                <img src={content1} alt='content1' />
                <h2>Pulau Lombok</h2>
              </div>
              <div class='img-box'>
                <img src={content4} alt='content4' />
                <h2>Pulau Komodo</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Private Trip Experience & Wonderful Place --> */}
    </>
  );
};

export default ContentWonderful;
