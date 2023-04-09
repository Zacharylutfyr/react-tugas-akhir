import React from 'react';


const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <div class='footer'>
        <div class='container'>
          <div class='footer-content'>
            <div class='up-side-footer d-flex pt-5'>
              <div class='menu pe-4'>
                <h6 class='mb-4'>Menu</h6>
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
              <div class='features px-4'>
                <h6 class='mb-4'>Features</h6>
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
              <div class='travelark px-4'>
                <h6 class='mb-4'>Travelark</h6>
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

            <div class='down-side-footer'>
              <div class='left'>
                <img
                  src='img/footer-travelark.png'
                  alt=''
                  class='travelark-orange-logo mb-2'
                />
                <h6>Jakarta, Indonesia</h6>
              </div>

              <div class='right'>
                <div class='icons mb-2'>
                  <a href='#youtube'>
                    <i class='fa-brands fa-youtube fa-2x px-2'></i>
                  </a>
                  <a href='#facebook'>
                    <i class='fa-brands fa-facebook fa-2x px-2'></i>
                  </a>
                  <a href='#instagram'>
                    <i class='fa-brands fa-instagram fa-2x px-2'></i>
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
