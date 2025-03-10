import { useState } from "react";
import karkasi from "../assets/photos/karkasi.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

interface Project {
    year: number;
    type: string;
    description: string;
    images: string[];
    materials: { name: string; amount: string }[];
}

const projectData: Project[] = [
    {
        year: 2024,
        type: "Residential Remodeling",
        description: "A complete transformation of an old residential building with modern architecture.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Concrete", amount: "1200m³" },
            { name: "Steel", amount: "800kg" },
            { name: "Glass", amount: "500m²" }
        ]
    },
    {
        year: 2025,
        type: "Commercial Renovation",
        description: "Upgrading office spaces with energy-efficient solutions and modern interiors.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },
    {
        year: 2025,
        type: "Commercial Renovation",
        description: "Upgrading office spaces with energy-efficient solutions and modern interiors.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },
    {
        year: 2025,
        type: "Commercial Renovation",
        description: "Upgrading office spaces with energy-efficient solutions and modern interiors.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },
    {
        year: 2025,
        type: "Commercial Renovation",
        description: "Upgrading office spaces with energy-efficient solutions and modern interiors.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },
    {
        year: 2025,
        type: "Commercial Renovation",
        description: "Upgrading office spaces with energy-efficient solutions and modern interiors.",
        images: [karkasi, karkasi, karkasi],
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },


];

export default function ProjectsGallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { t } = useTranslation();
    return (
        <div className="p-0 md:py-10 md:px-5 w-full mx-auto bg-secondary-color text-grayish">
            <h2 className="text-3xl font-bold text-center mb-6 w-full">{t('projects')}</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation
                className="w-full"
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <div
                            className="relative flex items-center justify-center w-64 h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Background Image */}
                            <img
                                src={project.images[0]}
                                alt={`Project ${project.year}`}
                                className="w-full h-full object-cover transition-all duration-300"
                            />

                            {/* Always Visible Title */}
                            <p className="absolute inset-x-0 block top-4 text-center text-lg font-bold text-main-color group-hover:hidden z-10">
                                {project.year}
                            </p>

                            {/* Dark Overlay & Information (Visible on Hover) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-main-color p-6 text-center rounded-xl">
                                <p className="font-bold text-xl">{project.year}</p>
                                <p className="text-sm mt-2">{project.type}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-main-color">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                        <button className="absolute top-2 right-2 text-xl" onClick={() => setSelectedProject(null)}>&times;</button>
                        <h3 className="text-2xl font-bold mb-3">{selectedProject.year} - {selectedProject.type}</h3>
                        <Swiper navigation modules={[Navigation]} className="mb-3">
                            {selectedProject.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`${selectedProject.type} ${index + 1}`} className="w-full rounded-lg" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <p className="mb-4">{selectedProject.description}</p>
                        <h4 className="text-lg font-semibold mb-2">Materials Used</h4>
                        <ul className="list-disc pl-5">
                            {selectedProject.materials.map((material, index) => (
                                <li key={index}>{material.name}: {material.amount}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
