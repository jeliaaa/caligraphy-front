import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import render1 from "../assets/renders/design 1/1,,.jpg"
import render2 from "../assets/renders/design 1/2.jpg"
import render3 from "../assets/renders/design 1/3.jpg"
import render4 from "../assets/renders/design 1/4...jpg"
import render5 from "../assets/renders/design 1/5.jpg"
import render6 from "../assets/renders/design 1/6...jpg"
// import render7 from "../assets/renders/design 1/იატაკის სანათის გარეშე.jpg"
// import render8 from "../assets/renders/design 1/კარადა ჩვეილებრივი.jpg"
import render11 from "../assets/renders/design 2/0b6ac679-1b74-4636-89cc-e20883190abb.jpg"
import render12 from "../assets/renders/design 2/14f84845-fa6d-43bb-b706-166a318d05e5.jpg"
import render13 from "../assets/renders/design 2/3855198a-d84a-4746-9d77-9deac36828ae.jpg"
import render14 from "../assets/renders/design 2/4d1a32ba-88a7-41a3-bb2f-8612e48a573c.jpg"
import render15 from "../assets/renders/design 2/76125c3d-20c8-45d0-8f85-3df00f3b6410.jpg"
import render16 from "../assets/renders/design 2/766e3fb2-69ad-4038-8ea5-d252f5474a94.jpg"
// import render17 from "../assets/renders/design 2/7c846115-3c72-423a-b73d-f3a2cb38f2b3.jpg"
import render18 from "../assets/renders/design 2/8fbb7abe-3260-4dbe-930c-5bd317db12dd.jpg"
import render19 from "../assets/renders/design 2/9389830a-69ae-44fc-9ed0-09ee13ae608f.jpg"



const RendersAndPictures = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { t } = useTranslation();
    const images = [
        render4, render5, render6, render11,
        render12, render13, render14, render1, render2, render3, render15, render16, render18, render19
    ];

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
            const prevButton = document.querySelector(".button-prev_renders");
            const nextButton = document.querySelector(".button-next_renders");

            if (prevButton && nextButton) {
                prevButton.classList.remove("swiper-button-disabled");
                nextButton.classList.remove("swiper-button-disabled");
            }
        }, 500);
    }, []);

    return (
        <div className="py-16 flex flex-col items-center bg-gray-50">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 text-2xl">
                {t("Renders")}
            </div>
            <div className="w-full relative mx-auto sm:px-6 lg:px-8 ">
                <div className="absolute hidden md:flex z-40 gap-x-3 -bottom-5 left-8">
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-prev_renders flex items-center justify-center">
                        <svg className="fill-white rotate-180" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-next_renders flex items-center justify-center">
                        <svg className="fill-white" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </svg>
                    </button>
                </div>

                {/* Swiper Gallery */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={{
                        nextEl: '.button-next_renders',
                        prevEl: '.button-prev_renders'
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    spaceBetween={20}
                    className="mb-6"
                >
                    {images.map((image, index) => (
                        <SwiperSlide className="mb-10" key={index}>
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
                    <div className="relative bg-white rounded-lg p-4 h-[70dvh] overflow-hidden w-full md:w-[50dvw] aspect-square md:aspect-auto md:h-[80dvh]">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-gray-700 text-white w-[30px] h-[30px] rounded-md flex items-center justify-center text-2xl hover:bg-gray-900 transition-all"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage || ""}
                            alt="Selected"
                            className="w-full h-full object-cover rounded-lg transition-all duration-500"
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

export default RendersAndPictures;
