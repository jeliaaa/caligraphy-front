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
    const [selectedYear, setSelectedYear] = useState<number>(projectData[1].year);

    const filteredProject = projectData.find(project => project.year === selectedYear);

    return (
        <div className="p-6 w-full mx-auto bg-dark-color text-grayish">
            <h2 className="text-3xl font-bold text-center mb-6">სტატისტიკა</h2>

            {/* Year Filter */}
            <div className="flex justify-start mb-6">
                <select
                    className="w-[100px] px-4 py-2 border rounded-lg text-dark-color bg-grayish shadow-md"
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    value={selectedYear}
                >
                    {projectData.map(project => (
                        <option key={project.year} value={project.year}>{project.year}</option>
                    ))}
                </select>
            </div>

            {/* Display Project Details */}
            {filteredProject && (
                <div className="p-6 rounded-lg shadow-lg text-grayish">
                    <h3 className="text-xl font-semibold text-center mb-4">პროექტის დეტალები - {filteredProject.year}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <p><strong>შესრულებული:</strong> {filteredProject.completed}</p>
                        <p><strong>მიმდინარე:</strong> {filteredProject.ongoing}</p>
                        <p><strong>ფართობი (m²):</strong> {filteredProject.totalArea}</p>
                    </div>
                    
                    <h4 className="text-lg font-semibold mt-6 mb-3">მასალები</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="text-grayish border-b-2 border-gray-400">
                                <tr>
                                    <th className="px-4 py-2">მასალა</th>
                                    <th className="px-4 py-2">რაოდენობა</th>
                                </tr>
                            </thead>
                            <tbody className="text-grayish">
                                {filteredProject.materials.map((material, index) => (
                                    <tr key={index} className="text-center border-b border-gray-300 last:border-none">
                                        <td className="px-4 py-2">{material.name}</td>
                                        <td className="px-4 py-2">{material.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
