import React from "react"
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      {/* <Gallery/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
