import React from 'react'
import OpenDetailHero from '../../components/Hero/OpenDetailHero'
import ContentHalf from '../../components/Content/ContentHalf'
import Form from '../../components/Form/Form'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const OpenDetail = () => {
  return (
    <>
    <Navbar/>
    <OpenDetailHero/>
    <ContentHalf/>
    <Form/>
    <Footer/>
    </>
  )
}

export default OpenDetail