import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { animateScroll, Element, scroller } from "react-scroll"; // Import Element and scroller from react-scroll
import karkasi from "../assets/photos/karkasi.jpeg";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ServcicesSingle = () => {
    const { id } = useParams();

    useEffect(() => {
        if (id && id !== '0') {
            // Scroll to the section if the id exists in the URL
            scroller.scrollTo(id, {
                smooth: true,
                offset: -50, // Optional: adjust offset for better alignment
                duration: 500, // Optional: smooth scroll duration
            });
        } else{
            animateScroll.scrollToTop();
        }
        
    }, [id]);
    const { t } = useTranslation()

    return (
        <div className="w-full bg-grayish">
            {/* First Section */}
            <Element name="0">
                <div className="h-[100px] flex mt-5 items-center text-main-color justify-center">
                    <h1 className="uppercase m-0 mb-4 text-3xl text-center">{t("Services")}</h1>
                </div>
                <div className="flex gap-y-10 md:flex-row flex-col-reverse items-center justify-between">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        navigation
                        className="w-full md:w-1/2 h-full"
                    >
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center">
                            <img
                                src={"https://th.bing.com/th/id/OIP.L6Gj2zo8hGGDZmRLQYmvKwHaEo?w=1000&h=625&rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center">
                            <img
                                src={"https://th.bing.com/th/id/OIP.QUFRcnVm_2eu4JD7oqDcDAHaEo?rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full gap-2 md:w-1/2 flex flex-col justify-start px-10 py-5">
                        <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">
                            {t("service_0")}
                        </div>
                        <h2 className="text-main-color">{t("service_0_option_0")}</h2>
                        <ol className="list-decimal pl-5">
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_0")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_1")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_2")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_3")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_4")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_0_option_5")}</li>
                        </ol>
                        <h2 className="text-main-color">{t("service_0_option_1")}</h2>
                        <ol className="list-decimal pl-5">
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_0")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_1")}</li>
                            <li className="list-inside text-main-color">
                                {t("service_0_option_1_option_2")}
                                <ol className="pl-5 list-disc">
                                    <li className="list-inside text-main-color">{t("service_0_option_1_option_2_option_0")}</li>
                                    <li className="list-inside text-main-color">{t("service_0_option_1_option_2_option_1")}</li>
                                    <li className="list-inside text-main-color">{t("service_0_option_1_option_2_option_2")}</li>
                                </ol>
                            </li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_3")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_4")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_5")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_6")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_7")}</li>
                            <li className="list-inside text-main-color">
                                {t("service_0_option_1_option_8")}
                            </li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_9")}</li>
                            <li className="list-inside text-main-color">{t("service_0_option_1_option_10")}</li>
                        </ol>
                    </div>
                </div>
            </Element>

            {/* Second Section */}
            <Element name="1">
                <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                        <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("service_1")}</div>
                        <h2 className="text-xl text-main-color mb-6">
                            {t("service_1_h2")}
                        </h2>
                        <ol className="list-decimal gap-5 flex flex-col pl-5">
                            <li className="list-inside text-main-color">
                                {t("service_1_option_0")}
                                <ol className="pl-5 list-disc">
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_0")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_1")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_2")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_3")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_4")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_0_option_5")}</li>
                                </ol>
                            </li>
                            <li className="list-inside text-main-color">
                                {t("service_1_option_1")}
                                <ol className="pl-5 list-disc">
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_0")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_1")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_2")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_3")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_4")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_5")}</li>
                                    <li className="list-inside text-main-color">{t("service_1_option_1_option_6")}</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        navigation
                        className="w-full md:w-1/2 h-full"
                    >
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center">
                            <img
                                src={"https://th.bing.com/th/id/OIP.L6Gj2zo8hGGDZmRLQYmvKwHaEo?w=1000&h=625&rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center ">
                            <img
                                src={"https://th.bing.com/th/id/OIP.QUFRcnVm_2eu4JD7oqDcDAHaEo?rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Element>

            {/* Pricing Section */}
            <Element name="2">
                <div className="flex gap-y-10 md:flex-row flex-col-reverse items-center justify-between">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        navigation
                        className="w-full md:w-1/2 h-full"
                    >
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center">
                            <img
                                src={"https://th.bing.com/th/id/OIP.L6Gj2zo8hGGDZmRLQYmvKwHaEo?w=1000&h=625&rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex !w-full !h-full items-center justify-center">
                            <img
                                src={"https://th.bing.com/th/id/OIP.QUFRcnVm_2eu4JD7oqDcDAHaEo?rs=1&pid=ImgDetMain"}
                                alt="Before remodeling"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10 mt-5 md:mt-0">
                        <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("service_3")}</div>
                        <p className="text-xl text-main-color mb-6">
                            {t("service_3_p")}
                        </p>
                    </div>
                </div>
            </Element>
            <div className="w-full h-[100px]" />
        </div>
    );
};

export default ServcicesSingle;
