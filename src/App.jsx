import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destinaion/Destination';
import Package from './pages/Package/Package';
import AboutUs from './pages/AboutUs/AboutUs';
import DestinationCheckout from './pages/Checkout/DestinationCheckout';
import CheckoutSucess from './pages/Checkout/CheckoutSucess';
import DestinationDetail from './pages/DestinationDetail/DestinationDetail';
import PrivateCheckout from './pages/Checkout/PrivateCheckout';
import PrivateDetail from './pages/PrivateDetail/PrivateDetail';
import OpenDetail from './pages/OpenDetail/OpenDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discovery' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/package' element={<Package />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/destination-checkout' element={<DestinationCheckout />} />
          <Route path='/private-checkout' element={<PrivateCheckout/>} />
          <Route path='/checkout-sucess' element={<CheckoutSucess/>} />
          <Route path='/destination-detail' element={<DestinationDetail/>} />
          <Route path='/private-detail' element={<PrivateDetail/>} />
          <Route path='/open-detail' element={<OpenDetail/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
