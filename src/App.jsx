import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destination from './pages/Destinaion/Destination';
import Package from './pages/Package/Package';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discovery' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/package' element={<Package />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
