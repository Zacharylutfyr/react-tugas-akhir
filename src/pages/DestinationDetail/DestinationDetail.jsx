import React from 'react'
import DestinationDetailHero from '../../components/Hero/DestinationDetailHero'
import ContentHalf from '../../components/Content/ContentHalf'
import Form from '../../components/Form/Form'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const DestinationDetail = () => {
  return (
    <>
    <Navbar/>
    <DestinationDetailHero/>
    <ContentHalf/>
    <Form/>
    <Footer/>
    </>
  )
}

export default DestinationDetail