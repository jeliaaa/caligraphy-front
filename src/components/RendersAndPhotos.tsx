import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const RendersAndPictures = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { t } = useTranslation();
    const images = [
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150",
        "https://picsum.photos/150"
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
            const prevButton = document.querySelector(".button-prev");
            const nextButton = document.querySelector(".button-next");

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
                <div className="absolute hidden md:flex z-50 gap-x-3 -bottom-5 left-8">
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-prev flex items-center justify-center"><BsArrowLeft /></button>
                    <button className="w-[60px] aspect-square rounded-full bg-main-color text-grayish button-next flex items-center justify-center"><BsArrowRight /></button>
                </div>

                {/* Swiper Gallery */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev'
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
                                    <span className="text-white text-lg font-semibold">ნახვა</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4 w-[70dvh] h-[70dvh] overflow-hidden">
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
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition-all z-10"
                            onClick={prevImage}
                        >
                            <FaChevronLeft className="text-3xl" />
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition-all z-10"
                            onClick={nextImage}
                        >
                            <FaChevronRight className="text-3xl" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RendersAndPictures;
