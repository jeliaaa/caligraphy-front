import React from 'react'
// import MainSlider from '../components/MainSlider'
import StatisticSection from '../components/MainStats'
import PartnersSlider from '../components/PartnersSlide'
// import PriceCalculator from '../components/PriceCalc'
import mainBanner from "../assets/banners/WhatsApp Image 2025-02-19 at 14.54.54_07d65300.jpg"
// import { useTranslation } from 'react-i18next'
import Gallery from '../components/Gallery'
import TeamSlider from './Team'
import ServicesSection from '../components/ServicesSection'
import '../index.css'
import ProjectsOverview from '../components/ProjectsOverview'
import FaqAccordion from '../components/FAQ'
import RendersAndPictures from '../components/RendersAndPhotos'

const Main: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div className='relative'>
      {/* <MainSlider /> */}
      <div className='w-full h-[80dvh] relative flex items-center'>
        <img className='object-cover absolute left-0 top-0 h-full w-full' src={mainBanner} alt='Us' />
        <div className='absolute w-full h-full bg-black bg-opacity-50'></div>
        <div className='flex z-10 justify-center items-center text-white w-full sm:w-[40%] ml-10 h-fit1 rounded-md text-[40px] drop-shadow-lg shadow-grayish font-bold text-left p-5'>
          რემონტს აპირებ? <br /> დაგვიკავშირდი და მიიღე <br/> კომფორტი, რომელსაც იმსახურებ
        </div>
        {/* // "contactUsComfort": "რემონტს აპირებ? \nდაგვიკავშირდი და მიიღე \nკომფორტი, რომელსაც იმსახურებ" */}
      </div>
      {/* <div className='saa bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl absolute bottom-[-30px]'>რემონტი გინდა?...</div> */}


      <ServicesSection />
      <ProjectsOverview />
      <StatisticSection />
      <Gallery />
      <PartnersSlider />
      {/* <div className="text-center py-28 flex flex-col items-center space-y-5 h-full bg-third-color mb-3">
        <h2 className="text-xl font-bold mb-4 text-white">გსურთ გაიგოთ ჩვენი მომსახურების საფასური?</h2>
        <Link className='bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl' to={'/calculate'}>კალკულციის დაწყება</Link>
      </div> */}
      <TeamSlider slider />
      <RendersAndPictures />
      {/* <PriceCalculator page={false} /> */}
      <FaqAccordion />
    </div>
  )
}

export default Main