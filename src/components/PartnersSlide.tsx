import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import gorgia from "../assets/logos/gorgia.png"
import { useTranslation } from 'react-i18next';

const PartnersSlide = () => {
    const { t } = useTranslation()
    const partners = [
        "შპს გორგია",
        "შპს მოდუსი",
        "შპს იდეალი",
        "შპს ნიკა",
        "გრატა სტუდიო",
        "შპს „თქვენ“",
        "ავეჯის სახლი ლუსო"
    ];

    return (
        <div className="w-full flex flex-col items-center px-10 mx-auto my-16">
            {/* <div className='absolute bg-third-color w-[100px] aspect-square -left-16 rounded-full'></div> */}
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 text-2xl">
                {t("partners")}
            </div>
            {/* <h2 className="text-3xl text-center font-bold mb-8">{t('partners')}</h2> */}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={true}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className='w-full'
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-100 flex-col p-4 rounded-lg shadow-lg flex justify-center items-center">
                            <img src={gorgia} alt={partner} className="h-16" />
                            <span>{partner}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PartnersSlide;
