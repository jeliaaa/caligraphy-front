import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
// import bina1f1 from "../assets/renovations/bina1/IMG_8635.jpg"
// import bina1f2 from "../assets/renovations/bina1/IMG_8639.jpg"
// import bina1f3 from "../assets/renovations/bina1/IMG_8643.jpg"
// import bina1f4 from "../assets/renovations/bina1/IMG_8644.jpg"
// import bina1f5 from "../assets/renovations/bina1/IMG_8645.jpg"
// import bina1f6 from "../assets/renovations/bina1/IMG_8646.jpg"
// import bina1f7 from "../assets/renovations/bina1/IMG_8647.jpg"
// import bina1f8 from "../assets/renovations/bina1/IMG_8649.jpg"
// import bina1f9 from "../assets/renovations/bina1/IMG_8650.jpg"
// import bina1f10 from "../assets/renovations/bina1/IMG_8651.jpg"
// import bina2f1 from "../assets/renovations/bina2/IMG_8737.jpg"
// import bina2f2 from "../assets/renovations/bina2/IMG_8738.jpg"
// import bina2f3 from "../assets/renovations/bina2/IMG_8740.jpg"
// import bina2f4 from "../assets/renovations/bina2/IMG_8742.jpg"
// import bina2f5 from "../assets/renovations/bina2/IMG_8744.jpg"
// import bina2f6 from "../assets/renovations/bina2/IMG_8747.jpg"
// import bina3f1 from "../assets/renovations/bina3/IMG_8750.jpg"
// import bina3f2 from "../assets/renovations/bina3/IMG_8752.jpg"
// import bina3f3 from "../assets/renovations/bina3/IMG_8753.jpg"
// import bina3f4 from "../assets/renovations/bina3/IMG_8755.jpg"
// import bina3f5 from "../assets/renovations/bina3/IMG_8756.jpg"
// import bina3f6 from "../assets/renovations/bina3/IMG_8759.jpg"
// import bina4f1 from "../assets/renovations/bina4/IMG_8715.jpg"
// import bina4f2 from "../assets/renovations/bina4/IMG_8716.jpg"
// import bina4f3 from "../assets/renovations/bina4/IMG_8717.jpg"
// import bina4f4 from "../assets/renovations/bina4/IMG_8718.jpg"
// import bina4f5 from "../assets/renovations/bina4/IMG_8719.jpg"
// import bina4f6 from "../assets/renovations/bina4/IMG_8721.jpg"
// import bina4f7 from "../assets/renovations/bina4/IMG_8722.jpg"
// import bina4f8 from "../assets/renovations/bina4/IMG_8724.jpg"
// import bina4f9 from "../assets/renovations/bina4/IMG_8726.jpg"
// import bina4f10 from "../assets/renovations/bina4/IMG_8727.jpg"
// import bina5f1 from "../assets/renovations/bina5/DSC_0105.jpg"
// import bina5f2 from "../assets/renovations/bina5/DSC_0135.jpg"
// import bina5f3 from "../assets/renovations/bina5/DSC_0138.jpg"
// import bina5f4 from "../assets/renovations/bina5/DSC_0143.jpg"
// import bina5f5 from "../assets/renovations/bina5/DSC_0149.jpg"
// import bina5f6 from "../assets/renovations/bina5/DSC_0151.jpg"
// import bina5f7 from "../assets/renovations/bina5/DSC_0156.jpg"
// import bina5f8 from "../assets/renovations/bina5/DSC_0163.jpg"
// import bina5f9 from "../assets/renovations/bina5/DSC_0170.jpg"
// import bina6f1 from "../assets/renovations/bina6/IMG_8696.jpg"
// import bina6f2 from "../assets/renovations/bina6/IMG_8697.jpg"
// import bina6f3 from "../assets/renovations/bina6/IMG_8698.jpg"
// import bina6f4 from "../assets/renovations/bina6/IMG_8699.jpg"
// import bina6f5 from "../assets/renovations/bina6/IMG_8700.jpg"
// import bina6f6 from "../assets/renovations/bina6/IMG_8701.jpg"
// import bina6f7 from "../assets/renovations/bina6/IMG_8703.jpg"
// import bina6f8 from "../assets/renovations/bina6/IMG_8704.jpg"
// import bina6f9 from "../assets/renovations/bina6/IMG_8706.jpg"
import { CompletedProject } from "types/apiTypes/types";



// interface Project {
//     id: number;
//     m2: number;
//     images: string[];
// }

