import React, { useState } from "react";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
        "/images/image6.jpg",
        "/images/image7.jpg",
        "/images/image8.jpg",
    ];

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">გალერეა</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer"
                            onClick={() => openModal(image)}
                        >
                            <img
                                src="https://picsum.photos/200"
                                alt={`gallery-item-${index}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                                <span className="text-white text-lg font-semibold">ნახვა</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75  flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-lg p-4 w-[70dvh] h-[70dvh]">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 font-bold text-black text-3xl"
                        >
                            &times;
                        </button>
                        <img
                            src="https://picsum.photos/200"
                            alt="Selected"
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
