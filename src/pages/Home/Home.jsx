import React from 'react';
import DiscoveryHero from '../../components/Hero/DiscoveryHero';
import Content from '../../components/Content/Content';
import TravelExperience from '../../components/TravelExperience/TravelExperience';
import OurPackage from '../../components/OurPackage/OurPackage';
import GetFirstTrip from '../../components/GetFirsTtrip/GetFirstTrip';



function Home() {
  return (
    <>
      <DiscoveryHero />
      <Content />
      <TravelExperience />
      <OurPackage />
      <GetFirstTrip />
    </>
  );
}

export default Home;
