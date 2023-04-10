import React from 'react';
import nusa from '../../assets/img/nusa.jpg';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const WonderfulDestination = () => {
  return (
    <>
      {/* <!-- Wonderful Destination --> */}
      <div class='conten wonderful-destination-martop'>
        <div class='container'>
          <div class='row'>
            <div class='col-12 most-text px-5 text-center'>
              <h2>Most Picked Destination</h2>
              <h4>Recommend</h4>
            </div>
          </div>
          <div class='row'>
            <div class='d-flex flex-wrap justify-content-center'>
              <div class='img-box'>
                <img src={content4} alt='content4' />
                <h2>Pulau Komodo</h2>
                <p>Nusa Tenggara Timur</p>
              </div>
              <div class='img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
                <p>Yogyakarta</p>
              </div>
              <div class='img-box'>
                <img src={nusa} alt='' />
                <h2>Nusa Penida</h2>
                <p>Kelungkung, Bali</p>
              </div>
              <div class='img-box'>
                <img src={content1} alt='content1' />
                <h2>Pulau Lombok</h2>
                <p>Lombok</p>
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
                <img src={content1} alt='content1' />
                <h2>Pulau Lombok</h2>
                <p>Lombok</p>
              </div>
              <div class='img-box'>
                <img src={content3} alt='content3' />
                <h2>Gunung Bromo</h2>
                <p>Probolinggo</p>
              </div>
              <div class='img-box'>
                <img src={nusa} alt='' />
                <h2>Nusa Penida</h2>
                <p>Kelungkung, Bali</p>
              </div>
              <div class='img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
                <p>Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Wonderful Destination --> */}
    </>
  );
};

export default WonderfulDestination;
