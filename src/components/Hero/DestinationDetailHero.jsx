import React from 'react';
import gambar3 from '../../assets/img/gambar3.jpg';
import nusa from '../../assets/img/nusa.jpg';
import b1 from '../../assets/img/b1.jpg';
import gambar2 from '../../assets/img/gambar2.jpg';

const DestinationDetailHero = () => {
  return (
    <>
      {/* <!-- hero destination --> */}
      <div class='private-paket mar-top'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 px-5'>
              <h1>Nusa Penida, Kelungkung, Bali</h1>
              <div class='row'>
                <div class='col d-flex'>
                  <span class='me-5 px-1'>
                    <i class='fa-regular fa-map me-2'></i>
                    Island/Adventure
                  </span>
                  <span class='px-1'>
                    <i class='fa-sharp fa-solid fa-location-dot me-2'></i>
                    Bali, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-8 ps-5'>
              <div class='img-fluid'>
                <img src={gambar3} id='imgFluid' alt='' />
              </div>
              <div class='img-clik flow-over'>
                <img
                  src={gambar3}
                  id='imgClick'
                  onclick='{ChangeImage(this.src)'
                  alt=''
                />
                <img
                  src={nusa}
                  id='imgClick'
                  onlick='ChangeImage(this.src)'
                  alt=''
                />
                <img
                  src={b1}
                  id='imgClick'
                  onclick='ChangeImage(this.src)'
                  alt=''
                />
                <img
                  src={gambar2}
                  id='imgClick'
                  onclick='ChangeImage(this.src)'
                  alt=''
                />
                <img
                  src={nusa}
                  id='imgClick'
                  onclick='ChangeImage(this.src)'
                  alt=''
                />
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='box-price'>
                <div class='destination-title'>
                  <h3>Destination overview</h3>
                </div>
                <div class='price-title d-flex justify-content-between'>
                  <div class='city'>
                    <h4>Nusa Penida, Bali</h4>
                    <p>60 reviews</p>
                  </div>
                  <div class='star'>
                    <i class='fa-sharp fa-solid fa-star'></i>
                    <span>4.5</span>
                  </div>
                </div>
                <div class='price-city'>
                  <h4>Rp. 1.000.000 / Pax</h4>
                </div>
                <button type='button' class='btn btn-success'>
                  Book Now
                </button>
                <hr />
                <p>
                  Specials offer for new traveler 15 % off. Valid until 5 August
                  2023
                </p>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-8 px-5 mt-5'>
              <div class='conten-detail'>
                <button
                  type='button'
                  class='btn btn-success me-3'
                  id='btn1'
                  data-bs-toggle='collapse'
                  href='#collapseExample'
                  data-bs-target='#collapseExample'
                  aria-expanded='false'
                  aria-controls='collapseExample'>
                  Description
                </button>
                <button
                  type='button'
                  class='btn btn-success'
                  id='btn2'
                  data-bs-toggle='collapse'
                  href='#collapseExample2'>
                  What’s include
                </button>
                <div id='collapseExample' class='collapse show'>
                  <div class='card card-body'>
                    <p>
                      If you're planning a trip to Bali, you might want to
                      consider a visit to Nusa Penida. This beautiful island is
                      located southeast of Bali and is known for its stunning
                      beaches, crystal clear waters, and picturesque landscapes.
                      In this article, we'll take a closer look at Nusa Penida
                      and provide you with some tips for planning your trip.
                      <br />
                      <br />
                      The easiest way to get to Nusa Penida is to take a fast
                      boat from Sanur or Padang Bai. The journey takes
                      approximately 45 minutes to 1 hour, depending on the sea
                      conditions. You can also take a ferry from Padang Bai,
                      which is cheaper but takes longer.
                    </p>
                  </div>
                </div>
                <div id='collapseExample2' class='collapse'>
                  <div class='card card-body'>
                    <div class='acomodation'>
                      <span>
                        <i class='icon fa-solid fa-car'></i>Acomodation
                      </span>
                      <p>
                        Nusa Penida has a variety of accommodations to choose
                        from, ranging from budget-friendly guesthouses to luxury
                        resorts. Some popular options include:
                        <li>Semabu Hills Hotel Nusa Penida</li>
                        <li>Daphila Cottage</li>
                        <li>La Roja Bungalows</li>
                        <li>Nusa Veranda Sunset Villas & Restaurant</li>
                      </p>
                    </div>
                    <div class='destination'>
                      <span>
                        <i class='icon fa-solid fa-map-location'></i>Destination
                      </span>
                      <li>Visit Kelingking Beach</li>
                      <li>Explore Angel's Billabong</li>
                      <li>Snorkel at Crystal Bay</li>
                      <li>Visit Broken Beach</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end hero --> */}
    </>
  );
};

export default DestinationDetailHero;
