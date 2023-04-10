import React from 'react';
import travelark_navbar from '../../assets/img/travelark_navbar.png'

const Navbar = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <nav class='navbar navbar-expand-lg pt-3 px-5'>
        <div class='container'>
          <img
            src={travelark_navbar}
            alt='travelark-navbar'
            class='mx-4 px-2'
          />
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0 align-content-center'>
              <li class='nav-item px-3'>
                <a class='nav-link' href='/discovery'>
                  Discovery
                </a>
              </li>
              <li class='nav-item px-3'>
                <a class='nav-link' href='/destination'>
                  Destination
                </a>
              </li>
              <li class='nav-item px-3'>
                <a class='nav-link' href='/package'>
                  Package
                </a>
              </li>
              <li class='nav-item px-3'>
                <a class='nav-link' href='/about-us'>
                  About Us
                </a>
              </li>
            </ul>
            <form class='d-flex px-4' role='search'>
              <button class='btn btn-outline-success' type='submit'>
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
