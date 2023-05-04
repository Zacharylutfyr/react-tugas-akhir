import React from 'react';
import nusa from '../../assets/img/nusa.jpg';
import content1 from '../../assets/img/pulaulombok.jpg';
import content2 from '../../assets/img/candiborobudur.jpg';
import content3 from '../../assets/img/gunungbromo.jpg';
import content4 from '../../assets/img/pulaukomodo.jpg';

const ContentHalf = () => {
  return (
    <>
      {/* <!-- Destination may you liked --> */}
      <div className='conten destination-private-martop'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 most-text px-5'>
              <h4>Related</h4>
              <h2>Destination may you liked</h2>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-12 d-flex justify-content-between align-items-center px-5 scrol'>
              <div className='col-lg-3 img-box'>
                <img src={nusa} alt='' />
                <h2>Nusa Penida</h2>
                <p>Kelungkung, Bali</p>
              </div>
              <div className='col-lg-3 img-box'>
                <img src={content1} alt='content1' />
                <h2>Pulau Lombok</h2>
                <p>Lombok</p>
              </div>
              <div className='col-lg-3 img-box'>
                <img src={content2} alt='content2' />
                <h2>Candi Borobudur</h2>
                <p>Yogyakarta</p>
              </div>
              <div className='col-lg-3 img-box'>
                <img src={content3} alt='content3' />
                <h2>Gunung Bromo</h2>
                <p>Probolinggo</p>
              </div>
              <div className='col-lg-3 img-box'>
                <img src={content4} alt='content4' />
                <h2>Pulau Komodo</h2>
                <p>Nusa Tenggara Timur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Destination may you liked --> */}
    </>
  );
};

export default ContentHalf;