// const projectData: Project[] = [
//     // {
//     //     area: 30,
//     //     type: "ბინის რემონტი",
//     //     images: [bina1f7, bina1f1, bina1f2, bina1f3, bina1f4, bina1f5, bina1f6, bina1f8, bina1f9, bina1f10],
//     //     materials: [
//     //         { name: "Concrete", amount: "1200m³" },
//     //         { name: "Steel", amount: "800kg" },
//     //         { name: "Glass", amount: "500m²" }
//     //     ]
//     // },
//     // {
//     //     area: 57.2,
//     //     type: "ბინის რემონტი",
//     //     images: [bina2f6, bina2f1, bina2f2, bina2f3, bina2f4, bina2f5],
//     //     materials: [
//     //         { name: "Wood", amount: "300m³" },
//     //         { name: "Bricks", amount: "15000 pcs" },
//     //         { name: "Insulation", amount: "100 rolls" }
//     //     ]
//     // },
//     // {
//     //     area: 29.7,
//     //     type: "ბინის რემონტი",
//     //     images: [bina4f4, bina4f1, bina4f2, bina4f3, bina4f5, bina4f6, bina4f7, bina4f8, bina4f9, bina4f10],
//     //     materials: [
//     //         { name: "Wood", amount: "300m³" },
//     //         { name: "Bricks", amount: "15000 pcs" },
//     //         { name: "Insulation", amount: "100 rolls" }
//     //     ]
//     // },
//     // {
//     //     area: 31,
//     //     type: "ბინის რემონტი",
//     //     images: [bina5f4, bina5f2, bina5f3, bina5f1, bina5f5, bina5f6, bina5f7, bina5f8, bina5f9],
//     //     materials: [
//     //         { name: "Wood", amount: "300m³" },
//     //         { name: "Bricks", amount: "15000 pcs" },
//     //         { name: "Insulation", amount: "100 rolls" }
//     //     ]
//     // },
//     // {
//     //     area: 30,
//     //     type: "ბინის რემონტი",
//     //     images: [bina6f3, bina6f4, bina6f2, bina6f1, bina6f5, bina6f6, bina6f7, bina6f8, bina6f9],
//     //     materials: [
//     //         { name: "Wood", amount: "300m³" },
//     //         { name: "Bricks", amount: "15000 pcs" },
//     //         { name: "Insulation", amount: "100 rolls" }
//     //     ]
//     // },
//     // {
//     //     area: 101,
//     //     type: "ბინის რემონტი",
//     //     images: [bina3f3, bina3f1, bina3f2, bina3f4, bina3f5, bina3f6],
//     //     materials: [
//     //         { name: "Wood", amount: "300m³" },
//     //         { name: "Bricks", amount: "15000 pcs" },
//     //         { name: "Insulation", amount: "100 rolls" }
//     //     ]
//     // }

// ];

export default function ProjectsOverview({ projects }: { projects: CompletedProject[]}) {
    const [selectedProject, setSelectedProject] = useState<CompletedProject | null>(null);
    const { t } = useTranslation();
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsPaginationEnabled(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // const projectData: Project[] = data.data?.completed_projects || [];
    return (
        // bg-gray-50
        <div className='flex flex-col items-center'>
            <div className="bg-main-color rounded-full text-center z-10 text-grayish w-[300px] sm:w-auto border-4 border-main-color py-5 px-10 mb-10 text-2xl">
                {t('projects')}
            </div>
            <div className="py-10 sm:px-5 w-full mx-auto bg-secondary-color text-grayish">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    pagination={!isPaginationEnabled ? { clickable: true } : false}
                    modules={[Pagination, Navigation]}
                    navigation
                    className="!w-full"
                >
                    {projects?.map((project, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div
                                className="relative flex items-center justify-center w-full h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Background Image */}
                                <img
                                    src={process.env.REACT_APP_URL + project?.images[0].url}
                                    alt={`Project ${project.m2}`}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />

                                {/* Always Visible Title */}
                                <p className="absolute inset-x-0 block top-4 text-center text-lg font-bold text-main-color group-hover:hidden z-10">
                                    {project.m2} m<sup>2</sup>
                                </p>

                                {/* Dark Overlay & Information (Visible on Hover) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-main-color p-6 text-center rounded-xl">
                                    <p className="font-bold text-xl">{project.m2} m<sup>2</sup></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-main-color">
                        <div className="bg-white sm:rounded-lg shadow-lg w-full sm:w-[60dvw] h-auto relative">
                            <div className="absolute z-50 w-full p-4 flex justify-between items-start">
                                <h3 className="text-2xl font-bold">{selectedProject.m2} m<sup>2</sup></h3>
                                <button className="text-4xl font-bold flex items-center rounded-full justify-center bg-white w-10 h-10" onClick={() => setSelectedProject(null)}>
                                    <svg width={24} height={24} className='rotate-45 fill-main-color ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                                    </svg>
                                </button>
                            </div>
                            <Swiper navigation modules={[Navigation]}>
                                {selectedProject.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={process.env.REACT_APP_URL + image.url} alt={`${index + 1}`} className="w-full object-cover h-[350px] md:h-[70dvh] rounded-lg" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* <h4 className="text-lg font-semibold mb-2">Materials Used</h4>
                            <ul className="list-disc pl-5">
                                {selectedProject.materials.map((material, index) => (
                                    <li key={index}>{material.name}: {material.amount}</li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
