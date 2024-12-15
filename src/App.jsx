import React from 'react'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Cards from './Components/Cards/Cards'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Slider from './Components/Slider/Slider'

const App = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Cards/>
      <Banner/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default App