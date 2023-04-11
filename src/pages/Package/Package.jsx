import React from 'react';
import PackageHero from '../../components/Hero/PackageHero';
import PrivateTrip from '../../components/PrivateTrip/PrivateTrip';
import ContentWonderful from '../../components/Content/ContentWonderful';
import ContentFluid from '../../components/Content/ContentFluid';
import GetFirstTrip from '../../components/GetFirsTtrip/GetFirstTrip';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Package = () => {
  return (
    <>
      <Navbar />
      <PackageHero />
      <PrivateTrip />
      <ContentWonderful />
      <ContentFluid />
      <GetFirstTrip />
      <Footer />
    </>
  );
};

export default Package;
