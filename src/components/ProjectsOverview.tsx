import { useState } from "react";

interface Project {
    year: number;
    completed: number;
    ongoing: number;
    totalArea: number;
    materials: { name: string; amount: string }[];
}

const projectData: Project[] = [
    {
        year: 2024,
        completed: 42,
        ongoing: 0,
        totalArea: 1652,
        materials: [
            { name: "Concrete", amount: "1200m³" },
            { name: "Steel", amount: "800kg" },
            { name: "Glass", amount: "500m²" }
        ]
    },
    {
        year: 2025,
        completed: 0,
        ongoing: 7,
        totalArea: 264,
        materials: [
            { name: "Wood", amount: "300m³" },
            { name: "Bricks", amount: "15000 pcs" },
            { name: "Insulation", amount: "100 rolls" }
        ]
    },
];

export default function ProjectsTable() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="p-6 w-full mx-auto bg-dark-color text-grayish">
            <h2 className="text-2xl font-bold text-center mb-4">სტატისტიკა</h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md text-dark-color">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200 text-gray-900">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">წელი</th>
                            <th className="border border-gray-300 px-4 py-2">შესრულებული</th>
                            <th className="border border-gray-300 px-4 py-2">მიმდინარე</th>
                            <th className="border border-gray-300 px-4 py-2">ფართობი (m²)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData
                            .sort((a, b) => b.year - a.year) // Sort by year descending
                            .map((project) => (
                                <tr
                                    key={project.year}
                                    className="cursor-pointer hover:bg-gray-100 transition text-center"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <td className="border border-gray-300 px-4 py-2">{project.year}</td>
                                    <td className="border border-gray-300 px-4 py-2">{project.completed}</td>
                                    <td className="border border-gray-300 px-4 py-2">{project.ongoing}</td>
                                    <td className="border border-gray-300 px-4 py-2">{project.totalArea}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-4 text-center text-dark-color">მასალები {selectedProject.year}-ში</h3>

                        {/* Materials Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-200 text-gray-900">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">მასალა</th>
                                        <th className="border border-gray-300 px-4 py-2">რაოდენობა</th>
                                    </tr>
                                </thead>
                                <tbody className="text-dark-color">
                                    {selectedProject.materials.map((material, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border border-gray-300 px-4 py-2">{material.name}</td>
                                            <td className="border border-gray-300 px-4 py-2">{material.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button
                            className="mt-4 w-full px-4 py-2 bg-main-color text-grayish rounded transition"
                            onClick={() => setSelectedProject(null)}
                        >
                            დახურვა
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
