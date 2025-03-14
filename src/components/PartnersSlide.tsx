import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import gorgia from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.31_48f5575f.jpg";
import axalinateba from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.31_c9c292c2.jpg";
import nova from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_1adbdab9.jpg";
import ideal from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_cd6db0c0.jpg";
import modusi from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.32_d8a6cafc.jpg";
import jaoken from "../assets/partners/WhatsApp Image 2025-02-28 at 17.11.33_fb791d1d.jpg";
import luso from "../assets/partners/WhatsApp Image 2025-02-28 at 18.39.27_f92482ae.jpg";
import grata from "../assets/partners/WhatsApp Image 2025-02-28 at 18.39.36_97d3ff3b.jpg";

import { useTranslation } from 'react-i18next';

const PartnersSlide = () => {
    const { t } = useTranslation();
    const partners = [
        { name: "partner1", image: gorgia },
        { name: "partner2", image: modusi },
        { name: "partner3", image: nova },
        { name: "partner4", image: ideal },
        { name: "partner5", image: jaoken },
        { name: "partner6", image: grata },
        { name: "partner7", image: axalinateba },
        { name: "partner8", image: luso }
    ];

    return (
        <div className="w-full flex flex-col items-center px-10 mx-auto my-16">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 text-2xl">
                {t("partners")}
            </div>
            <div className="hidden xl:flex flex-wrap gap-x-5 justify-between w-full">
                {partners.map((partner, index) => (
                    <div key={index} className="mt-8 flex-col p-4 rounded-xl flex items-center">
                        <img src={partner.image} alt={partner.name} className="h-16" />
                        <span className='text-main-color mt-5'>{t(partner.name)}</span>
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
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className='w-full pb-10'
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex-col p-4 rounded-lg shadow-lg flex justify-center items-center">
                                <img src={partner.image} alt={partner.name} className="h-16" />
                                <span className='text-main-color mt-5'>{t(partner.name)}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnersSlide;
