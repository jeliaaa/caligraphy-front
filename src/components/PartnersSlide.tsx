import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { axiosV2 } from '../utils/axios';
import { SafePartner } from 'types/apiTypes/types';
import clsx from 'clsx';

const PartnersSlide = () => {
    const { t } = useTranslation();
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(window.innerWidth < 640);
    const [loading, setLoading] = useState(false)
    const [partners, setPartners] = useState([])

    useEffect(() => {
            setLoading(true)
            axiosV2.get("/partner/view").then((res) => {
                setPartners(res.data)
            }).catch((err) => {
                console.log(err);  
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsPaginationEnabled(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        // bg-gray-50
        <div className="flex flex-col items-center pb-10">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 my-10 text-2xl">
                {t("partners")}
            </div>
            <div className="hidden xl:flex flex-wrap gap-x-5 justify-between w-full">
                {loading ? skeletonItems : partners.map((partner: SafePartner, index) => (
                    <div key={index} className="mt-8 flex-col p-4 rounded-xl flex items-center">
                        <img src={`${process.env.REACT_APP_URL}/${partner.logo}`} alt={partner.name} className="h-16" />
                        <span className='text-main-color mt-5'>{partner.name}</span>
                    </div>
                ))}
            </div>
            <div className="xl:hidden w-full">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 3000 }}
                    pagination={!isPaginationEnabled ? { clickable: true } : false}
                    modules={[Pagination, Autoplay]}
                    className={clsx(
                        'w-full py-2',
                        !loading && "flex"
                    )}
                >
                    {loading ? 
                    skeletonItems
                    : 
                    partners.map((partner: SafePartner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex-col p-4 rounded-lg shadow-top-lg flex justify-center items-center">
                                <img src={`${process.env.REACT_APP_URL}/${partner.logo}`} alt={partner.name} className="h-16" />
                                <span className='text-main-color mt-5'>{partner.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const skeletonItems = new Array(6).fill(null).map((_, i) => (
    <div key={i} className="mt-8 flex-col p-4 rounded-xl flex items-center animate-pulse">
      <div className="bg-gray-300 h-16 w-32 rounded" />
      <div className="bg-gray-300 h-4 w-24 mt-5 rounded" />
    </div>
  ));

export default PartnersSlide;
