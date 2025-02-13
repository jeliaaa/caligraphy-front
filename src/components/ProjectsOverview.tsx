// import { useState } from "react";

// interface Project {
//     year: number;
//     completed: number;
//     ongoing: number;
//     totalArea: number;
//     materials: { name: string; amount: string }[];
// }

// const projectData: Project[] = [
//     {
//         year: 2024,
//         completed: 42,
//         ongoing: 0,
//         totalArea: 1652,
//         materials: [
//             { name: "Concrete", amount: "1200m³" },
//             { name: "Steel", amount: "800kg" },
//             { name: "Glass", amount: "500m²" }
//         ]
//     },
//     {
//         year: 2025,
//         completed: 0,
//         ongoing: 7,
//         totalArea: 264,
//         materials: [
//             { name: "Wood", amount: "300m³" },
//             { name: "Bricks", amount: "15000 pcs" },
//             { name: "Insulation", amount: "100 rolls" }
//         ]
//     },
// ];

// export default function ProjectsTable() {
//     const [selectedYear, setSelectedYear] = useState<number>(projectData[1].year);

//     const filteredProject = projectData.find(project => project.year === selectedYear);

//     return (
//         <div className="p-6 w-full mx-auto bg-dark-color text-grayish">
//             <h2 className="text-3xl font-bold text-center mb-6">სტატისტიკა</h2>

//             {/* Year Filter */}
//             <div className="flex justify-start mb-6">
//                 <select
//                     className="w-[100px] px-4 py-2 border rounded-lg text-dark-color bg-grayish shadow-md"
//                     onChange={(e) => setSelectedYear(Number(e.target.value))}
//                     value={selectedYear}
//                 >
//                     {projectData.map(project => (
//                         <option key={project.year} value={project.year}>{project.year}</option>
//                     ))}
//                 </select>
//             </div>

//             {/* Display Project Details */}
//             {filteredProject && (
//                 <div className="p-6 rounded-lg shadow-lg text-grayish">
//                     <h3 className="text-xl font-semibold text-center mb-4">პროექტის დეტალები - {filteredProject.year}</h3>
                    
//                     <div className="grid grid-cols-2 gap-4 text-lg">
//                         <p><strong>შესრულებული:</strong> {filteredProject.completed}</p>
//                         <p><strong>მიმდინარე:</strong> {filteredProject.ongoing}</p>
//                         <p><strong>ფართობი (m²):</strong> {filteredProject.totalArea}</p>
//                     </div>
                    
//                     <h4 className="text-lg font-semibold mt-6 mb-3">მასალები</h4>
//                     <div className="overflow-x-auto">
//                         <table className="w-full border-collapse">
//                             <thead className="text-grayish border-b-2 border-gray-400">
//                                 <tr>
//                                     <th className="px-4 py-2">მასალა</th>
//                                     <th className="px-4 py-2">რაოდენობა</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-grayish">
//                                 {filteredProject.materials.map((material, index) => (
//                                     <tr key={index} className="text-center border-b border-gray-300 last:border-none">
//                                         <td className="px-4 py-2">{material.name}</td>
//                                         <td className="px-4 py-2">{material.amount}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

import { useState } from "react";
import karkasi from "../assets/photos/karkasi.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

    return (
        <div className="py-10 w-full mx-auto bg-dark-color text-grayish">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

            <div className="flex w-full justify-around gap-6 flex-wrap">
                {projectData.map((project) => (
                    <div
                        key={project.year}
                        className="relative w-60 h-60 rounded-full overflow-hidden cursor-pointer group hover:-translate-y-10 transition-all delay-150"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img
                            src={project.images[0]}
                            alt={`Project ${project.year}`}
                            className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-50 text-main-color p-4 text-center">
                            <p className="font-bold text-lg">{project.year}</p>
                            <p className="text-sm">{project.type}</p>
                        </div>
                    </div>
                ))}
            </div>

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
