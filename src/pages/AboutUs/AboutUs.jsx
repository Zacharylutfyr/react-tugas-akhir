import React from 'react';
import AboutUsHero from '../../components/Hero/AboutUsHero';
import TravelExperienceReverse from '../../components/TravelExperience/TravelExperienceReverse';
import OurPackage from '../../components/OurPackage/OurPackage';
import Form from '../../components/Form/Form';
import ContentAboutUs from '../../components/Content/ContenAboutUs';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutUsHero />
      <TravelExperienceReverse />
      <OurPackage />
      <ContentAboutUs />
      <Form />
      <Footer />
    </>
  );
};

export default AboutUs;
