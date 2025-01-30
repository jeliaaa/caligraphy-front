import React from 'react'
import MainSlider from '../components/MainSlider'
import StatisticSection from '../components/MainStats'
import PartnersSlider from '../components/PartnersSlide'

const Main: React.FC = () => {
  return (
    <>
      <MainSlider />
      <StatisticSection />
      <PartnersSlider />
    </>
  )
}

export default Main