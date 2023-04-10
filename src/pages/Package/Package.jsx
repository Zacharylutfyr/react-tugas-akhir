import React from 'react';
import PackageHero from '../../components/Hero/PackageHero';
import PrivateTrip from '../../components/PrivateTrip/PrivateTrip';
import ContentWonderful from '../../components/Content/ContentWonderful';
import ContentFluid from '../../components/Content/ContentFluid';
import GetFirstTrip from '../../components/GetFirsTtrip/GetFirstTrip';

const Package = () => {
  return (
    <>
      <PackageHero />
      <PrivateTrip />
      <ContentWonderful />
      <ContentFluid/>
      <GetFirstTrip/>
    </>
  );
};

export default Package;
