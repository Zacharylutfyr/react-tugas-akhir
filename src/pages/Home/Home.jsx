import React from 'react';
import DiscoveryHero from '../../components/Hero/DiscoveryHero';
import Content from '../../components/Content/Content';
import TravelExperience from '../../components/TravelExperience/TravelExperience';
import OurPackage from '../../components/OurPackage/OurPackage';
import GetFirstTrip from '../../components/GetFirsTtrip/GetFirstTrip';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <DiscoveryHero />
      <Content />
      <TravelExperience />
      <OurPackage />
      <GetFirstTrip />
      <Footer />
    </>
  );
}

export default Home;
