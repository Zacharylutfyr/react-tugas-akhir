import React from 'react';
import footerTravelark from '../../assets/img/footer-travelark.png'



const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <div className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div className='up-side-footer d-flex pt-5'>
              <div className='menu pe-4'>
                <h6 className='mb-4'>Menu</h6>
                <ul>
                  <a href='#discovery'>
                    <li>Discovery</li>
                  </a>
                  <a href='#destination'>
                    <li>Destination</li>
                  </a>
                  <a href='#package'>
                    <li>Package</li>
                  </a>
                  <a href='#about-us'>
                    <li>About us</li>
                  </a>
                </ul>
              </div>
              <div className='features px-4'>
                <h6 className='mb-4'>Features</h6>
                <ul>
                  <a href='#open-trip'>
                    <li>Open Trip</li>
                  </a>
                  <a href='#private-trip'>
                    <li>Private Trip</li>
                  </a>
                  <a href='#destination-trip'>
                    <li>Destination Trip</li>
                  </a>
                </ul>
              </div>
              <div className='travelark px-4'>
                <h6 className='mb-4'>Travelark</h6>
                <ul>
                  <a href='#need-help'>
                    <li>Need Help</li>
                  </a>
                  <a href='#business-inquiry'>
                    <li>Business Inquiry</li>
                  </a>
                  <a href='#who-we-are'>
                    <li>Who we are</li>
                  </a>
                </ul>
              </div>
            </div>

            <div className='down-side-footer'>
              <div className='left'>
                <img
                  src={footerTravelark}
                  alt=''
                  className='travelark-orange-logo mb-2'
                />
                <h6>Jakarta, Indonesia</h6>
              </div>

              <div className='right'>
                <div className='icons mb-2'>
                  <a href='#youtube'>
                    <i className='fa-brands fa-youtube fa-2x px-2'></i>
                  </a>
                  <a href='#facebook'>
                    <i className='fa-brands fa-facebook fa-2x px-2'></i>
                  </a>
                  <a href='#instagram'>
                    <i className='fa-brands fa-instagram fa-2x px-2'></i>
                  </a>
                </div>
                <p>Copyright © 2023 Travelark. Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Last Footer --> */}
    </>
  );
};

export default Footer;
