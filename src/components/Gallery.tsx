import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import image3 from "../assets/photos/ფოტომასალაა/DSC_0025.jpg";
import image4 from "../assets/photos/ფოტომასალაა/DSC_0054.jpg";
import image5 from "../assets/photos/ფოტომასალაა/DSC_0078.jpg";
import image6 from "../assets/photos/ფოტომასალაა/DSC_0084.jpg";
import image7 from "../assets/photos/ფოტომასალაა/DSC_0105.jpg";
import image8 from "../assets/photos/ფოტომასალაა/DSC_0120.jpg";
import image9 from "../assets/photos/ფოტომასალაა/DSC_0124.jpg";
import image10 from "../assets/photos/ფოტომასალაა/DSC_0135.jpg";
import image11 from "../assets/photos/ფოტომასალაა/DSC_0138.jpg";
import image12 from "../assets/photos/ფოტომასალაა/DSC_0143.jpg";
import image13 from "../assets/photos/ფოტომასალაა/DSC_0149.jpg";
import image14 from "../assets/photos/ფოტომასალაა/DSC_0151.jpg";
import image15 from "../assets/photos/ფოტომასალაა/DSC_0156.jpg";
import image16 from "../assets/photos/ფოტომასალაა/DSC_0163.jpg";
import image17 from "../assets/renovations/bina5/DSC_0151.jpg"
import image18 from "../assets/renovations/bina5/DSC_0156.jpg"
import image19 from "../assets/renovations/bina4/IMG_8722.jpg"
import image20 from "../assets/renovations/bina4/IMG_8721.jpg"
import image21 from "../assets/renovations/bina4/IMG_8719.jpg"
import image22 from "../assets/renovations/bina4/IMG_8718.jpg"
import image23 from "../assets/renovations/bina4/IMG_8716.jpg"
// import image24 from "../assets/renovations/bina3/IMG_8709.jpg"
import image25 from "../assets/renovations/bina3/IMG_8753.jpg"
import image26 from "../assets/renovations/bina1/IMG_8649.jpg"
// import image27 from "../assets/renovations/bina1/IMG_8651.jpg"
import image28 from "../assets/renovations/bina1/IMG_8650.jpg"

import { useTranslation } from "react-i18next";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { t } = useTranslation();
    const images = [
        image3, image4, image5, image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16, image17, image18,
        image19, image20, image21, image22, image23, image25, image26,
        image28
    ];
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsPaginationEnabled(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const openModal = (image: string, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSelectedImage(images[(currentIndex + 1) % images.length]);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    };
    useEffect(() => {
        setTimeout(() => {
            const prevButton = document.querySelector(".button-prev_gallery");
            const nextButton = document.querySelector(".button-next_gallery");

            if (prevButton && nextButton) {
                prevButton.classList.remove("swiper-button-disabled");
                nextButton.classList.remove("swiper-button-disabled");
            }
        }, 500);
    }, []);
    return (
        // bg-gray-50
        <div className="flex flex-col items-center pb-0 sm:pb-10">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 sm:my-10 text-2xl">
                {t("gallery")}
            </div>
            <div className="w-full relative mx-auto sm:px-6 lg:px-8 ">


                {/* <div className="bg-main-color w-fit p-2 rounded-full mb-5 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-grayish">
                    </h2>
                </div> */}
                <div className="absolute hidden md:flex z-40 gap-x-3 -bottom-5 left-8">
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-prev_gallery flex items-center justify-center">
                        <svg className="fill-white rotate-180" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-next_gallery flex items-center justify-center">
                        <svg className="fill-white" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                </div>


                {/* Swiper Gallery */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={{
                        nextEl: '.button-next_gallery',
                        prevEl: '.button-prev_gallery'
                    }}
                    pagination={!isPaginationEnabled ? { clickable: true } : false}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mb-6"
                >

                    {images.map((image, index) => (
                        <SwiperSlide className="mb-1 sm:mb-10" key={index}>
                            <div
                                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                onClick={() => openModal(image, index)}
                            >
                                <img
                                    src={image}
                                    alt={`gallery-item-${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                                    <span className="text-white text-lg font-semibold">{t("view")}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4 flex items-center w-full md:w-[50dvw] aspect-square md:aspect-auto md:h-[80dvh] overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-gray-700 text-white w-[30px] h-[30px] rounded-md flex items-center justify-center text-2xl hover:bg-gray-900 transition-all"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage || ""}
                            alt="Selected"
                            className="w-full object-cover rounded-lg transition-all duration-500"
                        />
                        {/* Custom Arrows */}
                        <button
                            className="absolute top-1/2 left-6 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition-all z-10"
                            onClick={prevImage}
                        >
                            <svg className="w-[30px] rotate-180 h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </button>
                        <button
                            className="absolute top-1/2 right-6 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition-all z-10"
                            onClick={nextImage}
                        >
                            <svg className="w-[30px] h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
