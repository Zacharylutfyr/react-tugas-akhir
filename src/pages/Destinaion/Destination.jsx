import React from 'react';
import DestinationHero from '../../components/Hero/DestinationHero';
import ContentHalf from '../../components/Content/ContentHalf';
import OurPackage from '../../components/OurPackage/OurPackage';
import WonderfulDestination from '../../components/WonderfulDestination/WonderfulDestination';
import GetFirstTrip from '../../components/GetFirsTtrip/GetFirstTrip';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Destination = () => {
  return (
    <>
      <Navbar />
      <DestinationHero />
      <ContentHalf />
      <OurPackage />
      <WonderfulDestination />
      <GetFirstTrip />
      <Footer />
    </>
  );
};

export default Destination;
