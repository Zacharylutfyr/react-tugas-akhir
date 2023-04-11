import React from 'react'
import ContentHalf from '../../components/Content/ContentHalf'
import Form from '../../components/Form/Form'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PrivateDetailHero from '../../components/Hero/PrivateDetailHero'

const PrivateDetail = () => {
  return (
    <>
    <Navbar/>
    <PrivateDetailHero/>
    <ContentHalf/>
    <Form/>
    <Footer/>
    </>
  )
}

export default PrivateDetail