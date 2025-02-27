import { useTranslation } from "react-i18next";
import karkasi from "../assets/photos/karkasi.jpeg";
import { Link } from "react-router-dom";

const projects = [
    { id: 'YVqEIh8FDB24bvEp', title: "Project A", description: "Description for Project A", path: "/project-a" },
    { id: 2, title: "Project B", description: "Description for Project B", path: "/project-b" },
    { id: 3, title: "Project C", description: "Description for Project C", path: "/project-c" },
    { id: 4, title: "Project D", description: "Description for Project D", path: "/project-d" },
];


const Profile = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto flex flex-col items-center px-4 py-8">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 text-2xl">
                {t("myProjects")}
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <Link to={`${project.id}`} key={project.id} className="block border rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={karkasi} alt="..." className="" />
                        <div className="w-full bg-white p-4">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Profile;