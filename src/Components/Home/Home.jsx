import React from 'react'
import Footer from '../../Footer/Footer'
import About from '../About/About'
import Container from '../Container/Container'
import Header from '../Header/Header'
import './Home.scss'
function Home() {
  return (
    <>
    <Container>
        <Header/>
        <About/>
        <Footer/>
    </Container>
    </>
  )
}

export default Home