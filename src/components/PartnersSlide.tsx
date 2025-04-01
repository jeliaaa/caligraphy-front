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
import { useEffect, useState } from 'react';

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
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(window.innerWidth < 640);

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
                    pagination={!isPaginationEnabled ? { clickable: true } : false}
                    modules={[Pagination, Autoplay]}
                    className='w-full py-2'
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex-col p-4 rounded-lg shadow-top-lg flex justify-center items-center">
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
