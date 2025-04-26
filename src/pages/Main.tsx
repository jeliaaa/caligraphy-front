import React, { useEffect, useState } from 'react'
// import MainSlider from '../components/MainSlider'
import StatisticSection from '../components/MainStats'
import PartnersSlider from '../components/PartnersSlide'
// import PriceCalculator from '../components/PriceCalc'
import mainBanner from "../assets/banners/new_new.jpg"
// import { useTranslation } from 'react-i18next'
import Gallery from '../components/Gallery'
import TeamSlider from './Team'
import ServicesSection from '../components/ServicesSection'
import '../index.css'
import ProjectsOverview from '../components/ProjectsOverview'
import FaqAccordion from '../components/FAQ'
import RendersAndPictures from '../components/RendersAndPhotos'
import { useTranslation } from 'react-i18next'
import { axiosV2 } from '../utils/axios'
import Loader from '../components/Loader'

const Main: React.FC = () => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setLoading(true);
    axiosV2.get(`/content/`)
      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [])

  console.log(data);

  if (loading) return <Loader />;
  return (
    <div className='relative'>
      {/* <MainSlider /> */}
      <div className='w-full h-[83dvh] relative flex items-center'>
        <img className='object-[60%] sm:object-[100%] object-cover absolute left-0 top-0 h-full w-full' src={mainBanner} alt='Us' />
        <div className='absolute w-full h-full bg-black bg-opacity-50'></div>
        <div className='flex z-10 justify-center items-center text-white w-full sm:w-[40%] ml-1 md:ml-10 h-fit1 rounded-md text-[30px] md:text-[40px] drop-shadow-lg shadow-grayish font-bold text-left p-5'>
          {/* რემონტს აპირებ? <br /> დაგვიკავშირდი და მიიღე <br/> კომფორტი, რომელსაც იმსახურებ */}
          {/* {data?.quote.quote} <br /> */}
          {t("slogan1")}<br />{t("slogan2")}
        </div>
        {/* // "contactUsComfort": "რემონტს აპირებ? \nდაგვიკავშირდი და მიიღე \nკომფორტი, რომელსაც იმსახურებ" */}
      </div>
      {/* <div className='saa bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl absolute bottom-[-30px]'>რემონტი გინდა?...</div> */}


      <ServicesSection />
      <RendersAndPictures />
      <Gallery />
      <ProjectsOverview />
      <StatisticSection />
      <TeamSlider slider />
      <PartnersSlider />
      {/* <div className="text-center py-28 flex flex-col items-center space-y-5 h-full bg-third-color mb-3">
        <h2 className="text-xl font-bold mb-4 text-white">გსურთ გაიგოთ ჩვენი მომსახურების საფასური?</h2>
        <Link className='bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 hover:border-grayish text-2xl' to={'/calculate'}>კალკულციის დაწყება</Link>
      </div> */}
      {/* <PriceCalculator page={false} /> */}
      <FaqAccordion />
    </div>
  )
}

export default Main