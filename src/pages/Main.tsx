import React from 'react'
import MainSlider from '../components/MainSlider'
import StatisticSection from '../components/MainStats'
import PartnersSlider from '../components/PartnersSlide'
import PriceCalculator from '../components/PriceCalc'

const Main: React.FC = () => {
  return (
    <>
      <MainSlider />
      <StatisticSection />
      <PartnersSlider />
      <PriceCalculator />
    </>
  )
}

export default Main