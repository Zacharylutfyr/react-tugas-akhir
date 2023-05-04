import React from 'react';
import travelark_navbar from '../../assets/img/travelark_navbar.png'

const Navbar = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <nav className='navbar navbar-expand-lg pt-3 px-5'>
        <div className='container'>
          <img
            src={travelark_navbar}
            alt='travelark-navbar'
            className='mx-4 px-2'
          />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 align-content-center'>
              <li className='nav-item px-3'>
                <a className='nav-link' href='/discovery'>
                  Discovery
                </a>
              </li>
              <li className='nav-item px-3'>
                <a className='nav-link' href='/destination'>
                  Destination
                </a>
              </li>
              <li className='nav-item px-3'>
                <a className='nav-link' href='/package'>
                  Package
                </a>
              </li>
              <li className='nav-item px-3'>
                <a className='nav-link' href='/about-us'>
                  About Us
                </a>
              </li>
            </ul>
            <form className='d-flex px-4' role='search'>
              <button className='btn btn-outline-success' type='submit'>
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- end navbar --> */}
    </>
  );
};

export default Navbar;
