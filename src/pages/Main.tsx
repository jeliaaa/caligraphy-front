import React from 'react'
// import MainSlider from '../components/MainSlider'
import StatisticSection from '../components/MainStats'
import PartnersSlider from '../components/PartnersSlide'
// import PriceCalculator from '../components/PriceCalc'
import mainBanner from "../assets/banners/main_banner.jpg"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import TeamSlider from './Team'
import ServicesSection from '../components/ServicesSection'
import '../index.css'
import ProjectsOverview from '../components/ProjectsOverview'

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <MainSlider /> */}
      <div className='w-full h-[80dvh] relative flex justify-center'>
        <img className='object-cover absolute left-0 top-0 h-full w-full' src={mainBanner} alt='Us' />
        <Link to={'/calculate'} className='saa bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl absolute bottom-[-30px]'>{t('calculate')}</Link>
      </div>
      <ServicesSection />
      <ProjectsOverview />
      <StatisticSection />
      <PartnersSlider />
      <Gallery />
      {/* <div className="text-center py-28 flex flex-col items-center space-y-5 h-full bg-third-color mb-3">
        <h2 className="text-xl font-bold mb-4 text-white">გსურთ გაიგოთ ჩვენი მომსახურების საფასური?</h2>
        <Link className='bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl' to={'/calculate'}>კალკულციის დაწყება</Link>
      </div> */}
      <TeamSlider slider />
      {/* <PriceCalculator page={false} /> */}
    </>
  )
}

export default Main