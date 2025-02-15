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
        <div className="max-w-screen-xl mx-auto my-16 px-2">
            <h2 className="text-3xl text-center font-bold mb-8">{t('partners')}</h2>
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
