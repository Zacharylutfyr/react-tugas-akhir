import React from 'react';
import gambar3 from '../../assets/img/gambar3.jpg';
import nusa from '../../assets/img/nusa.jpg';
import b1 from '../../assets/img/b1.jpg';
import gambar2 from '../../assets/img/gambar2.jpg';

function OpenDetailHero() {
  return (
    <>
      {/* <!-- hero destination --> */}
      <div className='open-paket'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 px-5'>
              <h1>Bali</h1>
              <div className='row'>
                <div className='col d-flex'>
                  <span className='me-5 px-1'>
                    <i className='fa-regular fa-map me-2'></i>
                    Island/Adventure
                  </span>
                  <span className='me-5 px-1'>
                    <i className='fa-sharp fa-solid fa-location-dot me-2'></i>
                    Bali, Indonesia
                  </span>
                  <span className='px-1'>
                    <i className='fa-sharp fa-solid fa-location-dot me-2'></i>
                    Private Trip
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-around'>
            <div className='col-lg-8 ps-5'>
              <div className='img-fluid'>
                <img src={gambar3} id='imgFluid' alt='' />
              </div>
              <div className='img-clik flow-over'>
                <img
                  src={gambar3}
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
            <div className='col-lg-4'>
              <div className='box-private box-private-open'>
                <div className='destination-title'>
                  <h3>Destination overview</h3>
                </div>
                <div className='price-title d-flex justify-content-between'>
                  <div className='city'>
                    <h4>Bali, Indonesia</h4>
                    <p>60 reviews</p>
                  </div>
                  <div className='star'>
                    <i className='fa-sharp fa-solid fa-star'></i>
                    <span>4.5</span>
                  </div>
                </div>
                <div className='price-city'>
                  <span>Price</span>
                  <h4>Rp. 2.500.000 / Pax</h4>
                  <br />
                  <span>Duration</span>
                  <h4>4 Days 3 Nights</h4>
                  <br />
                  <span>Pax available</span>
                  <h4>20 pax lefts</h4>
                </div>
                <button type='button' className='btn btn-success'>
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
          <div className='row'>
            <div className='col-lg-8 px-5 mt-5'>
              <div className='conten-detail'>
                <button
                  type='button'
                  className='btn btn-success me-3'
                  id='btn1'
                  data-bs-toggle='collapse'
                  href='#collapseExample'>
                  Description
                </button>
                <button
                  type='button'
                  className='btn btn-success'
                  id='btn2'
                  data-bs-toggle='collapse'
                  href='#collapseExample2'>
                  What’s include
                </button>
                <div id='collapseExample' className='collapse show'>
                  <div className='card card-body'>
                    <p>
                      If you're planning a trip to Bali, you might want to
                      consider a visit to Nusa Penida. This beautiful island is
                      located southeast of Bali and is known for its stunning
                      beaches, crystal clear waters, and picturesque landscapes.
                      In this article, we'll take a closer look at Nusa Penida
                      and provide you with some tips for planning your trip.
                      <br />
                      <br /> The easiest way to get to Nusa Penida is to take a
                      fast boat from Sanur or Padang Bai. The journey takes
                      approximately 45 minutes to 1 hour, depending on the sea
                      conditions. You can also take a ferry from Padang Bai,
                      which is cheaper but takes longer.
                    </p>
                  </div>
                </div>
                <div id='collapseExample2' className='collapse'>
                  <div className='card card-body'>
                    <div className='featured-trip'>
                      <span>
                        <i className='icon fa-solid fa-medal'></i>Featured Trip
                      </span>
                      <p>What you can get in open trip package:</p>
                      <ul>
                        <li>Any destination you want</li>
                        <li>Invite friends</li>
                        <li>Meet another travelers</li>
                        <li>Guided by our agents</li>
                      </ul>
                    </div>
                    <div className='acomodation'>
                      <span>
                        <i className='icon fa-solid fa-car'></i>Acomodation
                      </span>
                      <p>
                        Nusa Penida has a variety of accommodations to choose
                        from, ranging from budget-friendly guesthouses to luxury
                        resorts. Some popular options include:
                      </p>
                      <ul>
                        <li>Semabu Hills Hotel Nusa Penida</li>
                        <li>Daphila Cottage</li>
                        <li>La Roja Bungalows</li>
                        <li>Nusa Veranda Sunset Villas & Restaurant</li>
                      </ul>
                    </div>
                    <div className='destination'>
                      <span>
                        <i className='icon fa-solid fa-map-location'></i>Destination
                      </span>
                      <ul>
                        <li>Visit Kelingking Beach</li>
                        <li>Explore Angel's Billabong</li>
                        <li>Snorkel at Crystal Bay</li>
                        <li>Visit Broken Beach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- end hero --> */}
    </>
  );
}

export default OpenDetailHero;
