import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animateScroll, Element, scroller } from "react-scroll"; // Import Element and scroller from react-scroll
import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import services1 from "../assets/renders/services1.jpg"
import services2 from "../assets/renders/services2.jpg"
import { axiosV2 } from "../utils/axios";
import { SafeService } from "types/apiTypes/types";
import clsx from "clsx";

const ServcicesSingle = () => {
    const { id } = useParams();
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosV2.get("/service/view").then((res) => {
            setServices(res.data)
        }).catch((err) => {
            console.log(err);  
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        if (id && id !== '0') {
            // Scroll to the section if the id exists in the URL
            scroller.scrollTo(id, {
                smooth: true,
                offset: -50, // Optional: adjust offset for better alignment
                duration: 500, // Optional: smooth scroll duration
            });
        } else {
            animateScroll.scrollToTop();
        }

    }, [id]);
    const { t } = useTranslation()

    return (
        <div className="w-full bg-grayish">
            {/* First Section */}
            <div className="h-[100px] flex mt-5 items-center text-main-color justify-center">
                        <h1 className="uppercase m-0 mb-4 text-3xl text-center">{t("services")}</h1>
            </div>
            <div className="flex flex-col gap-10">
                {loading ? skeletonServices : services.map((service: SafeService, i: number) => (
                    <Element name={service?.id.toString()}>
                        <div className={clsx(
                            "flex gap-y-10 justify-between",
                            i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                        )}>
                            {service.image ?
                                <img src={`${process.env.REACT_APP_URL}/${service?.image}`} className="w-2/4 hidden md:block h-full" alt="..." />
                                : <div className="w-2/4 aspect-video bg-main-color hidden md:flex justify-center items-center text-grayish text-2xl ">{t('photosWillAppearSoon')}</div>
                            }
                            <div className="w-full gap-2 md:w-1/2 flex flex-col justify-start px-10 py-5">
                                <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 mb-10 md:px-20 md:text-2xl text-center">
                                    {service.name}
                                </div>
                                {service.image ?
                                    <img src={`${process.env.REACT_APP_URL}/${service?.image}`} className="w-full mb-10 md:hidden h-full" alt="..." />
                                    : <div className="w-full mb-10 aspect-video flex bg-main-color md:hidden h-full justify-center items-center text-grayish text-2xl ">{t('photosWillAppearSoon')}</div>
                                }
                                <h2 className="text-main-color text-2xl">{t("service_0_option_0")}</h2>
                                <div dangerouslySetInnerHTML={{ __html: service?.description }}></div>
                            </div>
                        </div>
                    </Element>
                ))}
            </div>
            <div className="w-full h-[100px]" />
        </div>
    );
};

const skeletonServices = new Array(3).fill(null).map((_, i) => (
    <div key={i} className={clsx(
        "flex gap-y-10 justify-between animate-pulse",
        i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
    )}>
        <div className="w-2/4 aspect-video bg-gray-300 hidden md:block rounded-lg" />
        <div className="w-full md:w-1/2 flex flex-col justify-start px-10 py-5 gap-5">
            <div className="h-12 bg-gray-300 rounded-full w-2/3" />
            <div className="w-full aspect-video bg-gray-300 md:hidden rounded-lg" />
            <div className="h-6 bg-gray-300 w-1/3 rounded" />
            <div className="h-24 bg-gray-300 w-full rounded" />
        </div>
    </div>
));

export default ServcicesSingle;
