import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import gorgia from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.31_48f5575f.jpg"
import axalinateba from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.31_c9c292c2.jpg"
import nova from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_1adbdab9.jpg"
import ideal from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_cd6db0c0.jpg"
import modusi from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_d8a6cafc.jpg"
import jaoken from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.33_fb791d1d.jpg"
import luso from "../assets/partners/WhatsApp Image 2025-02-28 at 18.39.27_f92482ae.jpg"
import grata from "../assets/partners/WhatsApp Image 2025-02-28 at 18.39.36_97d3ff3b.jpg"

import { useTranslation } from 'react-i18next';

const PartnersSlide = () => {
    const { t } = useTranslation()
    const partners = [
        { name: "შპს გორგია", image: gorgia },
        { name: "შპს მოდუსი", image: modusi },
        { name: "შპს ნოვა", image: nova },
        { name: "შპს იდეალი", image: ideal },
        { name: "შპს ჯაოკენი", image: jaoken },
        { name: "გრატა სტუდიო", image: grata },
        { name: "ახალი ნათება", image: axalinateba },
        { name: "ავეჯის სახლი ლუსო", image: luso }
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
                            <img src={partner.image} alt={partner.name} className="h-16" />
                            <span>{partner.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PartnersSlide;
